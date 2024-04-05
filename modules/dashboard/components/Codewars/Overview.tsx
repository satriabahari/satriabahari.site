import { CodewarsData } from "@/common/types/codewars";

import OverviewItem from "./OverviewItem";

type OverviewProps = {
  data: CodewarsData;
};

export default function Overview({ data }: OverviewProps) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-3 py-2 sm:grid-cols-4">
        <OverviewItem
          label="Rank"
          value={Math.abs(data?.ranks.overall.rank)}
          unit="kyu"
        />
        <OverviewItem label="Honor" value={data?.honor} />
        <OverviewItem
          label="Completed"
          value={data?.codeChallenges.totalCompleted}
        />
        <OverviewItem
          label="Leaderboard"
          value={data?.leaderboardPosition ? data?.leaderboardPosition : 0}
        />
      </div>
      <div className="grid grid-cols-1 gap-3 py-2 capitalize sm:grid-cols-2">
        <OverviewItem label="Clan" value={data?.clan} />
        <OverviewItem
          label="Skills"
          value={data?.skills?.map((skill) => skill).join(", ")}
        />
      </div>
    </div>
  );
}
