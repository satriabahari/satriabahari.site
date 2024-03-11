import { convertToOrdinal } from "@/common/helpers";
import { MonkeytypeLeaderboard } from "@/common/types/monkeytype";
import clsxm from "@/common/libs/clsxm";

import OverviewItem from "./OverviewItem";

type LeaderboardProps = {
  datas: MonkeytypeLeaderboard[];
  label: string;
  className?: string;
};

export default function Leaderboard({
  label,
  datas,
  className,
}: LeaderboardProps) {
  return (
    <div
      className={clsxm(
        "flex flex-col items-center justify-between gap-y-1 rounded-xl border border-neutral-200 bg-neutral-100 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-800 sm:flex-row",
        className,
      )}
    >
      <span className="text-sm text-neutral-600 dark:text-neutral-400">
        {label}
      </span>
      {datas.map((data, index) => (
        <OverviewItem
          key={index}
          label={index === 0 ? "15 seconds" : "60 seconds"}
          value={data?.rank ? convertToOrdinal(data.rank) : "-"}
          isFlex
        />
      ))}
    </div>
  );
}
