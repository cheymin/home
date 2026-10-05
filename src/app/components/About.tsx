const tags = [
  "自托管服务爱好者", "独立博客作者", "一名初中生", "INTP-T",
];

export default function About() {
  return (
    <section id="about" className="reveal-section">
      <div className="reveal-content max-w-[1440px] mx-auto px-6 w-full">
        <p className="section-eyebrow">About</p>
        <h2 className="font-extrabold tracking-tight max-w-3xl" style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)", lineHeight: 1.15 }}>
          你好，很高兴认识你👋
        </h2>

        <div className="mt-12 grid lg:grid-cols-2 gap-6 items-stretch stagger">
          {/* 自我介绍 */}
          <div className="paper rounded-2xl p-8 md:p-10 flex flex-col justify-center">
            <p className="terminal-mono text-sm text-[color:var(--color-dim)] mb-3">{"// 我叫"}</p>
            <p className="font-extrabold tracking-tight mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
              Chey<span className="logo-accent">min</span>
            </p>
            <p className="text-[color:var(--color-muted)] leading-relaxed">
              一名苦逼初中生。喜欢数码科技，关注手机、电脑软硬件、刷机与自托管。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://blog.cheymin.top" target="_blank" rel="noopener noreferrer" className="btn-text">博客 ↗</a>
              <a href="https://blog.cheymin.top/about" target="_blank" rel="noopener noreferrer" className="btn-text">关于页 ↗</a>
            </div>
          </div>

          {/* 追求 */}
          <div className="paper rounded-2xl p-8 md:p-10 flex flex-col justify-center">
            <p className="section-eyebrow !mb-6">追求</p>
            <div className="space-y-4">
              <p className="font-bold text-2xl md:text-3xl leading-snug">
                源于<span className="logo-accent">热爱</span>而去
              </p>
              <p className="font-bold text-2xl md:text-3xl leading-snug">
                <span className="logo-accent">歌颂</span>感受生活
              </p>
              <p className="font-bold text-2xl md:text-3xl leading-snug">
                体验<span className="logo-accent">学习</span>
              </p>
            </div>
            <p className="terminal-mono mt-6 text-[color:var(--color-accent)]">Hello!</p>
          </div>
        </div>

        {/* 标签 */}
        <div className="mt-6 flex flex-wrap gap-2.5">
          {tags.map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}