import { useTranslations } from "next-intl";
import OverviewItem from "./OverviewItem";

type OverviewProps = {
  data: any;
};

export default function Overview({ data }: OverviewProps) {
  const t = useTranslations("DashboardPage.monkeytype");
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <OverviewItem data={data.personalBests.time} type={t("unit_time")} />
      <OverviewItem data={data.personalBests.words} type={t("unit_words")} />
    </div>
  );
}
