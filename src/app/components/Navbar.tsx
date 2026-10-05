"use client";

import { useEffect, useState } from "react";

const items = [
  { href: "#about", label: "关于" },
  { href: "#skills", label: "技能" },
  { href: "#journey", label: "生涯" },
  { href: "#preferences", label: "偏好" },
  { href: "#hobbies", label: "爱好" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
      <div className="shell flex w-full items-center gap-4">
        <a href="#top" className="flex items-baseline gap-[3px] font-bold leading-none">
          <span className="name-art text-[26px]">Cheymin</span>
          <span className="accent text-[15px]">の</span>
          <span className="text-[15px]">主页</span>
        </a>

        <div className="flex-1" />

        <nav className="hidden items-center gap-1 lg:flex">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="nav-link">
              {it.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn--primary ml-2 !px-4 !py-2">
          联系我
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
        </a>
      </div>
    </header>
  );
}