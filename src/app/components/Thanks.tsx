// 致谢 —— 赞赏名单
const donors = [{ name: "Ran", amount: "¥20", date: "2026-08-20" }];

export default function Thanks() {
  return (
    <section id="thanks" className="reveal-section">
      <div className="reveal-content max-w-[1440px] mx-auto px-6 w-full">
        <p className="section-eyebrow">Thanks</p>
        <h2 className="font-extrabold tracking-tight max-w-3xl" style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)", lineHeight: 1.15 }}>
          赞赏<span className="logo-accent">名单</span>
        </h2>
        <p className="mt-4 text-[color:var(--color-muted)] max-w-2xl">
          感谢因为有你们，让我更加有创作的动力。
        </p>

        <div className="mt-12 paper rounded-2xl p-8">
          {donors.map((d) => (
            <div key={d.name} className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-bold shrink-0"
                style={{ background: "rgba(135,219,172,.15)", color: "var(--color-accent)" }}
              >
                {d.name.charAt(0)}
              </div>
              <div className="flex-1">
                <p className="font-bold">{d.name}</p>
                <p className="terminal-mono text-xs text-[color:var(--color-dim)]">{d.date}</p>
              </div>
              <span className="terminal-mono font-bold" style={{ color: "var(--color-accent)" }}>{d.amount}</span>
            </div>
          ))}
          <p className="mt-6 pt-6 border-t text-sm text-[color:var(--color-dim)]" style={{ borderColor: "var(--color-border)" }}>
            最新更新时间：2026-08-20
          </p>
        </div>
      </div>
    </section>
  );
}