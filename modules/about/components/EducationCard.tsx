import Card from "@/common/components/elements/Card";
import { CareerProps } from "@/common/types/careers";
import { EducationProps } from "@/common/types/education";
import Image from "next/image";
import Link from "next/link";
import { BsBuildings as CompanyIcon } from "react-icons/bs";

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
    <Card className="flex items-center gap-5 border border-neutral-300 px-6 py-4">
      {logo ? (
        <Image width={55} height={55} src={logo} alt={school} />
      ) : (
        <CompanyIcon size={50} />
      )}

      <div className="space-y-1">
        <a href={link || "#"} target="_blank">
          <h6>{school}</h6>
        </a>
        <div className="space-y-2 text-sm text-neutral-600">
          <div className="flex items-center gap-2">
            <span className="">{degree}</span>
            <span className="text-neutral-300">•</span>
            <span>{major}</span>
          </div>
          <div className="flex flex-col">
            <span>
              {start_year} - {end_year}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
