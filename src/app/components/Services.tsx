import type { ReactNode } from "react";

const ICONS: Record<string, ReactNode> = {
  site: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.6 2.7 2.6 15.3 0 18M12 3c-2.6 2.7-2.6 15.3 0 18" />
    </>
  ),
  music: (
    <>
      <path d="M9 17V5l10-2v12" />
      <circle cx="6" cy="17" r="3" />
      <circle cx="16" cy="15" r="3" />
    </>
  ),
  api: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />,
  drive: <path d="M7 18a4 4 0 0 1-.6-7.96A6 6 0 0 1 18 8.5a3.5 3.5 0 0 1 .5 6.96Z" />,
  mail: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3 6.5 9 6 9-6" />
    </>
  ),
  fun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
    </>
  ),
};

const services = [
  {
    name: "Cheymin の 小窝",
    desc: "个人博客，记录折腾、教程与生活。",
    href: "https://blog.cheymin.top",
    tag: "站点",
    icon: "site",
  },
  {
    name: "Cheymin Music",
    desc: "自建音乐馆，随时听点喜欢的歌。",
    href: "https://music.cheymin.top",
    tag: "音乐",
    icon: "music",
  },
  {
    name: "New API",
    desc: "AI 模型接口的中转与分发。",
    href: "https://api.cheymin.top",
    tag: "AI",
    icon: "api",
  },
  {
    name: "Cheymin Cloud Drive",
    desc: "自建云盘，文件随处可取。",
    href: "https://pan.cheymin.top",
    tag: "存储",
    icon: "drive",
  },
  {
    name: "Cloud Mail",
    desc: "自建邮箱，收发域名邮件。",
    href: "https://mail.cheymin.top",
    tag: "邮件",
    icon: "mail",
  },
  {
    name: "网页小空调",
    desc: "一个纯属好玩的网页小空调。",
    href: "https://blog.cheymin.top/air-conditioner/",
    tag: "娱乐",
    icon: "fun",
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-4" data-reveal="left">
          <div>
            <p className="eyebrow">SELF-HOSTED</p>
            <h2 className="h-title mt-3">
              自建<span className="accent">服务</span>
            </h2>
          </div>
          <p className="lead max-w-md">自己搭、自己维护，点开就能用。</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <a
              key={service.href}
              href={service.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`card card-link group d${index % 3} flex items-start gap-4`}
              data-reveal="up"
            >
              <span className="svc-icon" aria-hidden>
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {ICONS[service.icon]}
                </svg>
              </span>

              <span className="min-w-0 flex-1">
                <span className="mono text-[11px] tracking-widest text-[color:var(--color-dim)]">
                  {service.tag}
                </span>
                <h3 className="mt-1 text-lg font-bold leading-snug transition-colors group-hover:text-[color:var(--color-accent)]">
                  {service.name}
                </h3>
                <span className="lead mt-2 block text-sm">{service.desc}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}