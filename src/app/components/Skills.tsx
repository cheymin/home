const skills = [
  "Java", "Python", "JavaScript", "TypeScript", "HTML5", "CSS3",
  "Vue", "React", "Node.js", "Git", "Docker", "Linux",
  "VSCode", "GitHub", "Hexo", "C++",
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-4" data-reveal>
          <div>
            <p className="eyebrow">SKILLS</p>
            <h2 className="h-title mt-3">
              开启<span className="accent">创造力</span>
            </h2>
          </div>
          <p className="lead max-w-md">常用的一些语言、框架和工具，够折腾就行。</p>
        </div>

        <div className="card card--pad-lg mt-10">
          <div className="flex flex-wrap gap-3">
            {skills.map((s, i) => (
              <span
                key={s}
                data-reveal
                className={`chip d${i % 13} !px-4 !py-2.5 !text-sm !text-[color:var(--color-text)]`}
              >
                {s}
              </span>
            ))}
            <span data-reveal className="chip chip--accent d12 !px-4 !py-2.5 !text-sm">
              ...
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}