import { useTranslations } from "next-intl";

import Card from "@/common/components/elements/Card";
import { convertToOrdinal } from "@/common/helpers";
import { MonkeytypeData } from "@/common/types/monkeytype";

interface LeaderboardProps {
  data: MonkeytypeData;
}

interface ItemProps {
  label: string;
  value: string;
  percent?: string;
}

const Leaderboard = ({ data }: LeaderboardProps) => {
  const t = useTranslations("DashboardPage.monkeytype");

  const datas = Object.values(data.allTimeLbs.time) || [];

  const Item = ({ label, value, percent }: ItemProps) => {
    return (
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-end gap-y-0.5">
          <span className="text-sm dark:text-neutral-500">
            {label} {t("unit_seconds")}
          </span>
          {percent ? (
            <span className="text-xs dark:text-neutral-500">
              {t("top")} {percent}%
            </span>
          ) : null}
        </div>
        <span className="text-2xl dark:text-green-600">{value}</span>
      </div>
    );
  };

  return (
    <Card className="flex flex-col items-center justify-between gap-y-3 px-4 py-3 sm:flex-row sm:gap-y-1">
      <span className="text-sm text-neutral-600 dark:text-neutral-500">
        {t("title_leaderboard")}
      </span>
      {datas.map((data, index) => {
        const percent = (data?.english?.rank / data?.english?.count) * 100;
        return (
          <Item
            key={index}
            label={index == 0 ? "15" : "60"}
            value={convertToOrdinal(data?.english?.rank) || "-"}
            percent={percent.toFixed(2)}
          />
        );
      })}
    </Card>
  );
};

export default Leaderboard;
