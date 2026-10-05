"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    __cheyminReady?: boolean;
  }
}

/**
 * 滚动入场：元素进入视口时加 .in，配合 CSS 的 data-reveal 过渡。
 * 只用 IntersectionObserver，不监听 scroll；
 * 等加载动画淡出（cheymin:ready）后再启动，保证首屏动效可见。
 */
export default function Reveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (typeof IntersectionObserver === "undefined") {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    const start = () => els.forEach((el) => io.observe(el));
    const onReady = () => start();

    if (window.__cheyminReady) {
      start();
    } else {
      window.addEventListener("cheymin:ready", onReady, { once: true });
    }
    // 兜底：若事件未触发，稍后也启动
    const fallback = window.setTimeout(start, 2600);

    return () => {
      window.removeEventListener("cheymin:ready", onReady);
      window.clearTimeout(fallback);
      io.disconnect();
    };
  }, []);

  return null;
}