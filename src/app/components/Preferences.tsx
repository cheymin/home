const prefs = [
  { k: "颜色偏好", v: "极简 · 浅蓝色" },
  { k: "音乐", v: "轻音乐" },
  { k: "游戏", v: "Minecraft（唯一）" },
  { k: "动漫角色", v: "甘城猫猫 · 伊雷娜" },
  { k: "食物", v: "番茄炒蛋" },
  { k: "饮料", v: "茉莉柚茶" },
  { k: "视频平台", v: "哔哩哔哩" },
  { k: "搜索引擎", v: "必应" },
];

const wide = [
  { k: "软件审美", v: "精简 · 无广告 · 开源", note: "Telegram 是首选，极度反感「先免费后收割」" },
  { k: "隐藏兴趣", v: "山地车速降", note: "如果哪天不搞技术了，大概会去玩这个" },
];

export default function Preferences() {
  return (
    <section id="preferences" className="section">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-4" data-reveal="left">
          <div>
            <p className="eyebrow">PREFERENCES</p>
            <h2 className="h-title mt-3">
              我的<span className="accent">偏好</span>
            </h2>
          </div>
          <p className="lead max-w-md">关于喜欢什么、不喜欢什么。</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {prefs.map((p, i) => (
            <div key={p.k} className={`card d${i % 4} !p-6`} data-reveal="scale">
              <p className="eyebrow">{p.k}</p>
              <p className="mt-2 font-bold leading-snug">{p.v}</p>
            </div>
          ))}

          {wide.map((w, i) => (
            <div key={w.k} className={`card d${i + 1} col-span-2 !p-6`} data-reveal="scale">
              <p className="eyebrow">{w.k}</p>
              <p className="mt-2 text-lg font-extrabold">{w.v}</p>
              <p className="lead mt-1 text-sm">{w.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}