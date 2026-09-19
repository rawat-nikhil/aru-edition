import { EditorialMedia, Kicker, MagazinePage, RunningHeader } from "@/components/magazine";
import { issue } from "@/content/issue";

export function CoverStory() {
  return (
    <MagazinePage id="story" className="bg-[#efe8de]">
      <RunningHeader section={issue.story.runningHeader} page={issue.story.page} />
      <Kicker>{issue.story.kicker}</Kicker>
      <h2 className="mt-4 max-w-5xl font-masthead text-5xl leading-[0.92] tracking-tight md:text-7xl lg:text-8xl">
        {issue.story.headline}
      </h2>
      <p className="mt-6 max-w-3xl font-serif text-2xl leading-snug italic text-ink/75">
        {issue.story.dek}
      </p>
      <div className="mt-4 flex flex-wrap gap-x-8 gap-y-1 font-sans text-[10px] tracking-[0.25em] text-ink/55 uppercase">
        <span>{issue.story.byline}</span>
        <span>{issue.story.photography}</span>
      </div>

      <EditorialMedia
        src={issue.story.hero.media}
        alt={issue.story.hero.mediaAlt}
        mediaType={issue.story.hero.mediaType}
        className="mt-10 aspect-video w-full md:aspect-21/9"
      />

      <blockquote className="my-16 border-y border-ink/20 py-10 text-center">
        <p className="font-masthead text-3xl leading-tight italic md:text-5xl lg:text-6xl">
          {issue.story.pullQuote}
        </p>
      </blockquote>

      <div className="grid items-start gap-10 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="columns-article font-serif text-[1.15rem] leading-8 text-ink/90">
          {issue.story.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <figure className="lg:sticky lg:top-24">
          <EditorialMedia
            src={issue.story.second.media}
            alt={issue.story.second.mediaAlt}
            mediaType={issue.story.second.mediaType}
            className="aspect-3/4 w-full"
            sizes="(min-width: 1024px) 32vw, 100vw"
          />
          <figcaption className="mt-3 font-sans text-[10px] tracking-[0.22em] text-ink/55 uppercase">
            {issue.star} · {issue.tagline}
          </figcaption>
        </figure>
      </div>
    </MagazinePage>
  );
}
