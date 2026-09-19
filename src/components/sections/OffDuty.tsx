import { EditorialMedia, Kicker, MagazinePage, RunningHeader } from "@/components/magazine";
import { issue } from "@/content/issue";

export function OffDuty() {
  return (
    <MagazinePage id="off-duty" className="bg-[#efe8de]">
      <RunningHeader section={issue.words.runningHeader} page={issue.words.page} />
      <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <Kicker>{issue.words.kicker}</Kicker>
          <h2 className="mt-3 font-masthead text-5xl leading-[0.95] tracking-tight md:text-6xl">
            {issue.words.headline}
          </h2>
          <p className="mt-5 font-serif text-xl italic text-ink/70">{issue.words.dek}</p>
          <EditorialMedia
            src={issue.words.media}
            alt={issue.words.mediaAlt}
            mediaType={issue.words.mediaType}
            className="mt-8 aspect-3/4 w-full"
            sizes="(min-width: 1024px) 38vw, 100vw"
          />
        </div>


        <dl className="divide-y divide-ink/15 border-y border-ink/15">
          {issue.words.questions.map((item) => (
            <div key={item.q} className="py-7">
              <dt className="font-sans text-[11px] font-medium tracking-[0.28em] text-aru-red uppercase">
                {item.q}
              </dt>
              <dd className="mt-3 font-serif text-xl leading-8 text-ink/90">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </MagazinePage>
  );
}
