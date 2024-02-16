import Card from "@/common/components/elements/Card";
import { CareerProps } from "@/common/types/careers";
import { differenceInMonths, differenceInYears, format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { BsBuildings as CompanyIcon } from "react-icons/bs";

export default function CareerCard({
  position,
  company,
  logo,
  location,
  start_date,
  end_date,
  link,
}: CareerProps) {
  const startDate = new Date(start_date);
  const endDate = end_date ? new Date(end_date) : new Date();

  const durationYears = differenceInYears(endDate, startDate);
  const durationMonths = differenceInMonths(endDate, startDate) % 12;

  let durationText = "";
  if (durationYears > 0) {
    durationText += `${durationYears} year${durationYears > 1 ? "s" : ""}`;
  }
  if (durationMonths > 0 || durationYears === 0) {
    durationText += `${durationMonths} Month${durationMonths > 1 ? "s" : ""}`;
  }

  return (
    <Card className="flex items-center gap-5 border border-neutral-300 px-6 py-4 dark:border-neutral-600">
      {logo ? (
        <Image width={55} height={55} src={logo} alt={company} />
      ) : (
        <CompanyIcon size={50} />
      )}

      <div className="space-y-1">
        <h6>{position}</h6>
        <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
          <div className="flex items-center gap-2">
            <Link href={link || "#"} target="_blank">
              <span className="cursor-pointer underline hover:text-neutral-900 hover:dark:text-neutral-50">
                {company}
              </span>
            </Link>
            <span className="text-neutral-300 dark:text-neutral-700">•</span>
            <span>{location}</span>
          </div>

          <div className="flex flex-col text-[13px]">
            <div className="flex gap-1">
              <span>{format(startDate, "MMM yyyy")}</span> -{" "}
              <span>{end_date ? format(endDate, "MMM yyyy") : "Present"}</span>
            </div>
            <span className="text-neutral-500">~ {durationText}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
