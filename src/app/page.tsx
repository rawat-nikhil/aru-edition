import { MastheadNav } from "@/components/MastheadNav";
import { BeautyNotes } from "@/components/sections/BeautyNotes";
import { Contents } from "@/components/sections/Contents";
import { Contributors } from "@/components/sections/Contributors";
import { Cover } from "@/components/sections/Cover";
import { CoverStory } from "@/components/sections/CoverStory";
import { EditorsLetter } from "@/components/sections/EditorsLetter";
import { InHerWords } from "@/components/sections/InHerWords";
import { LastPage } from "@/components/sections/LastPage";
import { Portfolio } from "@/components/sections/Portfolio";
import { StyleFile } from "@/components/sections/StyleFile";

export default function Home() {
  return (
    <div className="bg-paper text-ink">
      <Cover />
      <MastheadNav />
      <Contents />
      <Contributors />
      <EditorsLetter />
      <CoverStory />
      <StyleFile />
      <BeautyNotes />
      <Portfolio />
      <InHerWords />
      <LastPage />
    </div>
  );
}
