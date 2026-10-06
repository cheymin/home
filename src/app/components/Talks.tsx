"use client";

import { useEffect, useState } from "react";

type Talk = { id: string; content: string; time: number; tags: string[] };

function formatTime(value: number) {
  if (!value) return "";
  const date = new Date(value * 1000);
  if (Number.isNaN(date.getTime())) return "";
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}.${pad(date.getMonth() + 1)}.${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

export default function Talks() {
  const [talks, setTalks] = useState<Talk[] | null>(null);

  useEffect(() => {
    let alive = true;
    fetch("/api/talks")
      .then((res) => res.json())
      .then((data: { talks?: Talk[] }) => {
        if (alive) setTalks(data.talks ?? []);
      })
      .catch(() => {
        if (alive) setTalks([]);
      });
    return () => {
      alive = false;
    };
  }, []);

  return (
    <section id="talks" className="section">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-4" data-reveal="left">
          <div>
            <p className="eyebrow">TALKS</p>
            <h2 className="h-title mt-3">
              最近<span className="accent">动态</span>
            </h2>
          </div>
          <a
            href="https://blog.cheymin.top/essay/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--glass"
          >
            全部说说
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </a>
        </div>

        <div className="mt-12">
          {talks === null && <p className="lead">正在加载动态…</p>}

          {talks?.length === 0 && <p className="lead">暂时没有动态，去博客的说说页面看看吧。</p>}

          {talks && talks.length > 0 && (
            <ol className="talk-list">
              {talks.map((talk, index) => (
                <li key={talk.id} className={`talk d${index % 3}`} data-reveal="up">
                  <span className="talk__dot" aria-hidden />
                  <div className="talk__body card">
                    <p className="whitespace-pre-wrap leading-relaxed">{talk.content}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span className="mono text-xs text-[color:var(--color-dim)]">
                        {formatTime(talk.time)}
                      </span>
                      {talk.tags.map((tag) => (
                        <span key={tag} className="chip !py-0.5 !text-[11px]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </section>
  );
}