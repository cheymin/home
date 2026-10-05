export default function Footer() {
  return (
    <footer className="pt-24 pb-10 mt-10 border-t" style={{ borderColor: "var(--color-border)" }}>
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 pb-14 border-b" style={{ borderColor: "var(--color-border)" }}>
          <div className="max-w-xl">
            <p className="section-eyebrow">blog.cheymin.top</p>
            <h2 className="font-extrabold tracking-tight" style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)", lineHeight: 1.15 }}>
              欢迎来<span className="logo-accent">博客找我玩</span>。
            </h2>
            <p className="mt-4 text-[color:var(--color-muted)]">
              埋头苦干，沉默是金。
            </p>
          </div>
          <a href="https://blog.cheymin.top" target="_blank" rel="noopener noreferrer" className="btn-contained self-start md:self-auto">
            访问博客 →
          </a>
        </div>

        <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-4 pt-6">
          <p className="terminal-mono text-sm text-[color:var(--color-dim)]">
            © {new Date().getFullYear()} Cheymin · 中国 · 重庆市北碚区
          </p>

          <div className="flex gap-2">
            <a href="https://blog.cheymin.top" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="博客" title="博客">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18"/>
              </svg>
            </a>
            <a href="https://blog.cheymin.top/about" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="关于" title="关于">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>
              </svg>
            </a>
            <a href="#top" className="icon-btn" aria-label="回到顶部" title="回到顶部">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 19V5M5 12l7-7 7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}