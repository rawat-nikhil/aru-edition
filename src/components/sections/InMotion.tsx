import { EditorialMedia, Kicker, MagazinePage, RunningHeader } from "@/components/magazine";
import { issue } from "@/content/issue";

export function InMotion() {
  return (
    <MagazinePage id="in-motion" className="bg-[#efe8de]">
      <RunningHeader section={issue.beauty.runningHeader} page={issue.beauty.page} />
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <div>
          <Kicker>{issue.beauty.kicker}</Kicker>
          <h2 className="mt-3 font-masthead text-5xl leading-none tracking-tight md:text-7xl">
            {issue.beauty.headline}
          </h2>
          <p className="mt-5 max-w-lg font-serif text-xl italic text-ink/75">
            {issue.beauty.intro}
          </p>
          <EditorialMedia
            src={issue.beauty.media}
            alt={issue.beauty.mediaAlt}
            mediaType={issue.beauty.mediaType}
            className="mt-8 aspect-4/5 w-full"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
        </div>

        <ol className="divide-y divide-ink/15 border-y border-ink/15 lg:mt-24">
          {issue.beauty.notes.map((note) => (
            <li key={note.number} className="grid grid-cols-[4rem_1fr] gap-5 py-7">
              <span className="font-masthead text-3xl text-aru-red">{note.number}</span>
              <div>
                <h3 className="font-sans text-[11px] tracking-[0.32em] uppercase">{note.title}</h3>
                <p className="mt-2 font-serif text-xl leading-8 text-ink/85">{note.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </MagazinePage>
  );
}
