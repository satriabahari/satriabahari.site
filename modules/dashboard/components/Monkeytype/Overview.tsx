"use client";

import { useState } from "react";
import { format } from "date-fns";

import {
  MonkeytypeData,
  MonkeytypeLeaderboard,
} from "@/common/types/monkeytype";

import Profile from "./Profile";
import Leaderboard from "./Leaderboard";
import OverviewItem from "./OverviewItem";

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
    <div className="grid grid-cols-1 gap-3 py-2 sm:grid-cols-6">
      <div className="col-span-6 sm:col-span-2">
        <Profile data={dataProfile} />
      </div>

      <div className="col-span-1 sm:col-span-6">
        <Leaderboard
          label="All-Time English Leaderboards"
          datas={[dataTime15Leaderboard, dataTime60Leaderboard]}
        />
      </div>

      <div className="col-span-1 grid grid-cols-4 rounded-xl border border-neutral-200 bg-neutral-100 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-800 sm:col-span-3 ">
        {Object.keys(dataProfile?.personalBests.time).map((item, index) => {
          const maxWpm = Object.values(dataProfile?.personalBests.time)[
            index
          ].reduce((prevValue, currentValue) => {
            return prevValue.wpm > currentValue.wpm ? prevValue : currentValue;
          });

          return (
            <div
              key={index}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
              className="flex h-28 items-center justify-center"
            >
              {isHover === index ? (
                <div className={"flex flex-col items-center gap-y-0.5"}>
                  <span className="text-xs text-neutral-900 dark:text-neutral-400">
                    {`${item} seconds`}
                  </span>
                  <span className="text-xs text-neutral-900 dark:text-neutral-50">
                    {Math.round(maxWpm.wpm)} wpm
                  </span>
                  <span className="text-xs text-neutral-900 dark:text-neutral-50">
                    {Math.round(maxWpm.raw)} raw
                  </span>
                  <span className="text-xs text-neutral-900 dark:text-neutral-50">
                    {Math.round(maxWpm.acc)}% acc
                  </span>
                  <span className="text-xs text-neutral-900 dark:text-neutral-50">
                    {Math.round(maxWpm.consistency)}% con
                  </span>
                  <span className="text-xs text-neutral-900 dark:text-neutral-400">
                    {format(maxWpm.timestamp, "dd MMM yyyy")}
                  </span>
                </div>
              ) : (
                <OverviewItem
                  label={`${item} seconds`}
                  value={Math.round(maxWpm.wpm)}
                  subValue={`${Math.floor(maxWpm.acc)}%`}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="col-span-1 grid grid-cols-4 rounded-xl border border-neutral-200 bg-neutral-100 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-800 sm:col-span-3 ">
        {Object.keys(dataProfile?.personalBests.words).map((item, index) => {
          const maxWpm = Object.values(dataProfile?.personalBests.words)[
            index
          ].reduce((prevValue, currentValue) => {
            return prevValue.wpm > currentValue.wpm ? prevValue : currentValue;
          });

          return (
            <div
              key={index}
              onMouseEnter={() => handleHover(index + 4)}
              onMouseLeave={() => handleHover(null)}
              className="flex h-28 items-center justify-center"
            >
              {isHover === index + 4 ? (
                <div className={"flex flex-col items-center gap-y-0.5"}>
                  <span className="text-xs text-neutral-900 dark:text-neutral-400">
                    {`${item} words`}
                  </span>
                  <span className="text-xs text-neutral-900 dark:text-neutral-50">
                    {Math.round(maxWpm.wpm)} wpm
                  </span>
                  <span className="text-xs text-neutral-900 dark:text-neutral-50">
                    {Math.round(maxWpm.raw)} raw
                  </span>
                  <span className="text-xs text-neutral-900 dark:text-neutral-50">
                    {Math.round(maxWpm.acc)}% acc
                  </span>
                  <span className="text-xs text-neutral-900 dark:text-neutral-50">
                    {Math.round(maxWpm.consistency)}% con
                  </span>
                  <span className="text-xs text-neutral-900 dark:text-neutral-400">
                    {format(maxWpm.timestamp, "dd MMM yyyy")}
                  </span>
                </div>
              ) : (
                <OverviewItem
                  label={`${item} words`}
                  value={Math.round(maxWpm.wpm)}
                  subValue={`${Math.floor(maxWpm.acc)}%`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
