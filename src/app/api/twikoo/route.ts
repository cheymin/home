export const dynamic = "force-dynamic";

/**
 * 同源代理 Twikoo 后端，避免浏览器跨域（Twikoo 前端会把请求发到这里）。
 * 前端 envId 设为 `${origin}/api/twikoo`，浏览器只与本站通信。
 */
const BACKEND = "https://twikoo.346247.xyz/.netlify/functions/twikoo";

export async function POST(request: Request) {
  const body = await request.text();

  const headers: Record<string, string> = {
    "content-type": "application/json",
    "user-agent": request.headers.get("user-agent") ?? "cheymin-homepage",
  };
  for (const name of ["x-forwarded-for", "x-real-ip"]) {
    const value = request.headers.get(name);
    if (value) headers[name] = value;
  }

  try {
    const res = await fetch(BACKEND, {
      method: "POST",
      headers,
      body,
      cache: "no-store",
      signal: AbortSignal.timeout(15000),
    });

    return new Response(await res.text(), {
      status: res.status,
      headers: { "content-type": "application/json; charset=utf-8" },
    });
  } catch {
    return Response.json({ code: -1, message: "留言服务暂时不可用，请稍后再试" });
  }
}