import Link from "next/link";
import { MdArrowOutward as ArrowIcon } from "react-icons/md";

import { SocialMediaProps } from "@/common/types/socialMedia";

export default function ContactCard({
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
}: SocialMediaProps) {
  return (
    <div
      className={`relative grid w-full grid-cols-[2fr_1fr] overflow-hidden rounded-md border p-6 ${colSpan} ${borderColor} ${backgroundGradientColor}`}
    >
      <div className="absolute -left-[3.5rem] -top-[3.5rem] rotate-45 text-neutral-50/5">
        {backgroundIcon}
      </div>
      <div className={`${textColor} z-10 space-y-2`}>
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="pb-2 text-xs">{description}</p>
        <button
          className={`${backgroundColor} rounded-md bg-opacity-85 px-4 py-2 transition duration-100 hover:bg-opacity-100 md:w-max `}
        >
          <Link
            href={href}
            target="_blank"
            className="flex items-center justify-center gap-x-2  text-black"
          >
            <p className="text-sm font-medium">Go to {name}</p>
            <ArrowIcon size={17} />
          </Link>
        </button>
      </div>

      <div className={`flex items-end justify-end`}>
        <div
          className={`rounded-2xl border-8 border-opacity-10 bg-opacity-5 p-2 ${backgroundColor} ${borderColor}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}
