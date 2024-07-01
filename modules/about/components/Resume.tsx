import Link from "next/link";
import { LuDownload as DownloadIcon } from "react-icons/lu";

export default function Resume() {
  const RESUME_URL = "https://bit.ly/cv-satriabahari";

  return (
    <Link
      href={RESUME_URL}
      target="_blank"
      passHref
      className="flex w-fit items-center gap-2 hover:text-neutral-800 dark:hover:text-neutral-200 transition duration-100"
    >
      <DownloadIcon />
      <span>Download Resume</span>
    </Link>
  );
}
