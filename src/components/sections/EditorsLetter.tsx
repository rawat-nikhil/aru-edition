import { EditorialImage, Kicker, MagazinePage, RunningHeader } from "@/components/magazine";
import { issue } from "@/content/issue";

export function EditorsLetter() {
  const [first, ...rest] = issue.letter.paragraphs;

  return (
    <MagazinePage id="letter">
      <RunningHeader section="Editor’s Letter" page="008" />
      <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Kicker>{issue.letter.kicker}</Kicker>
          <h2 className="mt-4 font-masthead text-5xl leading-[0.95] tracking-tight md:text-7xl">
            {issue.letter.headline}
          </h2>
          <EditorialImage
            src={issue.letter.portrait}
            alt={issue.letter.portraitAlt}
            className="mt-8 aspect-[4/5] w-full max-w-sm"
            sizes="(min-width: 1024px) 30vw, 80vw"
          />
          <p className="mt-4 font-masthead text-3xl italic">{issue.letter.signed}</p>
          <p className="font-sans text-[10px] tracking-[0.28em] text-ink/55 uppercase">
            {issue.letter.title}
          </p>
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
        </div>
      </div>
    </MagazinePage>
  );
}
