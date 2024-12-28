import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { format, parseISO } from "date-fns";
import { HiOutlineArrowSmRight as ViewIcon } from "react-icons/hi";

import Card from "@/common/components/elements/Card";
import { AchievementItem } from "@/common/types/achievements";

const AchievementCard = ({
  credential_id,
  name,
  issuing_organization,
  issue_date,
  expiration_date,
  image,
  url_credential,
}: AchievementItem) => {
  const issueDate = format(parseISO(issue_date), "MMMM yyyy");

  const t = useTranslations("AchievementsPage");

  return (
    <Link href={url_credential} className="flex h-full" target="_blank">
      <Card className="group flex h-full flex-col overflow-hidden">
        <div className="relative">
          <Image
            src={image}
            alt={name}
            width={500}
            height={200}
            className="min-h-[180px] w-full object-cover md:h-[170px]"
          />
          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center gap-1 rounded-t-lg bg-black text-sm font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-80 dark:text-neutral-50">
            <span>{t("show_credential")}</span>
            <ViewIcon size={20} />
          </div>
        </div>
        <div className="my-auto space-y-2 p-4">
          {credential_id && (
            <p className="text-sm text-neutral-500">{credential_id}</p>
          )}
          <p className=" text-neutral-900 dark:text-neutral-50">{name}</p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {issuing_organization}
          </p>
          <div className="space-y-1">
            <p className="text-xs text-neutral-400 dark:text-neutral-500 ">
              Issued on
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              {issueDate}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default AchievementCard;
