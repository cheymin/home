const EMAIL = "1@346247.xyz";

const contacts = [
  { label: "GitHub", href: "https://github.com/cheymin" },
  { label: "哔哩哔哩", href: "https://space.bilibili.com/3493142112242314" },
  { label: "QQ", href: "https://qm.qq.com/q/haBHejhGnu" },
  { label: "X (Twitter)", href: "https://x.com/mindjkl" },
];

export default function Footer() {
  return (
    <footer id="contact" className="section" style={{ paddingBottom: 40 }}>
      <div className="shell">
        <div className="card card--accent card--pad-lg d0" data-reveal="scale">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow">CONTACT</p>
              <h2 className="h-title mt-3">
                联系<span className="accent">我</span>
              </h2>
              <p className="lead mt-4 max-w-lg">
                想交流技术、问点问题，或者只是想打个招呼，都欢迎来信。邮件是最快能找到我的方式。
              </p>

              <a
                href={`mailto:${EMAIL}`}
                className="btn btn--primary mt-7 !px-6 !py-3 !text-base"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
                  <path d="m3 6.5 9 6 9-6" />
                </svg>
                {EMAIL}
              </a>

              <p className="mono mt-4 text-xs text-[color:var(--color-dim)]">邮箱为主，其次可以来这些地方找我</p>
            </div>

            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3">
                {contacts.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="chip !justify-center !py-3 !text-sm"
                  >
                    {c.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div
            className="mono mt-10 flex flex-col gap-4 border-t pt-6 text-sm text-[color:var(--color-dim)] sm:flex-row sm:items-center sm:justify-between"
            style={{ borderColor: "var(--color-border)" }}
          >
            <p>
              © {new Date().getFullYear()} Cheymin<span className="accent">の</span>主页 · 中国 · 重庆市北碚区
            </p>
            <div className="flex gap-4">
              <a href={`mailto:${EMAIL}`} className="hover:text-[color:var(--color-accent)]">
                邮箱
              </a>
              <a href="#top" className="hover:text-[color:var(--color-accent)]">
                回到顶部
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}