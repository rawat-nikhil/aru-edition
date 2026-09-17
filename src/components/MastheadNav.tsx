import { issue } from "@/content/issue";

export function MastheadNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-ink/15 bg-paper/95 backdrop-blur-md">
      <div className="nav-scroll mx-auto flex max-w-[1400px] items-center gap-5 overflow-x-auto px-4 py-3 md:px-8">
        <a
          href="#cover"
          className="shrink-0 font-masthead text-[1.65rem] leading-none tracking-tight text-ink"
        >
          {issue.masthead}
        </a>
        <span className="hidden h-4 w-px shrink-0 bg-ink/20 sm:block" />
        <ul className="flex items-center gap-5 font-sans text-[10px] uppercase tracking-[0.22em] text-ink/75">
          {issue.nav.map((item) => (
            <li key={item.href} className="shrink-0">
              <a href={item.href} className="whitespace-nowrap transition-colors hover:text-aru-red">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
