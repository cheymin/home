// 生涯 —— 无限进步 + 个人信息 + 地图
const careers = [
  { key: "EDU", label: "江北中学初中生", icon: "🎓" },
  { key: "自托管", label: "N 个自建服务维护", icon: "🖥️" },
  { key: "博客", label: "blog.cheymin.top 博主", icon: "✍️" },
];

const info = [
  { k: "我现在住在", v: "中国，重庆市北碚区" },
  { k: "单位", v: "重庆江北中学" },
  { k: "职业", v: "初三学生" },
];

export default function Status() {
  return (
    <section id="status" className="reveal-section">
      <div className="reveal-content max-w-[1440px] mx-auto px-6 w-full">
        <p className="section-eyebrow">Status</p>
        <h2 className="font-extrabold tracking-tight max-w-3xl" style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)", lineHeight: 1.15 }}>
          无限<span className="logo-accent">进步</span>
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-6 stagger">
          {careers.map((c) => (
            <div key={c.key} className="paper rounded-2xl p-6 flex items-center gap-4">
              <span className="text-3xl">{c.icon}</span>
              <div>
                <p className="terminal-mono text-xs uppercase tracking-widest text-[color:var(--color-accent)] mb-1">{c.key}</p>
                <p className="font-semibold text-[color:var(--color-text)]">{c.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid lg:grid-cols-5 gap-6">
          {/* 地图卡 */}
          <div className="paper rounded-2xl overflow-hidden lg:col-span-2 relative min-h-[220px]">
            <img
              src="/map.webp"
              alt="重庆市北碚区"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(11,14,12,.92), rgba(11,14,12,.25))" }} />
            <div className="relative p-7 flex flex-col justify-end h-full min-h-[220px]">
              <p className="section-eyebrow">坐标</p>
              <p className="font-bold text-xl">中国 · 重庆市北碚区</p>
              <p className="terminal-mono text-sm text-[color:var(--color-muted)] mt-1">UTC+8</p>
            </div>
          </div>

          {/* 个人信息表 */}
          <div className="paper rounded-2xl p-8 grid sm:grid-cols-2 gap-6 lg:col-span-3">
            {info.map((it) => (
              <div key={it.k}>
                <p className="section-eyebrow !mb-2">{it.k}</p>
                <p className="font-semibold text-lg">{it.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}