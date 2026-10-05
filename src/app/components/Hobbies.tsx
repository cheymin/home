const MUSIC_COVER =
  "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=minimal%20abstract%20audio%20waveform%20and%20musical%20notes%2C%20soft%20light%20blue%20glow%20on%20deep%20navy%20background%2C%20clean%20geometric%20lines%2C%20elegant%20tech%20aesthetic&image_size=landscape_4_3";

export default function Hobbies() {
  return (
    <section id="hobbies" className="section">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-4" data-reveal="left">
          <div>
            <p className="eyebrow">HOBBIES</p>
            <h2 className="h-title mt-3">
              爱好与<span className="accent">偏好</span>
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-12">
          {/* 游戏：Minecraft */}
          <div className="card card--flush d0 lg:col-span-6" data-reveal="left">
            <div className="relative h-44 overflow-hidden">
              <img src="/minecraft.webp" alt="Minecraft" className="h-full w-full object-cover" />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(7,11,16,.92), transparent 68%)" }}
              />
            </div>
            <div className="p-7 pt-3">
              <p className="eyebrow">爱好游戏</p>
              <p className="mt-2 text-xl font-extrabold">Minecraft</p>
              <p className="lead mt-1 text-sm">唯一在玩的游戏，方块世界里的一切都可以自己造。</p>
            </div>
          </div>

          {/* 音乐：整卡可点，进入 music.cheymin.top */}
          <a
            href="https://music.cheymin.top"
            target="_blank"
            rel="noopener noreferrer"
            className="card card--flush card-link d1 group lg:col-span-6"
            data-reveal="right"
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src={MUSIC_COVER}
                alt="音乐"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(7,11,16,.92), transparent 68%)" }}
              />
            </div>
            <div className="flex items-start justify-between gap-4 p-7 pt-3">
              <div>
                <p className="eyebrow">音乐偏好</p>
                <p className="mt-2 text-xl font-extrabold">轻音乐</p>
                <p className="lead mt-1 text-sm">跟 Cheymin 一起欣赏更多音乐。</p>
              </div>
              <span className="btn btn--ghost shrink-0 !px-4 !py-2 group-hover:border-[color:var(--color-accent)] group-hover:text-[color:var(--color-accent)]">
                music.cheymin.top
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </span>
            </div>
          </a>

          {/* 关注偏好 */}
          <div className="card d0 flex flex-col justify-center lg:col-span-12" data-reveal>
            <p className="eyebrow">关注偏好</p>
            <p className="mt-2 text-xl font-extrabold">数码科技</p>
            <div className="mt-3 flex flex-wrap gap-2.5">
              <span className="chip">手机 / 电脑软硬件</span>
              <span className="chip">刷机 · Root</span>
              <span className="chip">固件破解</span>
              <span className="chip">自托管</span>
              <span className="chip">网络技术</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}