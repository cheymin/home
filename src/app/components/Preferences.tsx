const prefs = [
  { k: "颜色偏好", v: "极简 · 浅蓝色" },
  { k: "音乐", v: "轻音乐" },
  { k: "游戏", v: "Minecraft（唯一）" },
  { k: "动漫角色", v: "甘城猫猫 · 伊雷娜" },
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

        <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {prefs.map((p, i) => (
            <div key={p.k} className={`card d${i} !p-8`} data-reveal="scale">
              <p className="eyebrow">{p.k}</p>
              <p className="mt-3 text-lg font-bold leading-snug">{p.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}