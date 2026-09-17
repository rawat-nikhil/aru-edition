import { EditorialImage, Kicker, MagazinePage, RunningHeader } from "@/components/magazine";
import { issue } from "@/content/issue";

export function Contents() {
  return (
    <MagazinePage id="contents">
      <RunningHeader section="Contents" page="004" />
      <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Kicker>The Birthday Issue</Kicker>
          <h2 className="mt-3 font-masthead text-6xl leading-none tracking-tight md:text-8xl">
            Contents
          </h2>
          <p className="mt-4 max-w-md font-serif text-xl italic text-ink/70">
            {issue.volume} · {issue.month} {issue.year} · {issue.star}
          </p>

          <div className="mt-12 space-y-10">
            {issue.contents.departments.map((department) => (
              <div key={department.name}>
                <p className="border-b border-ink/20 pb-2 font-sans text-[10px] tracking-[0.32em] text-aru-red uppercase">
                  {department.name}
                </p>
                <ul className="mt-3 divide-y divide-ink/10">
                  {department.entries.map((entry) => (
                    <li
                      key={entry.title}
                      className="grid grid-cols-[3rem_1fr] items-baseline gap-4 py-3"
                    >
                      <span className="font-sans text-xs tracking-[0.2em] text-ink/50">
                        {entry.page}
                      </span>
                      <div>
                        <p className="font-masthead text-2xl leading-tight md:text-3xl">
                          {entry.title}
                        </p>
                        <p className="mt-1 font-serif text-lg italic text-ink/65">
                          {entry.dek}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <figure>
          <EditorialImage
            src={issue.contents.image}
            alt={issue.contents.alt}
            className="aspect-[3/4] w-full"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
          <figcaption className="mt-3 flex justify-between font-sans text-[10px] tracking-[0.22em] text-ink/55 uppercase">
            <span>Cover star</span>
            <span>{issue.star}</span>
          </figcaption>
        </figure>
      </div>
    </MagazinePage>
  );
}
