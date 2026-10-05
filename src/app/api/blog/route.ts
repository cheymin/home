export const revalidate = 1800;

const FEED = "https://blog.cheymin.top/atom.xml";

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

export async function GET() {
  try {
    const res = await fetch(FEED, {
      headers: { "user-agent": "Mozilla/5.0 (compatible; cheymin-homepage)" },
      next: { revalidate },
    });
    if (!res.ok) throw new Error(`feed ${res.status}`);

    const xml = await res.text();

    const posts = xml
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

    return Response.json({ posts });
  } catch {
    return Response.json({ posts: [] });
  }
}