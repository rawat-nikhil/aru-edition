import Link from "next/link";
import { EditorialMedia, Kicker, MagazinePage, RunningHeader } from "@/components/magazine";
import { issue } from "@/content/issue";
import { site } from "@/lib/site";

export function LastPage() {
  return (
    <MagazinePage id="last-page" className="border-b-0">
      <RunningHeader section={issue.last.runningHeader} page={issue.last.page} />
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <div>
          <Kicker>{issue.last.kicker}</Kicker>
          <h2 className="mt-3 font-masthead text-5xl leading-none tracking-tight md:text-7xl">
            {issue.last.headline}
          </h2>
          <p className="mt-8 font-serif text-2xl leading-10 text-ink/90">{issue.last.horoscope}</p>
          <EditorialMedia
            src={issue.last.media}
            alt={issue.last.mediaAlt}
            mediaType={issue.last.mediaType}
            className="mt-10 aspect-4/5 w-full max-w-md"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>

        <div className="lg:pt-10">
          <div className="border border-ink bg-white/40 p-8 md:p-12">
            <p className="font-sans text-[10px] tracking-[0.35em] text-aru-red uppercase">
              {issue.last.colophon.subscribe}
            </p>
            <h3 className="mt-4 font-masthead text-4xl leading-none md:text-5xl">
              {issue.last.colophon.circulation}
            </h3>
            <p className="mt-6 font-serif text-xl leading-8 text-ink/80">
              {issue.last.colophon.subscribeDek}
            </p>
            <div className="mt-10 border-t border-ink/20 pt-6">
              <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-ink/55">
                {issue.last.colophon.label}
              </p>
              <p className="mt-2 font-masthead text-2xl">
                <Link href={site.profilePath} className="transition-colors hover:text-aru-red">
                  {issue.last.colophon.star}
                </Link>
              </p>
              <p className="mt-6 font-masthead text-3xl italic">{issue.last.colophon.closing}</p>
            </div>
          </div>
          <p className="mt-8 text-center font-sans text-[10px] tracking-[0.4em] uppercase text-ink/45">
            {issue.title} · {issue.volume} · {issue.month} {issue.year}
          </p>
        </div>
      </div>
    </MagazinePage>
  );
}
