import { useTranslations } from "next-intl";
import Link from "next/link";
import { LuDownload as DownloadIcon } from "react-icons/lu";

export default function Resume() {
  const RESUME_URL = "https://bit.ly/cv-satriabahari";
  const t = useTranslations("AboutPage.career");

  return (
    <Link
      href={RESUME_URL}
      target="_blank"
      passHref
      className="group flex w-fit items-center gap-2 rounded-lg border bg-neutral-100 border-neutral-400  dark:border-neutral-700 px-3 py-2 text-sm transition duration-100 hover:text-neutral-800 dark:bg-neutral-900 dark:hover:text-neutral-200"
    >
      <DownloadIcon />
      <span>{t("resume_download_button")}</span>
    </Link>
  );
}
