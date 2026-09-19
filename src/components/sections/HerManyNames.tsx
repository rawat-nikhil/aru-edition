import { EditorialMedia, Kicker, MagazinePage, RunningHeader } from "@/components/magazine";
import { issue } from "@/content/issue";

export function HerManyNames() {
  return (
    <MagazinePage id="many-names">
      <RunningHeader
        section={issue.manyNames.runningHeader}
        page={issue.manyNames.page}
      />
      <Kicker>{issue.manyNames.kicker}</Kicker>
      <h2 className="mt-3 max-w-3xl font-masthead text-5xl leading-none tracking-tight md:text-7xl">
        {issue.manyNames.headline}
      </h2>
      <p className="mt-4 max-w-xl font-serif text-xl italic text-ink/70">
        {issue.manyNames.dek}
      </p>

      <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {issue.manyNames.people.map((person) => (
          <article key={person.name} className="border-t border-ink pt-5">
            <EditorialMedia
              src={person.image}
              alt={person.name}
              className="aspect-4/5 w-full"
              sizes="(min-width: 1024px) 22vw, 50vw"
            />
            <p className="mt-4 font-sans text-[10px] tracking-[0.3em] text-aru-red uppercase">
              {person.role}
            </p>
            <h3 className="mt-1 font-masthead text-3xl leading-tight">{person.name}</h3>
            <p className="mt-2 font-serif text-lg leading-snug text-ink/70">{person.bio}</p>
          </article>
        ))}
      </div>
    </MagazinePage>
  );
}
