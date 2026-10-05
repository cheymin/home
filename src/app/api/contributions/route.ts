export const dynamic = "force-dynamic";

const API = "https://github-contributions-api.jogruber.de/v4/cheymin?y=last";
const TTL = 60 * 60 * 1000;

type Day = { date: string; count: number; level: number };

let cache: { at: number; total: number; days: Day[] } | null = null;

export async function GET() {
  if (cache && Date.now() - cache.at < TTL) {
    return Response.json({ total: cache.total, days: cache.days });
  }

  try {
    const res = await fetch(API, {
      signal: AbortSignal.timeout(8000),
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`api ${res.status}`);

    const data = (await res.json()) as { total?: { lastYear?: number }; contributions?: Day[] };
    const days = (data.contributions ?? []).map((day) => ({
      date: day.date,
      count: day.count,
      level: day.level,
    }));
    const total = data.total?.lastYear ?? days.reduce((sum, day) => sum + day.count, 0);

    if (days.length > 0) cache = { at: Date.now(), total, days };

    return Response.json({ total, days });
  } catch {
    // 抓取失败时退回上一次成功的结果
    return Response.json({ total: cache?.total ?? 0, days: cache?.days ?? [] });
  }
}