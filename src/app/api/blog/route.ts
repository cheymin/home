export const dynamic = "force-dynamic";

const FEED = "https://blog.cheymin.top/atom.xml";
const SEARCH = "https://blog.cheymin.top/search.xml";
const TTL = 30 * 60 * 1000;

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

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
    .replace(/&#x([0-9a-fA-F]+);/g, (_, code: string) => String.fromCharCode(parseInt(code, 16)))
    .replace(/&amp;/g, "&");
}

/**
 * 把博文 HTML 转成纯文本预览：
 * 去掉小标题（“前言”/章节名）、脚本样式，并处理 feed 截断留下的半个标签。
 */
function htmlToText(html: string) {
  return html
    .replace(/<!\[CDATA\[|\]\]>/g, "")
    .replace(/<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>/g, " ")
    .replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/g, " ")
    .replace(/<[^>]*$/, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function toText(html: string) {
  return unescapeXml(htmlToText(html)).replace(/\s+/g, " ").trim();
}

function pathOf(link: string) {
  try {
    return new URL(link).pathname;
  } catch {
    return link;
  }
}

async function fetchText(url: string) {
  const res = await fetch(url, {
    headers: { "user-agent": UA, accept: "application/atom+xml, application/xml, text/xml, */*" },
    signal: AbortSignal.timeout(8000),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`${url} ${res.status}`);
  return res.text();
}

/** search.xml 里是全文，用它拿到干净的正文预览；加密文章跳过。 */
function parseSearch(xml: string) {
  const map = new Map<string, string>();
  for (const chunk of xml.split("<entry>").slice(1)) {
    const entry = chunk.split("</entry>")[0];
    const url = pick(entry, /<url>([\s\S]*?)<\/url>/);
    const content = pick(entry, /<content>([\s\S]*?)<\/content>/);
    if (!url || !content) continue;
    if (content.includes("hexo-blog-encrypt") || content.includes("hbe-container")) continue;
    const text = toText(content);
    if (text) map.set(pathOf(url), text.slice(0, 120));
  }
  return map;
}

async function loadPosts(): Promise<Post[]> {
  const [feedXml, searchXml] = await Promise.all([
    fetchText(FEED),
    fetchText(SEARCH).catch(() => ""),
  ]);

  const searchMap = parseSearch(searchXml);

  return feedXml
    .split("<entry>")
    .slice(1)
    .map((chunk) => chunk.split("</entry>")[0])
    .map((entry) => {
      const link = pick(entry, /<link\s+href="([^"]+)"/);
      const summary = pick(entry, /<summary>([\s\S]*?)<\/summary>/);
      const excerpt = searchMap.get(pathOf(link)) || toText(summary).slice(0, 120);
      return {
        title: toText(pick(entry, /<title>([\s\S]*?)<\/title>/)),
        link,
        date: pick(entry, /<published>([\s\S]*?)<\/published>/),
        excerpt,
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