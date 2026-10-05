"use client";

import { useEffect } from "react";

/**
 * 全局滚动特效：顶部进度条 + 视差层。
 * 统一在 rAF 里处理，避免多次重排。
 */
export default function ScrollFX() {
  useEffect(() => {
    const bar = document.querySelector<HTMLElement>("[data-progress]");
    const layers = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let raf = 0;

    const apply = () => {
      raf = 0;
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;

      if (bar) bar.style.transform = `scaleX(${h > 0 ? Math.min(y / h, 1) : 0})`;

      layers.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "0");
        el.style.transform = `translate3d(0, ${(y * speed).toFixed(2)}px, 0)`;
      });
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}