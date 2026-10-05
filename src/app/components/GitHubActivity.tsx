"use client";

import { useEffect, useMemo, useState } from "react";

type Day = { date: string; count: number; level: number };

const RECENT_DAYS = 31;

function buildWeeks(days: Day[]) {
  if (days.length === 0) return [] as (Day | null)[][];

  const weeks: (Day | null)[][] = [];
  let week: (Day | null)[] = [];

  const firstWeekday = new Date(`${days[0].date}T00:00:00Z`).getUTCDay();
  for (let i = 0; i < firstWeekday; i += 1) week.push(null);

  for (const day of days) {
    week.push(day);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }

  if (week.length > 0) {
    while (week.length < 7) week.push(null);
    weeks.push(week);
  }

  return weeks;
}

export default function GitHubActivity() {
  const [days, setDays] = useState<Day[] | null>(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let alive = true;
    fetch("/api/contributions")
      .then((res) => res.json())
      .then((data: { total?: number; days?: Day[] }) => {
        if (!alive) return;
        setDays(data.days ?? []);
        setTotal(data.total ?? 0);
      })
      .catch(() => {
        if (alive) setDays([]);
      });
    return () => {
      alive = false;
    };
  }, []);

  const recent = useMemo(() => (days ?? []).slice(-RECENT_DAYS), [days]);
  const weeks = useMemo(() => buildWeeks(recent), [recent]);
  const monthTotal = recent.reduce((sum, day) => sum + day.count, 0);

  return (
    <section id="github" className="section">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-4" data-reveal="left">
          <div>
            <p className="eyebrow">GITHUB</p>
            <h2 className="h-title mt-3">
              代码<span className="accent">足迹</span>
            </h2>
          </div>
          <a
            href="https://github.com/cheymin"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--glass"
          >
            github.com/cheymin
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </a>
        </div>

        <div className="card mt-12" data-reveal="up">
          <div className="flex flex-wrap items-baseline gap-x-8 gap-y-3">
            <p className="mono text-sm text-[color:var(--color-muted)]">
              近一年贡献 <span className="text-2xl font-bold text-[color:var(--color-accent)]">{total}</span> 次
            </p>
            <p className="mono text-sm text-[color:var(--color-muted)]">
              近一月 <span className="text-2xl font-bold text-[color:var(--color-accent)]">{monthTotal}</span> 次
            </p>
          </div>

          {days === null && <p className="lead mt-8">正在加载贡献日历…</p>}

          {days?.length === 0 && (
            <p className="lead mt-8">暂时没能取到贡献数据，可以去 GitHub 主页看看。</p>
          )}

          {weeks.length > 0 && (
            <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
              <div className="cal">
                <div className="cal__weeks">
                  {weeks.map((week, index) => (
                    <div key={`w${index}`} className="cal__col">
                      {week.map((day, dayIndex) =>
                        day ? (
                          <span
                            key={day.date}
                            className={`cal__cell lv${day.level}`}
                            title={`${day.date} · ${day.count} 次贡献`}
                          />
                        ) : (
                          <span key={`e${dayIndex}`} className="cal__cell cal__cell--empty" />
                        )
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-[color:var(--color-dim)]">
                <span>少</span>
                <span className="cal__key lv1" />
                <span className="cal__key lv2" />
                <span className="cal__key lv3" />
                <span className="cal__key lv4" />
                <span>多</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}