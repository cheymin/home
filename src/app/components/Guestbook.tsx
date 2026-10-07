"use client";

import { useEffect, useRef } from "react";

// 走后端同源代理（/api/twikoo），避免浏览器跨域；路径必须是绝对 URL 才会被识别为 HTTP 模式
const ENV_PATH = "/api/twikoo";
// 后端已升级至 Twikoo 2.x，前端使用同版本；jsdmirror CDN 国内访问更稳，all 包自带依赖
const SCRIPT = "https://cdn.jsdmirror.com/npm/twikoo@2.0.12/dist/twikoo.all.min.js";

declare global {
  interface Window {
    twikoo?: {
      init: (options: { envId: string; el: HTMLElement; path?: string }) => Promise<void>;
    };
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
      window.twikoo
        .init({ envId: `${window.location.origin}${ENV_PATH}`, el, path: "/guestbook" })
        .catch(() => {});
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