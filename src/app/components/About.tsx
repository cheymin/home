import RotatingText from "./RotatingText";

const tags = ["硬核技术爱好者", "独立博客作者", "一名初中生", "极简主义"];

const pursuitWords = ["歌颂", "感受", "生活", "体验学习"];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="shell">
        {/* 标题 */}
        <div className="flex flex-wrap items-end justify-between gap-4" data-reveal="left">
          <div>
            <p className="eyebrow">ABOUT</p>
            <h2 className="h-title mt-3">
              关于<span className="accent">我</span>
            </h2>
          </div>
          <p className="lead max-w-md">你好，很高兴认识你 👋</p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-12">
          {/* 自我介绍 */}
          <div className="card d0 flex flex-col justify-between lg:col-span-7" data-reveal="left">
            <div>
              <p className="eyebrow">SELF</p>
              <p className="mt-4 text-xl font-bold md:text-2xl">一名苦逼初中生。</p>
              <p className="lead mt-3">
                关注数码科技：手机、电脑软硬件、刷机与自托管，把几乎全部休闲时间都用来折腾设备。
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* 追求：轮换文字，约 2s 一切 */}
          <div className="card card--accent d1 flex flex-col justify-center lg:col-span-5" data-reveal="right">
            <p className="eyebrow">PURSUIT</p>
            <p className="mt-4 text-2xl font-extrabold tracking-tight md:text-3xl">因为热爱而去</p>
            <RotatingText
              items={pursuitWords}
              interval={2000}
              className="accent mt-1 text-3xl font-extrabold leading-tight tracking-tight md:text-4xl"
            />
          </div>

          {/* 坐标（地图） */}
          <div className="card card--flush d0 relative flex min-h-[220px] lg:col-span-4" data-reveal>
            <img
              src="/map.webp"
              alt="重庆市北碚区"
              className="absolute inset-0 h-full w-full object-cover opacity-45"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(7,11,16,.95), rgba(7,11,16,.18))" }}
            />
            <div className="relative mt-auto flex h-full min-h-[220px] flex-col justify-end p-7">
              <p className="eyebrow">LOCATION</p>
              <p className="mt-2 text-lg font-bold">中国 · 重庆市北碚区</p>
              <p className="mono mt-1 text-sm text-[color:var(--color-dim)]">UTC+8</p>
            </div>
          </div>

          {/* 性格 */}
          <div className="card d1 flex flex-col items-center justify-center text-center lg:col-span-4" data-reveal="scale">
            <img src="/intp.svg" alt="INTP 逻辑学家" width={72} height={72} className="h-[72px] w-[72px]" />
            <p className="eyebrow mt-4">PERSONALITY</p>
            <p className="accent mt-2 text-4xl font-extrabold tracking-tight">INTP-T</p>
            <p className="lead mt-2 text-sm">逻辑学家 · 自评「佛系」</p>
          </div>

          {/* 座右铭 + 特长 */}
          <div className="card d2 lg:col-span-4" data-reveal="right">
            <p className="eyebrow">MOTTO</p>
            <p className="mt-3 text-xl font-extrabold leading-snug">
              埋头苦干，<span className="accent">沉默是金</span>。
            </p>
            <div className="mt-6 border-t pt-5" style={{ borderColor: "var(--color-border)" }}>
              <p className="eyebrow">特 长</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="chip">搭建网站 / 自建服务生态</span>
                <span className="chip chip--accent">二次元指数 MAX</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}