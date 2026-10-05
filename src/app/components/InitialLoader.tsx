"use client";

import { useEffect, useState } from "react";

export default function InitialLoader({ children }: { children: React.ReactNode }) {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1200);
    return () => clearTimeout(t);
  }, []);
  if (done) return <>{children}</>;
  return (
    <div className="initial-loader" role="status" aria-label="Loading">
      <div className="initial-loader__content">
        <div className="initial-loader__avatar-frame">
          <div className="initial-loader__pulse" />
          <img className="initial-loader__avatar" src="/avatar.webp" alt="" width={72} height={72} />
        </div>
        <div className="terminal-mono font-bold text-[15px]">
          Cheymin<span className="logo-accent">.</span>
        </div>
        <div className="initial-loader__progress"><span /></div>
      </div>
    </div>
  );
}