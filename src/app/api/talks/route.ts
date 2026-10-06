export const dynamic = "force-dynamic";

const API = "https://cms.346247.xyz/pub/talks/";
const TTL = 10 * 60 * 1000;

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

type Talk = { id: string; content: string; time: number; tags: string[] };

let cache: { at: number; talks: Talk[] } | null = null;

/** 说说内容是简单 HTML，转成纯文本并保留换行。 */
function htmlToText(html: string) {
  return html
    .replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/g, " ")
    .replace(/<\/(p|div|li)>/gi, "\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x([0-9a-fA-F]+);/g, (_, code: string) => String.fromCharCode(parseInt(code, 16)))
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCharCode(Number(code)))
    .replace(/&amp;/g, "&")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/^\n+|\n+$/g, "")
    .trim();
}

export async function GET() {
  if (cache && Date.now() - cache.at < TTL) {
    return Response.json({ talks: cache.talks });
  }

  try {
    const res = await fetch(API, {
      headers: { "user-agent": UA, accept: "application/json" },
      signal: AbortSignal.timeout(8000),
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`talks ${res.status}`);

    const json = (await res.json()) as { data?: Array<Record<string, unknown>> };
    const talks = (json.data ?? [])
      .map((item) => ({
        id: String(item.id ?? ""),
        content: htmlToText(String(item.content ?? "")),
        time: Number(item.time ?? 0),
        tags: Array.isArray(item.tags) ? item.tags.map(String) : [],
      }))
      .filter((talk) => talk.content)
      .sort((a, b) => b.time - a.time)
      .slice(0, 8);

    if (talks.length > 0) cache = { at: Date.now(), talks };
    return Response.json({ talks });
  } catch {
    return Response.json({ talks: cache?.talks ?? [] });
  }
}