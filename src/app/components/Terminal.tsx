"use client";

import { useEffect, useRef, useState } from "react";

// 原站 terminal-line 打字机效果（真实逐字输入）
type Line = { prompt?: boolean; text: string; cls?: string };

const SCRIPT: Line[] = [
  { prompt: true, text: "whoami" },
  { text: "Cheymin — 一名苦逼初中生", cls: "text-[color:var(--color-text)]" },
  { prompt: true, text: "cat motto.txt" },
  { text: "埋头苦干，沉默是金。", cls: "text-[color:var(--color-accent)]" },
  { prompt: true, text: "ls skills/" },
  { text: "Java  Python  JavaScript  TypeScript  Vue", cls: "text-[color:var(--color-muted)]" },
  { text: "React  Node.js  Docker  Linux  Hexo  C++", cls: "text-[color:var(--color-muted)]" },
  { prompt: true, text: "cat location.txt" },
  { text: "中国 · 重庆市北碚区 · UTC+8", cls: "text-[color:var(--color-text)]" },
];

export default function Terminal() {
  const [shown, setShown] = useState<string[]>([]);
  const [current, setCurrent] = useState("");
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [done, setDone] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lineIdx >= SCRIPT.length) { setDone(true); return; }
    const line = SCRIPT[lineIdx];
    const full = (line.prompt ? "" : "") + line.text;

    if (charIdx < full.length) {
      const t = setTimeout(() => {
        setCurrent(full.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      }, line.prompt ? 55 : 26);
      return () => clearTimeout(t);
    }
    // 行结束，暂停后进入下一行
    const t = setTimeout(() => {
      setShown((s) => [...s, full]);
      setCurrent("");
      setCharIdx(0);
      setLineIdx((i) => i + 1);
    }, line.prompt ? 260 : 420);
    return () => clearTimeout(t);
  }, [lineIdx, charIdx]);

  useEffect(() => {
    boxRef.current?.scrollTo({ top: boxRef.current.scrollHeight });
  }, [shown, current]);

  const activePrompt = lineIdx < SCRIPT.length && SCRIPT[lineIdx].prompt;

  return (
    <div className="terminal-effect terminal-mono" ref={boxRef}>
      {shown.map((l, i) => (
        <div key={i} className="terminal-line">
          {SCRIPT[i]?.prompt ? (
            <>
              <span className="text-[color:var(--color-dim)]">~/about/cheymin</span>
              <span className="text-[color:var(--color-accent)]">$ </span>
              <span className="text-[color:var(--color-text)]">{l}</span>
            </>
          ) : (
            <span className={SCRIPT[i]?.cls}>{l}</span>
          )}
        </div>
      ))}

      {/* 正在输入的行 */}
      {(current || !done) && (
        <div className="terminal-line">
          {activePrompt && (
            <>
              <span className="text-[color:var(--color-dim)]">~/about/cheymin</span>
              <span className="text-[color:var(--color-accent)]">$ </span>
            </>
          )}
          <span className={SCRIPT[lineIdx]?.cls}>{current}</span>
          <span className="terminal-cursor" />
        </div>
      )}
    </div>
  );
}