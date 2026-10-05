const navItems = [
  { href: "#about", label: "关于" },
  { href: "#skills", label: "技能" },
  { href: "#status", label: "生涯" },
  { href: "#personality", label: "性格" },
  { href: "#hobbies", label: "爱好" },
  { href: "#thanks", label: "致谢" },
];

export default function Navbar() {
  return (
    <header className="appbar">
      <div className="max-w-[1440px] mx-auto px-6 w-full flex items-center gap-4">
        <a href="#top" className="terminal-mono font-extrabold text-lg tracking-tight whitespace-nowrap">
          Cheymin<span className="logo-accent">.</span>
        </a>

        <div className="flex-1" />

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="btn-text !text-[color:var(--color-muted)] hover:!text-[color:var(--color-accent)]">
              {n.label}
            </a>
          ))}
        </nav>

        <a href="https://blog.cheymin.top" target="_blank" rel="noopener noreferrer" className="btn-contained">
          博客 ↗
        </a>
      </div>
    </header>
  );
}