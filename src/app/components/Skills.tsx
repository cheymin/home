// 技能 —— 开启创造力
const skills = [
  "Java", "Python", "JavaScript", "TypeScript", "HTML5", "CSS3",
  "Vue", "React", "Node.js", "Git", "Docker", "Linux",
  "VSCode", "GitHub", "Hexo", "C++",
];

export default function Skills() {
  return (
    <section id="skills" className="reveal-section">
      <div className="reveal-content max-w-[1440px] mx-auto px-6 w-full">
        <p className="section-eyebrow">Skills</p>
        <h2 className="font-extrabold tracking-tight max-w-3xl" style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)", lineHeight: 1.15 }}>
          开启<span className="logo-accent">创造力</span>
        </h2>
        <p className="mt-4 text-[color:var(--color-muted)] max-w-2xl">
          常用的一些语言、框架和工具。都能用，谈不上精通，够折腾就行。
        </p>

        <div className="mt-12 flex flex-wrap gap-3 stagger">
          {skills.map((s) => (
            <span
              key={s}
              className="paper chip !rounded-xl !px-5 !py-3 !text-[color:var(--color-text)] !text-sm !font-semibold"
            >
              {s}
            </span>
          ))}
          <span className="chip !rounded-xl !px-5 !py-3" style={{ color: "var(--color-accent)" }}>...</span>
        </div>
      </div>
    </section>
  );
}