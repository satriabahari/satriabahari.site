import { convertToOrdinal } from "@/common/helpers";
import { MonkeytypeData } from "@/common/types/monkeytype";

type LeaderboardProps = {
  data: MonkeytypeData;
};

type ItemProps = {
  label: string;
  value: string;
};

const Item = ({ label, value }: ItemProps) => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm dark:text-neutral-400">{label} Seconds</span>
      <span>{value}</span>
    </div>
  );
};

export default function Leaderboard({ data }: LeaderboardProps) {
  const datas = Object.values(data.allTimeLbs.time);
  return (
    <div className="flex flex-col items-center justify-between gap-y-1 rounded-xl border border-neutral-200 bg-neutral-100 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-800 sm:flex-row">
      <span className="text-sm text-neutral-600 dark:text-neutral-400">
        All-Time English Leaderboards
      </span>
      {datas.map((data, index) => (
        <Item
          key={index}
          label={index == 0 ? "15" : "60"}
          value={convertToOrdinal(data.english)}
        />
      ))}
    </div>
  );
}
