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
      className="flex w-fit items-center gap-2 transition duration-100 hover:text-neutral-800 dark:hover:text-neutral-200"
    >
      <DownloadIcon />
      <span>{t("resume_download_button")}</span>
    </Link>
  );
}
