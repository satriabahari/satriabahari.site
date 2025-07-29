import BentoCard from "./BentoCard";
import { SiBento as BentoIcon } from "react-icons/si";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import { BENTO } from "@/common/constants/bento";

const BentoGrid = () => {
  const filteredBento = BENTO.filter((item) => item?.isShow);

  return (
    <section className="space-y-5">
      <div className="space-y-3">
        <SectionHeading
          title={"My Creative Journey"}
          icon={<BentoIcon size={24} />}
        />
        <SectionSubHeading>
          {
            "A curated overview of what I build, how I think, and where I add value."
          }
        </SectionSubHeading>
      </div>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
        {filteredBento.map((item, index) => (
          <BentoCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default BentoGrid;
