"use client";

import { useEffect, useState } from "react";

/** 轮换文字：每隔 interval 毫秒切换一次，带淡入上滑 */
export default function RotatingText({
  items,
  interval = 2000,
  className = "",
}: {
  items: string[];
  interval?: number;
  className?: string;
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setI((v) => (v + 1) % items.length), interval);
    return () => window.clearInterval(id);
  }, [items.length, interval]);

  return (
    <span className={`rotator ${className}`}>
      <span key={i}>{items[i]}</span>
    </span>
  );
}