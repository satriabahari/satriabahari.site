import { SocialMediaProps } from "@/common/types/socialMedia";
import Link from "next/link";

export default function ContactCard({
  title,
  href,
  icon,
  backgroundColor,
}: SocialMediaProps) {
  return (
    <Link href={href}>
      <button
        className={`flex items-center gap-x-2 rounded-md px-4 py-2 text-neutral-50 ${backgroundColor}`}
      >
        <i>{icon}</i>
        <p>{title}</p>
      </button>
    </Link>
  );
}
