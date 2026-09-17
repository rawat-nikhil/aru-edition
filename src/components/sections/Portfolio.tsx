import { EditorialImage, Kicker, MagazinePage, RunningHeader } from "@/components/magazine";
import { issue } from "@/content/issue";

const spans = [
  "md:col-span-2 md:row-span-2 min-h-[22rem] md:min-h-[36rem]",
  "min-h-[16rem]",
  "min-h-[16rem]",
  "md:col-span-2 min-h-[18rem] md:min-h-[22rem]",
  "min-h-[16rem]",
  "min-h-[20rem]",
  "min-h-[16rem]",
  "md:col-span-2 min-h-[18rem] md:min-h-[24rem]",
];

export function Portfolio() {
  return (
    <MagazinePage id="portfolio">
      <RunningHeader section="Portfolio" page="038" />
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <Kicker>{issue.portfolio.kicker}</Kicker>
          <h2 className="mt-3 font-masthead text-5xl leading-none tracking-tight md:text-7xl">
            {issue.portfolio.headline}
          </h2>
        </div>
        <p className="max-w-md font-serif text-xl italic text-ink/70">{issue.portfolio.dek}</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
        {issue.portfolio.frames.map((frame, index) => (
          <figure key={frame.image} className={spans[index] ?? "min-h-[16rem]"}>
            <EditorialImage
              src={frame.image}
              alt={frame.caption}
              className="h-full min-h-[16rem] w-full"
              sizes="(min-width: 768px) 25vw, 100vw"
            />
            <figcaption className="mt-2 font-sans text-[10px] tracking-[0.2em] text-ink/55 uppercase">
              {frame.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </MagazinePage>
  );
}
