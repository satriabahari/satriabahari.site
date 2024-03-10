import { TbSchool as EducationIcon } from "react-icons/tb";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import { EDUCATION } from "@/common/constant/education";

import EducationCard from "./EducationCard";

export default function EducationList() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title="Education" icon={<EducationIcon />} />
        <SectionSubHeading>
          <p>My educational journey.</p>
        </SectionSubHeading>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {EDUCATION?.map((item, index) => (
          <EducationCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
