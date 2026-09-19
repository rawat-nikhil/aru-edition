import { issue } from "@/content/issue";
import { profile } from "@/content/profile";
import { absoluteUrl, site } from "@/lib/site";

const websiteId = `${site.url}/#website`;
const issueId = `${site.url}/#issue`;
const personId = `${absoluteUrl(site.profilePath)}#person`;
const profilePageId = `${absoluteUrl(site.profilePath)}#webpage`;

const person = {
  "@type": "Person",
  "@id": personId,
  name: site.star,
  url: absoluteUrl(site.profilePath),
  sameAs: [site.instagram],
  description:
    "Cover star of The Aru Edition, the October 2026 birthday issue.",
};

export const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: site.name,
      url: site.url,
      description: site.description.home,
      inLanguage: "en",
    },
    {
      "@type": "Periodical",
      "@id": issueId,
      name: site.name,
      alternativeHeadline: issue.tagline,
      volumeNumber: "01",
      datePublished: `${issue.year}-10`,
      url: site.url,
      isPartOf: { "@id": websiteId },
      about: { "@id": personId },
      description: site.description.home,
    },
    person,
  ],
};

export const profileJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      ...person,
      description: profile.schemaDescription,
      mainEntityOfPage: { "@id": profilePageId },
    },
    {
      "@type": "WebPage",
      "@id": profilePageId,
      name: `${site.title.profile} · ${site.name}`,
      url: absoluteUrl(site.profilePath),
      description: site.description.profile,
      isPartOf: { "@id": websiteId },
      about: { "@id": personId },
      mainEntity: { "@id": personId },
      inLanguage: "en",
    },
  ],
};
