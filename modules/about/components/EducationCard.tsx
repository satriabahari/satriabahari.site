import Image from "next/image";
import { BsBuildings as CompanyIcon } from "react-icons/bs";

import Card from "@/common/components/elements/Card";
import { EducationProps } from "@/common/types/education";
import { useTranslations } from "next-intl";

const EducationCard = ({
  school,
  major,
  logo,
  degree,
  start_year,
  end_year,
  link,
  location,
}: EducationProps) => {
  const t = useTranslations("AboutPage.education");

  return (
    <Card className="flex items-center gap-5 px-6 py-4 ">
      {logo ? (
        <Image width={70} height={70} src={logo} alt={school} />
      ) : (
        <CompanyIcon size={65} />
      )}

      <div className="space-y-1">
        <a href={link || "#"} target="_blank">
          <h6>{t("school")}</h6>
        </a>
        <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
          <div className="flex flex-col gap-1 md:flex-row md:gap-2">
            <span>{t("degree")}</span>
            <span className="hidden text-neutral-300 dark:text-neutral-700 md:block">
              •
            </span>
            <span>{t("major")}</span>
          </div>
          <div className="flex flex-col gap-1 text-[12px] md:flex-row md:gap-2">
            <span className="dark:text-neutral-500">
              {start_year} - {end_year}
            </span>
            <span className="hidden rounded-full text-neutral-300 dark:text-neutral-700 md:block">
              •
            </span>
            <span>{t("location")}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EducationCard;
