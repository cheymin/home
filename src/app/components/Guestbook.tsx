"use client";

import { useEffect, useRef } from "react";

const ENV_ID = "https://twikoo.346247.xyz/.netlify/functions/twikoo";
// 与博客保持一致：同版本、同 CDN（jsdmirror 国内访问更稳），all 包自带依赖
const SCRIPT = "https://cdn.jsdmirror.com/npm/twikoo@1.7.20/dist/twikoo.all.min.js";

declare global {
  interface Window {
    twikoo?: { init: (options: { envId: string; el: HTMLElement }) => Promise<void> };
  }
}

export default function Guestbook() {
  const holder = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = holder.current;
    if (!el) return;

    let cancelled = false;
    const boot = () => {
      if (cancelled || !window.twikoo) return;
      window.twikoo.init({ envId: ENV_ID, el }).catch(() => {});
    };

    if (window.twikoo) {
      boot();
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>("script[data-twikoo]");
    const onLoad = () => boot();

    if (existing) {
      existing.addEventListener("load", onLoad);
      return () => existing.removeEventListener("load", onLoad);
    }

    const script = document.createElement("script");
    script.src = SCRIPT;
    script.async = true;
    script.dataset.twikoo = "1";
    script.addEventListener("load", onLoad);
    document.body.appendChild(script);

    return () => {
      cancelled = true;
      script.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <section id="guestbook" className="section">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-4" data-reveal="left">
          <div>
            <p className="eyebrow">GUESTBOOK</p>
            <h2 className="h-title mt-3">
              留<span className="accent">言板</span>
            </h2>
          </div>
          <p className="lead max-w-md">路过留个脚印吧，友好交流，文明发言。</p>
        </div>

        <div className="card mt-12" data-reveal="up">
          <div ref={holder} />
        </div>
      </div>
    </section>
  );
}