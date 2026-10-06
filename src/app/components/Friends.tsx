type Friend = { name: string; desc: string; href: string; avatar: string };

const friends: Friend[] = [
  {
    name: "安知鱼",
    desc: "生活明朗，万物可爱",
    href: "https://blog.anheyu.com/",
    avatar: "https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg",
  },
  {
    name: "张洪Heo",
    desc: "分享设计与科技生活",
    href: "https://blog.zhheo.com/",
    avatar: "https://img.zhheo.com/i/67d8fa75943e4.webp",
  },
  {
    name: "iMaeGoo's Blog",
    desc: "虹墨空间站",
    href: "https://www.imaegoo.com",
    avatar: "https://cdn.jsdmirror.com/npm/imaegoo/avatar.jpg",
  },
  {
    name: "mccsjs",
    desc: "点一盏灯，等一个迷路的夜",
    href: "https://blog.seln.cn",
    avatar: "https://blog.seln.cn/img/a.jpg",
  },
  {
    name: "阿锦在线",
    desc: "记录生活点滴！",
    href: "https://www.ajinol.com",
    avatar: "https://www.ajinol.com/upload/logo.png",
  },
  {
    name: "AI悦创",
    desc: "创造不同！",
    href: "https://blog.bornforthis.cn",
    avatar: "https://bornforthis.cn/aiyc.svg",
  },
  {
    name: "轻笑Chuckle",
    desc: "漫天倾尘，风中轻笑",
    href: "https://www.qcqx.cn",
    avatar: "https://www.qcqx.cn/head.webp",
  },
  {
    name: "BIIBII",
    desc: "记录生活中的技术脉搏",
    href: "https://www.biibii.cn",
    avatar: "https://www.biibii.cn/usr/uploads/2025/07/3155658037.webp",
  },
  {
    name: "Elykia",
    desc: "致以无瑕之人",
    href: "https://blog.elykia.cn/",
    avatar: "https://bu.dusays.com/2024/10/25/671b2438203a6.gif",
  },
  {
    name: "JustPureH2O 的博客",
    desc: "穷方圆平直之情，尽规矩准绳之用",
    href: "https://justpureh2o.cn",
    avatar: "https://img.justpureh2o.cn/image/667f85b1d9c307b7e9ef9f2c.jpg",
  },
  {
    name: "min 的主页",
    desc: "我滴主页！",
    href: "https://346247.xyz",
    avatar: "https://blog.cheymin.top/img/1.webp",
  },
  {
    name: "夜轻 Blog",
    desc: "一个人",
    href: "https://blog.yeqing.net/",
    avatar: "https://list.yppp.net/d/cos/yeqing.webp",
  },
  {
    name: "逐月星屿",
    desc: "不求一跃千里，但求日进一步",
    href: "https://cuiyouxin.cn/",
    avatar: "https://cuiyouxin.cn/wp-content/uploads/2026/09/cuiyouxin.png",
  },
  {
    name: "Brandon's Blog",
    desc: "云空未必空",
    href: "https://blog.oopss.top",
    avatar: "https://cdn.oopss.top/icon.jpg",
  },
  {
    name: "开往 · 友链接力",
    desc: "随机穿梭，前往一个未知的友链博客",
    href: "https://www.travellings.cn/go.html",
    avatar: "https://www.travellings.cn/assets/travelling-light.png",
  },
  {
    name: "十年之约",
    desc: "虫洞穿梭，随机访问十年之约成员博客",
    href: "https://www.foreverblog.cn/go.html",
    avatar: "https://www.foreverblog.cn/assets/logo/logo_v2_light.png",
  },
];

export default function Friends() {
  return (
    <section id="friends" className="section">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-4" data-reveal="left">
          <div>
            <p className="eyebrow">FRIENDS</p>
            <h2 className="h-title mt-3">
              我的<span className="accent">朋友们</span>
            </h2>
          </div>
          <a
            href="https://blog.cheymin.top/link/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--glass"
          >
            申请友链
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </a>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {friends.map((friend, index) => (
            <a
              key={friend.href}
              href={friend.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`card card-link group d${index % 4} flex items-center gap-4`}
              data-reveal="up"
            >
              <img
                src={friend.avatar}
                alt={friend.name}
                width={52}
                height={52}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="friend-avatar"
              />
              <span className="min-w-0 flex-1">
                <span className="block truncate font-bold transition-colors group-hover:text-[color:var(--color-accent)]">
                  {friend.name}
                </span>
                <span className="lead mt-1 block truncate text-sm">{friend.desc}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}