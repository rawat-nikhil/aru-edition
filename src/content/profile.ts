import { issue } from "@/content/issue";

export const profile = {
  kicker: "Cover Star",
  headline: "Arushi Negi",
  dek: "The Birthday Issue of The Aru Edition",
  media: "/source/contents.jpg",
  mediaType: "image" as const,
  mediaAlt: "Arushi Negi, cover star of The Aru Edition",
  schemaDescription:
    "Arushi Negi, cover star of The Aru Edition birthday issue, October 2026.",
  paragraphs: [
    "The Aru Edition exists for one Arushi Negi birthday: her twenty-ninth, printed as a magazine in October 2026 instead of a card that would have been too small.",
    "These pages collect the versions of her that one photograph cannot hold — the nicknames, the bridal frames, the snow, the café table, and the last page that refuses to close the story.",
    "She is a loving daughter, a dependable friend, and the person who turns an ordinary afternoon into something people still talk about. The issue does not try to define her. It only stays with her long enough to look closely.",
    "If you arrived looking for Arushi Negi, start here, then read the edition. Vol. 01 was made once, for one.",
  ],
  cta: {
    href: "/",
    label: "Read the issue",
    dek: "The Birthday Issue — cover to last page.",
  },
  inThisEdition: [
    {
      href: "/#many-names",
      title: "Her Many Names",
      dek: "Four names. Every shade of Arushi.",
    },
    {
      href: "/#editors-letter",
      title: "Letter from the Editor",
      dek: "Why one birthday card was never enough.",
    },
    {
      href: "/#last-page",
      title: "The Last Page",
      dek: "Chapter 29—and everything still to come.",
    },
  ],
  issueLine: `${issue.title} · ${issue.volume} · ${issue.month} ${issue.year}`,
} as const;
