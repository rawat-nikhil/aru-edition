import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { MastheadNav } from "@/components/MastheadNav";
import { BridalEdit } from "@/components/sections/BridalEdit";
import { Contents } from "@/components/sections/Contents";
import { Cover } from "@/components/sections/Cover";
import { EditorsLetter } from "@/components/sections/EditorsLetter";
import { HerManyNames } from "@/components/sections/HerManyNames";
import { InMotion } from "@/components/sections/InMotion";
import { LastPage } from "@/components/sections/LastPage";
import { OffDuty } from "@/components/sections/OffDuty";
import { Portfolio } from "@/components/sections/Portfolio";
import { SnowEdit } from "@/components/sections/SnowEdit";
import { homeJsonLd } from "@/lib/schema";
import { createPageMetadata, site } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: site.title.home,
  description: site.description.home,
  path: "/",
  absoluteTitle: site.title.home,
});

export default function Home() {
  return (
    <div className="bg-paper text-ink">
      <JsonLd data={homeJsonLd} />
      <Cover />
      <MastheadNav />
      <Contents />
      <HerManyNames />
      <EditorsLetter />
      <SnowEdit />
      <BridalEdit />
      <InMotion />
      <Portfolio />
      <OffDuty />
      <LastPage />
    </div>
  );
}
