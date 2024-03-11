"use client";

import { useState } from "react";

import {
  MonkeytypeData,
  MonkeytypeLeaderboard,
} from "@/common/types/monkeytype";

import Profile from "./Profile";
import Leaderboard from "./Leaderboard";
import PersonalBestOverview from "./PersonalBestOverview";

type OverviewProps = {
  dataProfile: MonkeytypeData;
  dataTime60Leaderboard: MonkeytypeLeaderboard;
  dataTime15Leaderboard: MonkeytypeLeaderboard;
};

export default function Overview({
  dataProfile,
  dataTime60Leaderboard,
  dataTime15Leaderboard,
}: OverviewProps) {
  const [isHover, setIsHover] = useState<number | null>(null);

  const handleHover = (index: number | null) => {
    setIsHover(index);
  };

  return (
    <div className="grid grid-cols-1 gap-3 py-2 sm:grid-cols-2">
      <Profile data={dataProfile} className="col-span-1 sm:col-span-2" />

      <Leaderboard
        label="All-Time English Leaderboards"
        datas={[dataTime15Leaderboard, dataTime60Leaderboard]}
        className="col-span-1 sm:col-span-2"
      />

      <PersonalBestOverview
        data={dataProfile}
        type="time"
        isHover={isHover}
        handleHover={handleHover}
        className="col-span-1"
      />
      <PersonalBestOverview
        data={dataProfile}
        type="words"
        isHover={isHover}
        handleHover={handleHover}
        className="col-span-1"
      />
    </div>
  );
}
