// 爱好 + 偏好
export default function Hobbies() {
  return (
    <section id="hobbies" className="reveal-section">
      <div className="reveal-content max-w-[1440px] mx-auto px-6 w-full">
        <p className="section-eyebrow">Hobbies</p>
        <h2 className="font-extrabold tracking-tight max-w-3xl" style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)", lineHeight: 1.15 }}>
          爱好与<span className="logo-accent">偏好</span>
        </h2>

        <div className="mt-12 grid lg:grid-cols-3 gap-6 stagger">
          {/* 游戏卡（Minecraft 大图） */}
          <div className="paper rounded-2xl overflow-hidden lg:row-span-2">
            <div className="relative h-48 overflow-hidden">
              <img src="/minecraft.webp" alt="Minecraft" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--color-bg-paper), transparent 60%)" }} />
            </div>
            <div className="p-7 -mt-8 relative">
              <p className="section-eyebrow">爱好游戏</p>
              <p className="font-extrabold text-2xl mb-2">Minecraft</p>
            </div>
          </div>

          {/* 阅读 */}
          <div className="paper rounded-2xl p-7">
            <p className="section-eyebrow">爱好阅读</p>
            <p className="font-extrabold text-2xl mb-2">书架</p>
          </div>

          {/* 关注偏好 */}
          <div className="paper rounded-2xl p-7">
            <p className="section-eyebrow">关注偏好</p>
            <p className="font-extrabold text-2xl mb-2">数码科技</p>
            <p className="text-sm text-[color:var(--color-muted)] leading-relaxed">
              手机、电脑软硬件、刷机、自托管。
            </p>
          </div>

          {/* 音乐偏好 */}
          <div className="paper rounded-2xl p-7 lg:col-span-2">
            <p className="section-eyebrow">音乐偏好</p>
            <p className="font-extrabold text-2xl mb-2">轻音乐、华语流行</p>
            <p className="text-sm text-[color:var(--color-muted)] leading-relaxed">
              跟 Cheymin 一起欣赏更多音乐。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}