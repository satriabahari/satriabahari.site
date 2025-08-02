import Link from "next/link";
import { MdArrowOutward as ArrowIcon } from "react-icons/md";
import { useLocale, useTranslations } from "next-intl";

import { SocialMediaProps } from "@/common/types/socialMedia";
import SpotlightCard from "@/common/components/elements/SpotlightCard";

const ContactCard = ({
  title,
  description,
  name,
  href,
  icon,
  backgroundIcon,
  backgroundGradientColor,
  backgroundColor,
  borderColor,
  textColor,
  colSpan,
}: SocialMediaProps) => {
  const t = useTranslations("ContactPage");
  const locale = useLocale();

  return (
    <SpotlightCard
      className={`relative grid w-full grid-cols-[2.5fr_1fr] overflow-hidden rounded-md border-2 border-neutral-300 p-6 dark:border-neutral-700 ${colSpan} ${backgroundGradientColor}`}
    >
      <div className="absolute -left-[3.5rem] -top-[3.5rem] rotate-45 text-neutral-50/5">
        {backgroundIcon}
      </div>
      <div
        className={`${textColor} z-10 flex flex-col justify-between gap-y-2`}
      >
        <h4 className="text-lg font-semibold tracking-wide">
          {t(`social_media.${name}.title`)}
        </h4>
        <p className="pb-2 text-xs">{t(`social_media.${name}.description`)}</p>
        <button
          className={`${backgroundColor} rounded-md bg-opacity-85 px-4 py-2 transition duration-300 hover:scale-105 hover:bg-opacity-100 md:w-max`}
        >
          <Link
            href={href}
            target="_blank"
            className="flex items-center justify-center gap-x-2  text-black"
            data-umami-event={`click_contact_${name}`}
          >
            <p className="text-sm font-medium">
              {locale == "en" ? "Go to" : "Pergi ke"}{" "}
              <span className="capitalize">{name}</span>
            </p>
            <ArrowIcon size={17} />
          </Link>
        </button>
      </div>

      <div className={`flex items-end justify-end`}>
        <div
          className={`rounded-2xl border-4 border-opacity-80 bg-opacity-5 p-2 text-neutral-50 ${backgroundColor} ${borderColor}`}
        >
          {icon}
        </div>
      </div>
    </SpotlightCard>
  );
};

export default ContactCard;
