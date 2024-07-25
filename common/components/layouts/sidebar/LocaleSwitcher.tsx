import { AnimatePresence, motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { TbWorld as GlobalIcon } from "react-icons/tb";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import { locales } from "@/config";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      items={[
        {
          value: "en",
          label: t("en"),
        },
        {
          value: "id",
          label: t("id"),
        },
      ]}
      label={t("label")}
    />
  );
}
