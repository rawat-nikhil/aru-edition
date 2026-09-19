import { Barcode, EditorialMedia } from "@/components/magazine";
import { issue } from "@/content/issue";

export function Cover() {
  return (
    <section id="cover" className="relative isolate h-dvh min-h-160 overflow-hidden bg-ink text-white">
      <EditorialMedia
        src={issue.cover.media}
        alt={issue.cover.mediaAlt}
        mediaType={issue.cover.mediaType}
        className="absolute inset-0 z-0 h-full w-full"
        mediaClassName="object-[center_18%]"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 z-1 bg-linear-to-t from-black/80 via-black/25 to-black/45" />

      <div className="absolute inset-0 z-10 flex flex-col justify-between px-5 py-5 md:px-10 lg:px-14">
        <header className="flex items-center justify-between gap-4 font-sans text-[10px] uppercase tracking-[0.38em]">
          <span>{issue.volume}</span>
          <span className="hidden sm:inline">{issue.tagline}</span>
          <span>
            {issue.month} {issue.year}
          </span>
        </header>

        <div className="pointer-events-none select-none text-center flex flex-col gap-8">
          <h1 className="font-masthead text-[32vw] leading-[0.72] font-medium tracking-[-0.07em] sm:text-[22vw] lg:text-[18vw]">
            {issue.masthead}
          </h1>
          <p className="mt-1 font-sans text-[10px] tracking-[0.55em] uppercase sm:text-xs">
            The Aru Edition
          </p>
        </div>

        <div className="grid items-end gap-8 md:grid-cols-3">
          <div className="space-y-5">
            {issue.cover.linesLeft.map((line) => (
              <div key={line.text}>
                <p className="font-sans text-[10px] tracking-[0.3em] text-aru-red uppercase">
                  {line.kicker}
                </p>
                <p className="font-masthead text-2xl leading-tight italic md:text-3xl">
                  {line.text}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-white/70">
              {issue.cover.kicker}
            </p>
            <p className="mt-2 font-masthead text-4xl leading-none md:text-5xl">
              {issue.star}
            </p>
            <p className="mt-3 font-sans text-[10px] tracking-[0.35em] uppercase">
              {issue.tagline}
            </p>
          </div>

          <div className="space-y-5 md:text-right">
            {issue.cover.linesRight.map((line) => (
              <div key={line.text}>
                <p className="font-sans text-[10px] tracking-[0.3em] text-aru-red uppercase">
                  {line.kicker}
                </p>
                <p className="font-masthead text-2xl leading-tight italic md:text-3xl">
                  {line.text}
                </p>
              </div>
            ))}
            <div className="flex items-end justify-between gap-4 pt-4 md:justify-end">
              <div className="text-left md:text-right">
                <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-white/70">
                  {issue.price}
                </p>
                <Barcode />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
