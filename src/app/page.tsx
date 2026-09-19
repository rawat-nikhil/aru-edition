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

export default function Home() {
  return (
    <div className="bg-paper text-ink">
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
