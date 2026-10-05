export const dynamic = "force-dynamic";

const FEED = "https://blog.cheymin.top/atom.xml";
const TTL = 30 * 60 * 1000;

type Post = { title: string; link: string; date: string; excerpt: string };

let cache: { at: number; posts: Post[] } | null = null;

function pick(source: string, re: RegExp) {
  const matched = source.match(re);
  return matched ? matched[1].trim() : "";
}

function unescapeXml(value: string) {
  return value
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCharCode(Number(code)))
    .replace(/&amp;/g, "&");
}

function toPlainText(html: string) {
  return unescapeXml(html)
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function loadPosts(): Promise<Post[]> {
  const res = await fetch(FEED, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
      accept: "application/atom+xml, application/xml, text/xml, */*",
    },
    signal: AbortSignal.timeout(8000),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`feed ${res.status}`);

  const xml = await res.text();

  return xml
    .split("<entry>")
    .slice(1)
    .map((chunk) => chunk.split("</entry>")[0])
    .map((entry) => {
      const summary = pick(entry, /<summary>([\s\S]*?)<\/summary>/).replace(/<!\[CDATA\[|\]\]>/g, "");
      return {
        title: toPlainText(pick(entry, /<title>([\s\S]*?)<\/title>/)),
        link: pick(entry, /<link\s+href="([^"]+)"/),
        date: pick(entry, /<published>([\s\S]*?)<\/published>/),
        excerpt: toPlainText(summary).slice(0, 120),
      };
    })
    .filter((post) => post.title && post.link)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 6);
}

export async function GET() {
  if (cache && Date.now() - cache.at < TTL) {
    return Response.json({ posts: cache.posts });
  }

  try {
    const posts = await loadPosts();
    if (posts.length > 0) cache = { at: Date.now(), posts };
    return Response.json({ posts });
  } catch {
    // 抓取失败时退回上一次成功的结果，避免整块空白
    return Response.json({ posts: cache?.posts ?? [] });
  }
}