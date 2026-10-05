export const revalidate = 3600;

const API = "https://github-contributions-api.jogruber.de/v4/cheymin?y=last";

type Day = { date: string; count: number; level: number };

export async function GET() {
  try {
    const res = await fetch(API, { next: { revalidate } });
    if (!res.ok) throw new Error(`api ${res.status}`);

    const data = (await res.json()) as { total?: { lastYear?: number }; contributions?: Day[] };
    const days = (data.contributions ?? []).map((day) => ({
      date: day.date,
      count: day.count,
      level: day.level,
    }));

    return Response.json({
      total: data.total?.lastYear ?? days.reduce((sum, day) => sum + day.count, 0),
      days,
    });
  } catch {
    return Response.json({ total: 0, days: [] });
  }
}