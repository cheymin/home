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

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {/* 音乐：整卡可点，进入 music.cheymin.top */}
          <a
            href="https://music.cheymin.top"
            target="_blank"
            rel="noopener noreferrer"
            className="card card--flush card-link group d0 lg:col-span-7"
            data-reveal="left"
          >
            <div className="relative h-56 overflow-hidden lg:h-72">
              <img
                src="/music.webp"
                alt="Cheymin Music"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(7,11,16,.94), transparent 62%)" }}
              />
              <span
                aria-hidden
                className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full border backdrop-blur-md transition-colors group-hover:border-[color:var(--color-accent)] group-hover:text-[color:var(--color-accent)]"
                style={{ borderColor: "var(--color-border)", background: "rgba(7,11,16,.35)" }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </span>
            </div>
            <div className="p-8 pt-4">
              <p className="eyebrow">音乐偏好</p>
              <p className="mt-2 text-2xl font-extrabold">轻音乐</p>
              <p className="lead mt-1">跟 Cheymin 一起欣赏更多音乐。</p>
            </div>
          </a>

          {/* 游戏：Minecraft */}
          <div className="card card--flush d1 lg:col-span-5" data-reveal="right">
            <div className="relative h-56 overflow-hidden lg:h-72">
              <img src="/minecraft.webp" alt="Minecraft" className="h-full w-full object-cover" />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(7,11,16,.94), transparent 62%)" }}
              />
            </div>
            <div className="p-8 pt-4">
              <p className="eyebrow">爱好游戏</p>
              <p className="mt-2 text-2xl font-extrabold">Minecraft</p>
              <p className="lead mt-1">唯一在玩的游戏，方块世界里的一切都可以自己造。</p>
            </div>
          </div>

          {/* 关注偏好 */}
          <div className="card d0 flex flex-col justify-center lg:col-span-12" data-reveal>
            <p className="eyebrow">关注偏好</p>
            <p className="mt-2 text-2xl font-extrabold">数码科技</p>
            <div className="mt-4 flex flex-wrap gap-2.5">
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