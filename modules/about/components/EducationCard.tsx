import Image from "next/image";
import { BsBuildings as CompanyIcon } from "react-icons/bs";

import Card from "@/common/components/elements/Card";
import { EducationProps } from "@/common/types/education";

export default function EducationCard({
  school,
  major,
  logo,
  degree,
  start_year,
  end_year,
  link,
}: EducationProps) {
  return (
    <Card className="flex items-center gap-5 px-6 py-4 ">
      {logo ? (
        <Image width={55} height={55} src={logo} alt={school} />
      ) : (
        <CompanyIcon size={50} />
      )}

      <div className="space-y-1">
        <a href={link || "#"} target="_blank">
          <h6>{school}</h6>
        </a>
        <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
          <div className="flex flex-col gap-1 md:flex-row md:gap-2">
            <span>{degree}</span>
            <span className="hidden text-neutral-300 dark:text-neutral-700 md:flex">
              •
            </span>
            <span>{major}</span>
          </div>
          <div className="flex flex-col text-sm">
            <span>
              {start_year} - {end_year}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
