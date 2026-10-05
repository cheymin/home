const careers = [
  { key: "EDU", title: "江北中学 · 初中生", desc: "在读，初三" },
  { key: "自托管", title: "1N 个自建服务", desc: "从博客到 Cheymin Music" },
  { key: "折腾", title: "固件 / 设备破解", desc: "词典笔、路由器刷机" },
];

const info = [
  { k: "我现在住在", v: "中国，重庆市北碚区" },
  { k: "单位", v: "重庆江北中学" },
  { k: "职业", v: "初三学生" },
];

const services = [
  "Uptime Kuma", "AstrBot", "NapCat", "Hexo", "Cloudreve", "Vaultwarden",
  "Twikoo", "Open WebUI", "Chat2API", "New API", "Openlist", "Qexo",
  "Memos", "Nodewarden", "ImgBed", "Cap", "OpenWrt", "Telegram API",
];

export default function Journey() {
  return (
    <section id="journey" className="section">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-4" data-reveal="left">
          <div>
            <p className="eyebrow">JOURNEY</p>
            <h2 className="h-title mt-3">
              无限<span className="accent">进步</span>
            </h2>
          </div>
          <p className="lead max-w-md">自己动手，丰衣足食。</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {careers.map((c, i) => (
            <div key={c.key} className={`card d${i}`} data-reveal="scale">
              <span
                className="mono accent inline-flex items-center rounded-md border px-2 py-1 text-[11px] tracking-widest"
                style={{ borderColor: "var(--color-border-accent)", background: "rgba(124,196,240,.1)" }}
              >
                {c.key}
              </span>
              <p className="mt-4 font-bold">{c.title}</p>
              <p className="lead mt-1 text-sm">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="card card--pad-lg d0 mt-5 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" data-reveal>
          {info.map((it) => (
            <div key={it.k}>
              <p className="eyebrow">{it.k}</p>
              <p className="mt-2 font-bold">{it.v}</p>
            </div>
          ))}
        </div>

        {/* 自建服务：横向滚动 */}
        <div className="mt-10" data-reveal>
          <div className="mb-4 flex items-end justify-between gap-4">
            <p className="eyebrow">SELF-HOSTED · 维护中的自建服务</p>
            <span className="mono accent text-sm">1N+</span>
          </div>
          <div className="marquee-mask">
            <div className="marquee">
              {[...services, ...services].map((s, i) => (
                <span key={`${s}-${i}`} className="chip shrink-0 whitespace-nowrap">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}