"use client";

import { useEffect, useRef } from "react";
import Terminal from "./Terminal";

export default function Hero() {
  const imgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // 原站 parallax：滚动时背景图上移 + 内容淡出
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        const vh = window.innerHeight;
        if (imgRef.current) {
          imgRef.current.style.transform = `translate3d(0, ${y * 0.35}px, 0) scale(1.06)`;
        }
        if (contentRef.current) {
          const p = Math.min(y / (vh * 0.9), 1);
          contentRef.current.style.opacity = String(1 - p * 1.05);
          contentRef.current.style.transform = `translate3d(0, ${y * 0.18}px, 0)`;
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section id="top" className="reveal-section" style={{ position: "relative", overflow: "hidden", marginTop: 0, paddingTop: 0 }}>
      {/* 原站 hero-parallax-image */}
      <div className="hero-parallax-image" ref={imgRef}>
        <img className="hero-image" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=60" alt="" />
      </div>
      <div className="hero-parallax-overlay" />

      <div className="hero-parallax-content" ref={contentRef}>
        <div className="reveal-content max-w-[1440px] mx-auto px-6 w-full">
          <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16">
            {/* 左：文字 */}
            <div className="max-w-2xl">
              <p className="terminal-mono mb-4 text-sm" style={{ color: "var(--color-accent)" }}>
                自托管服务爱好者 · 独立博客作者 · 重庆
              </p>

              <h1 className="font-extrabold tracking-tight" style={{ fontSize: "clamp(3rem, 9vw, 5.5rem)", lineHeight: 1.05 }}>
                Chey<span className="logo-accent">min</span>
              </h1>

              <p className="mt-5 font-bold max-w-2xl" style={{ fontSize: "clamp(1.15rem, 2.6vw, 1.6rem)", lineHeight: 1.4 }}>
                你好，很高兴认识你👋 我叫 <span className="logo-accent">Cheymin</span>。
              </p>

              <p className="mt-4 text-[color:var(--color-muted)] max-w-2xl leading-relaxed">
                一名苦逼初中生。埋头苦干，沉默是金✨
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="https://blog.cheymin.top" target="_blank" rel="noopener noreferrer" className="btn-contained">
                  访问博客 →
                </a>
                <a href="#about" className="btn-outlined">认识一下我</a>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="chip">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                  中国 · 重庆市北碚区 · UTC+8
                </span>
                <span className="chip" style={{ borderColor: "rgba(135,219,172,.3)", background: "rgba(135,219,172,.1)", color: "var(--color-accent)" }}>
                  INTP-T · 逻辑学家
                </span>
              </div>

              <div className="mt-8">
                <Terminal />
              </div>
            </div>

            {/* 右：头像（浮动） */}
            <div className="hidden md:flex justify-center shrink-0">
              <div className="avatar-float relative">
                <div
                  className="absolute -inset-4 rounded-full"
                  style={{ background: "radial-gradient(circle, rgba(135,219,172,.28), transparent 70%)" }}
                />
                <img
                  src="/avatar.webp"
                  alt="Cheymin 的头像"
                  width={220}
                  height={220}
                  className="relative rounded-full border-2"
                  style={{ borderColor: "rgba(135,219,172,.45)", width: 220, height: 220, objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 原站 scroll cue */}
        <a href="#about" className="hero-scroll-cue scroll-cue terminal-mono flex flex-col items-center gap-2 text-xs uppercase tracking-[.2em] text-[color:var(--color-muted)]">
          <span>Scroll to explore</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </a>
      </div>
    </section>
  );
}