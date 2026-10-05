const EMAIL = "1@346247.xyz";

export default function Hero() {
  return (
    <section id="top" className="section" style={{ paddingTop: 116 }}>
      <div className="shell">
        <div className="grid gap-5 lg:grid-cols-12">
          {/* 左：打招呼 + 信息 */}
          <div className="card card--accent card--pad-lg d0 flex flex-col justify-center lg:col-span-7" data-reveal="left">
            <p className="eyebrow">HELLO, WORLD</p>

            <h1 className="h-hero mt-4">
              你好，很高兴认识你 <span className="accent">👋</span>
            </h1>

            <p className="lead mt-5 max-w-xl">
              我叫 <span className="font-bold text-[color:var(--color-text)]">Cheymin</span>，一名苦逼初中生。
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${EMAIL}`} className="btn btn--primary">
                联系我
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </a>
              <a href="#about" className="btn btn--ghost">
                认识一下我
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
              <span className="chip">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" />
                  <circle cx="12" cy="9" r="2.4" />
                </svg>
                中国 · 重庆市北碚区
              </span>
              <span className="chip chip--accent">INTP-T · 逻辑学家</span>
              <span className="chip">初三学生</span>
            </div>
          </div>

          {/* 右：我的头像 */}
          <div className="card d1 flex flex-col items-center justify-center gap-6 text-center lg:col-span-5" data-reveal="right">
            <div className="relative" data-parallax="0.05">
              <div
                className="pointer-events-none absolute -inset-6 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(124,196,240,.3), transparent 70%)" }}
              />
              <img
                src="/avatar.webp"
                alt="Cheymin 的头像"
                width={184}
                height={184}
                className="relative h-[184px] w-[184px] rounded-full object-cover"
                style={{ border: "1px solid var(--color-border-accent)" }}
              />
            </div>

            <div>
              <p className="name-art text-[2.7rem] leading-none">Cheymin</p>
              <p className="mono mt-3 text-sm text-[color:var(--color-muted)]">埋头苦干，沉默是金</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}