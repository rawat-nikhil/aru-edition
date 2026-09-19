import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { EditorialMedia, Kicker, MagazinePage } from "@/components/magazine";
import { profile } from "@/content/profile";
import { profileJsonLd } from "@/lib/schema";
import { createPageMetadata, site } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: site.title.profile,
  description: site.description.profile,
  path: site.profilePath,
});

export default function ArushiNegiPage() {
  const [first, ...rest] = profile.paragraphs;

  return (
    <div className="min-h-full bg-paper text-ink">
      <JsonLd data={profileJsonLd} />
      <header className="border-b border-ink/15 bg-paper">
        <div className="mx-auto flex max-w-350 items-center justify-between px-4 py-3 md:px-8">
          <Link
            href="/"
            className="font-masthead text-[1.65rem] leading-none tracking-tight text-ink"
          >
            ARU
          </Link>
          <Link
            href={profile.cta.href}
            className="font-sans text-[10px] uppercase tracking-[0.22em] text-ink/75 transition-colors hover:text-aru-red"
          >
            {profile.cta.label}
          </Link>
        </div>
      </header>

      <MagazinePage id="profile" className="border-b-0">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Kicker>{profile.kicker}</Kicker>
            <h1 className="mt-4 font-masthead text-6xl leading-[0.9] tracking-tight md:text-8xl">
              {profile.headline}
            </h1>
            <p className="mt-5 font-serif text-2xl italic text-ink/75">{profile.dek}</p>
            <EditorialMedia
              src={profile.media}
              alt={profile.mediaAlt}
              mediaType={profile.mediaType}
              className="mt-8 aspect-3/4 w-full max-w-md"
              sizes="(min-width: 1024px) 36vw, 80vw"
              priority
            />
          </div>

          <div className="lg:pt-16">
            <p className="drop-cap font-serif text-xl leading-8 text-ink/90 md:text-[1.35rem] md:leading-9">
              {first}
            </p>
            {rest.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-6 font-serif text-xl leading-8 text-ink/90 md:text-[1.35rem] md:leading-9"
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-12 border border-ink bg-white/40 p-8">
              <p className="font-sans text-[10px] tracking-[0.35em] text-aru-red uppercase">
                In this edition
              </p>
              <ul className="mt-6 divide-y divide-ink/10">
                {profile.inThisEdition.map((entry) => (
                  <li key={entry.href} className="py-4 first:pt-0 last:pb-0">
                    <Link href={entry.href} className="group block">
                      <p className="font-masthead text-2xl leading-tight transition-colors group-hover:text-aru-red md:text-3xl">
                        {entry.title}
                      </p>
                      <p className="mt-1 font-serif text-lg italic text-ink/65">{entry.dek}</p>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={profile.cta.href}
                className="mt-8 inline-block border-t border-ink/20 pt-6 font-sans text-[10px] uppercase tracking-[0.28em] text-ink transition-colors hover:text-aru-red"
              >
                {profile.cta.label}
                <span className="mt-2 block font-serif text-base normal-case tracking-normal italic text-ink/65">
                  {profile.cta.dek}
                </span>
              </Link>
            </div>

            <p className="mt-8 text-center font-sans text-[10px] tracking-[0.4em] uppercase text-ink/45">
              {profile.issueLine}
            </p>
          </div>
        </div>
      </MagazinePage>
    </div>
  );
}
