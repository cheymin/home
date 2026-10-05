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
 * 用 MutationObserver 兜住异步插入的元素（如抓取回来的文章卡片），
 * 避免它们在挂载后才出现却一直停留在 opacity:0。
 */
export default function Reveal() {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => el.classList.add("in"));
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

    const observed = new WeakSet<Element>();
    const observeAll = () => {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        if (observed.has(el)) return;
        observed.add(el);
        io.observe(el);
      });
    };

    const mo = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches("[data-reveal]")) {
            observed.add(node);
            io.observe(node);
          }
          node.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
            if (observed.has(el)) return;
            observed.add(el);
            io.observe(el);
          });
        });
      }
    });

    const start = () => {
      observeAll();
      mo.observe(document.body, { childList: true, subtree: true });
    };
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
      mo.disconnect();
      io.disconnect();
    };
  }, []);

  return null;
}