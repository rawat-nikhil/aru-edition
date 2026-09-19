import { EditorialMedia, Kicker, MagazinePage, RunningHeader } from "@/components/magazine";
import { issue } from "@/content/issue";

export function BridalEdit() {
  return (
    <MagazinePage id="bridal-edit">
      <RunningHeader section={issue.style.runningHeader} page={issue.style.page} />
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <Kicker>{issue.style.kicker}</Kicker>
          <h2 className="mt-3 font-masthead text-5xl leading-none tracking-tight md:text-7xl">
            {issue.style.headline}
          </h2>
        </div>
        <p className="max-w-md font-serif text-xl italic text-ink/70">{issue.style.dek}</p>
      </div>

      <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {issue.style.looks.map((look, index) => (
          <article key={look.number} className={index === 0 ? "sm:col-span-2 lg:col-span-1" : ""}>
            <EditorialMedia
              src={look.image}
              alt={`Arushi Negi, ${look.title} from The Bridal Edit`}
              className={index === 0 ? "aspect-4/5 w-full lg:aspect-3/4" : "aspect-3/4 w-full"}
              sizes="(min-width: 1024px) 30vw, 50vw"
            />
            <div className="mt-3 flex items-baseline justify-between gap-3 border-t border-ink/20 pt-3">
              <span className="font-sans text-[10px] tracking-[0.3em] text-aru-red">
                Look {look.number}
              </span>
              <h3 className="font-masthead text-2xl italic">{look.title}</h3>
            </div>
            <p className="mt-2 font-serif text-lg leading-snug text-ink/70">{look.credit}</p>
          </article>
        ))}
      </div>
    </MagazinePage>
  );
}
