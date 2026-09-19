import type { Metadata } from "next";

export const siteUrl = "https://aruedition.com";

export const site = {
  name: "The Aru Edition",
  url: siteUrl,
  star: "Arushi Negi",
  profilePath: "/arushi-negi",
  instagram: "https://www.instagram.com/the_sunshine_girl____/",
  title: {
    default: "The Aru Edition · Arushi Negi",
    template: "%s · The Aru Edition",
    home: "The Aru Edition · Arushi Negi Birthday Issue",
    profile: "Arushi Negi Birthday",
  },
  description: {
    default:
      "The Aru Edition is the birthday issue for Arushi Negi: a one-off magazine of her style, names, and twenty-ninth year.",
    home: "The Aru Edition is the birthday issue for Arushi Negi: a one-off magazine of her style, names, and twenty-ninth year.",
    profile:
      "Arushi Negi birthday issue of The Aru Edition — the cover star, the nicknames, and chapter 29.",
  },
} as const;

export function absoluteUrl(path = "/"): string {
  if (path === "/" || path === "") {
    return siteUrl;
  }

  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${site.name} · ${site.star} · The Birthday Issue`,
} as const;

export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: string;
}): Metadata {
  const displayTitle = absoluteTitle ?? title;

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: site.name,
      url: path,
      title: displayTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: displayTitle,
      description,
      images: [ogImage.url],
    },
  };
}
