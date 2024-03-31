import Card from "@/common/components/elements/Card";
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
      <span className="text-sm dark:text-neutral-500">{label} Seconds</span>
      <span className="text-2xl dark:text-neutral-50">{value}</span>
    </div>
  );
};

export default function Leaderboard({ data }: LeaderboardProps) {
  const datas = Object.values(data.allTimeLbs.time);
  return (
    <Card className="flex flex-col items-center justify-between gap-y-1 px-4 py-3 sm:flex-row">
      <span className="text-sm text-neutral-600 dark:text-neutral-500">
        All-Time English Leaderboards
      </span>
      {datas.map((data, index) => (
        <Item
          key={index}
          label={index == 0 ? "15" : "60"}
          value={convertToOrdinal(data.english)}
        />
      ))}
    </Card>
  );
}
