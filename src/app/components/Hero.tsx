const BLOG = "https://blog.cheymin.top";
const GITHUB = "https://github.com/cheymin";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="shell hero__inner">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* 左：介绍 */}
          <div className="lg:col-span-7" data-reveal="left">
            <p className="hero__hello">你好！我是</p>

            <h1 className="hero__name name-art">Cheymin</h1>

            <p className="hero__tag">一名苦逼初中生 · INTP-T · 初三学生</p>

            <p className="hero__desc">
              你好朋友，很高兴认识你。欢迎你的到来。期待与您一同无限进步！
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href={BLOG} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                访问博客
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </a>
              <a href="#contact" className="btn btn--glass">
                联系我
              </a>
              <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="btn btn--glass">
                GitHub 主页
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
              <span className="chip chip--accent">座右铭：埋头苦干，沉默是金</span>
            </div>
          </div>

          {/* 右：头像（光环旋转 + 脉冲扩散） */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end" data-reveal="right">
            <div className="avatar-ring">
              <span className="pulse" aria-hidden />
              <img src="/avatar.webp" alt="Cheymin 的头像" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}