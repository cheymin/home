const EMAIL = "1@346247.xyz";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="shell hero__inner">
        <div className="hero__head" data-reveal="left">
          <div className="avatar-ring" aria-hidden>
            <img src="/avatar.webp" alt="" />
          </div>

          <div>
            <p className="eyebrow">HELLO, WORLD · 中国 · 重庆市北碚区</p>
            <h1 className="hero__name name-art">Cheymin</h1>
            <p className="hero__tag">一名苦逼初中生 · INTP-T · 初三学生</p>
          </div>
        </div>

        <p className="hero__desc" data-reveal="up">
          你好，很高兴认识你。关注数码科技：手机、电脑软硬件、刷机与自托管，把几乎全部休闲时间都用来折腾设备。
        </p>

        <div className="mt-10 flex flex-wrap gap-3" data-reveal="up">
          <a href={`mailto:${EMAIL}`} className="btn btn--primary">
            联系我
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </a>
          <a href="#about" className="btn btn--glass">
            认识一下我
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-2.5" data-reveal="up">
          <span className="chip chip--accent">埋头苦干，沉默是金</span>
          <span className="chip">自托管服务</span>
          <span className="chip">浅蓝色</span>
        </div>
      </div>
    </section>
  );
}