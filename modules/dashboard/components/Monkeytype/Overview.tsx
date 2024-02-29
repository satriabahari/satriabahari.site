import React from "react";
import OverviewItem from "../Contributions/OverviewItem";
import { MonkeytypeData } from "@/common/types/monkeytype";

type OverviewProps = {
  data: MonkeytypeData;
};

export default function Overview({ data }: OverviewProps) {
  console.log("test", data);
  return (
    <div className="grid grid-cols-2 gap-3 py-2 sm:grid-cols-4">
      {/* <OverviewItem
        label="Rank"
        value={Math.abs(data?.ranks.overall.rank)}
        unit="kyu"
      /> */}
      {/* <OverviewItem label="Honor" value={data?.honor} />
      <OverviewItem
        label="Completed"
        value={data?.codeChallenges.totalCompleted}
      /> */}
      <OverviewItem label="XP" value={data?.xp} />
      <OverviewItem label="Streak" value={data?.streak} />
      <OverviewItem label="MaxStreak" value={data?.maxStreak} />
      <OverviewItem label="Completed" value={data?.typingStats.completedTests} />
    </div>
  );
}
