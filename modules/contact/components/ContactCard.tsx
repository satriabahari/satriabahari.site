import { SocialMediaProps } from "@/common/types/socialMedia";
import Link from "next/link";

export default function ContactCard({
  title,
  href,
  icon,
  backgroundColor,
  textColor,
}: SocialMediaProps) {
  return (
    <button
      className={`w-full rounded-md px-4 py-2 text-neutral-50 md:w-max ${textColor} ${backgroundColor}`}
    >
      <Link
        href={href}
        target="_blank"
        className="flex items-center justify-center  gap-x-2"
      >
        {icon}
        <p className="text-sm">{title}</p>
      </Link>
    </button>
  );
}
