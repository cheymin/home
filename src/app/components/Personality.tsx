// 性格 —— 逻辑学家 INTP-T + 座右铭 + 特长
export default function Personality() {
  return (
    <section id="personality" className="reveal-section">
      <div className="reveal-content max-w-[1440px] mx-auto px-6 w-full">
        <p className="section-eyebrow">Personality</p>
        <h2 className="font-extrabold tracking-tight max-w-3xl" style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)", lineHeight: 1.15 }}>
          性格：<span className="logo-accent">逻辑学家</span>
        </h2>

        <div className="mt-12 grid lg:grid-cols-3 gap-6 stagger">
          {/* INTP-T 卡 */}
          <div className="paper rounded-2xl p-8 flex flex-col items-center justify-center text-center">
            <img src="/intp.svg" alt="INTP 逻辑学家" width={88} height={88} className="w-[88px] h-[88px] mb-4" />
            <p className="section-eyebrow">16Personalities</p>
            <p className="font-extrabold tracking-tight" style={{ fontSize: "clamp(2.5rem, 6vw, 3.5rem)", color: "var(--color-accent)" }}>
              INTP-T
            </p>
            <p className="mt-3 text-[color:var(--color-muted)]">逻辑学家 · 不断改进的思考者</p>
            <a
              href="https://www.16personalities.com/ch/intp-%E4%BA%BA%E6%A0%BC"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-text mt-5"
            >
              在 16personalities 了解 ↗
            </a>
          </div>

          {/* 座右铭 */}
          <div className="paper rounded-2xl p-8 flex flex-col justify-center lg:col-span-2">
            <p className="section-eyebrow">座右铭</p>
            <p className="font-extrabold tracking-tight" style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", lineHeight: 1.25 }}>
              埋头苦干，<span className="logo-accent">沉默是金</span>。
            </p>
            <div className="mt-8 pt-6 border-t" style={{ borderColor: "var(--color-border)" }}>
              <p className="section-eyebrow">特长</p>
              <div className="flex flex-wrap gap-2.5 mt-1">
                <span className="chip">成熟稳重的办事</span>
                <span className="chip" style={{ borderColor: "rgba(135,219,172,.3)", color: "var(--color-accent)" }}>
                  二次元指数 MAX
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}