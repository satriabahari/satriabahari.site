"use client";

import {
  MonkeytypeData,
  MonkeytypeLeaderboard,
} from "@/common/types/monkeytype";
import OverviewItem from "./OverviewItem";
import { format } from "date-fns";
import { useState } from "react";
import Profile from "./Profile";

type OverviewProps = {
  dataProfile: MonkeytypeData;
  dataLeaderboard: MonkeytypeLeaderboard;
};

export default function Overview({
  dataProfile,
  dataLeaderboard,
}: OverviewProps) {
  const [isHover, setIsHover] = useState<number | null>(null);

  const handleHover = (index: number | null) => {
    setIsHover(index);
  };

  const timeTyping = dataProfile?.typingStats.timeTyping;
  const hours = Math.round(timeTyping / 3600);
  const minutes = Math.round((timeTyping % 3600) / 60);
  const remainingSeconds = Math.round(timeTyping % 60);

  return (
    <div className="grid grid-cols-1 gap-3 py-2 sm:grid-cols-6">
      <Profile data={dataProfile} />

      <div className="flex items-center justify-around rounded-xl border border-neutral-200 bg-neutral-100 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-800 sm:col-span-4">
        <OverviewItem
          label="test started"
          value={dataProfile?.typingStats.startedTests}
        />
        <OverviewItem
          label="test completed"
          value={dataProfile?.typingStats.completedTests}
        />
        <OverviewItem
          label="time typing"
          value={format(
            new Date(0, 0, 0, hours, minutes, remainingSeconds),
            "HH:mm:ss",
          )}
        />
      </div>

      <div className="flex items-center justify-between rounded-xl border border-neutral-200 bg-neutral-100 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-800 sm:col-span-6">
        <span className="text-sm text-neutral-900 dark:text-neutral-400">
          All-Time English Leaderboards
        </span>
        <OverviewItem
          label="15 seconds"
          value={dataLeaderboard?.entry.rank}
          flex
        />
        <OverviewItem
          label="30 seconds"
          value={dataLeaderboard?.entry.rank}
          flex
        />
      </div>

      <div className="flex justify-between rounded-xl border border-neutral-200 bg-neutral-100 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-800 sm:col-span-3">
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
            >
              {isHover === index ? (
                <div className={"flex flex-col items-center"}>
                  <span className="text-xs text-neutral-900 dark:text-neutral-400">
                    {`${item} second`}
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
                  label={`${item} second`}
                  value={Math.round(maxWpm.wpm)}
                  subValue={`${Math.floor(maxWpm.acc)}%`}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="flex justify-between rounded-xl border border-neutral-200 bg-neutral-100 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-800 sm:col-span-3">
        {Object.keys(dataProfile?.personalBests.words).map((item, index) => {
          const maxWpm = Object.values(dataProfile?.personalBests.time)[
            index
          ].reduce((prevValue, currentValue) => {
            return prevValue.wpm > currentValue.wpm ? prevValue : currentValue;
          });
          return (
            <div
              key={index}
              onMouseEnter={() => handleHover(index + 4)}
              onMouseLeave={() => handleHover(null)}
              onClick={() => console.log(index * 2)}
            >
              {isHover === index + 4 ? (
                <div key={index} className={"flex flex-col items-center "}>
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
