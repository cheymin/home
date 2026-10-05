"use client";

import { useEffect, useState } from "react";

type Phase = "loading" | "leaving" | "done";

declare global {
  interface Window {
    __cheyminReady?: boolean;
  }
}

/**
 * 加载动画：头像 + 光环 + 进度条。
 * 页面内容始终渲染（利于 SSR/SEO），遮罩固定在其上层；
 * 遮罩淡出时派发 cheymin:ready，页面入场动效随之启动。
 */
export default function InitialLoader({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<Phase>("loading");

  useEffect(() => {
    const t1 = window.setTimeout(() => {
      window.__cheyminReady = true;
      window.dispatchEvent(new Event("cheymin:ready"));
      setPhase("leaving");
    }, 1500);
    const t2 = window.setTimeout(() => setPhase("done"), 2050);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  return (
    <>
      {children}

      {phase !== "done" && (
        <div
          className={`loader${phase === "leaving" ? " is-leaving" : ""}`}
          role="status"
          aria-label="加载中"
        >
          <div className="loader__inner">
            <div className="loader__frame">
              <span className="loader__ring" />
              <img className="loader__avatar" src="/avatar.webp" alt="" width={84} height={84} />
            </div>
            <div className="loader__name">
              Cheymin<span className="accent">の</span>主页
            </div>
            <div className="loader__bar">
              <i />
            </div>
          </div>
        </div>
      )}
    </>
  );
}