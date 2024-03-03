import React from "react";
import {
  MonkeytypeData,
  MonkeytypeLeaderboard,
} from "@/common/types/monkeytype";
import Image from "next/image";
import OverviewItem from "./OverviewItem";
// import Image from "@/common/components/elements/Image";

type OverviewProps = {
  dataProfile: MonkeytypeData;
  dataLeaderboard: MonkeytypeLeaderboard;
};

export default function Overview({
  dataProfile,
  dataLeaderboard,
}: OverviewProps) {
  const timeTyping = dataProfile?.typingStats.timeTyping;
  const jam = Math.floor(timeTyping / 3600);
  const sisa = jam % 3600;
  const menit = Math.floor(sisa / 60);
  const detik = Math.floor(sisa % 60);

  const timestamp = dataProfile?.addedAt;
  const date = new Date(timestamp);

  const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
  const month =
    date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  const year = date.getFullYear();
  return (
    <div className="grid grid-cols-2 gap-3 py-2 sm:grid-cols-6">
      <div className="col-span-2 flex items-center gap-x-4 rounded-xl border border-neutral-200 bg-neutral-100 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-800">
        <Image
          src={"/images/satria.jpg"}
          width={70}
          height={70}
          alt="Satria Bahari"
          className="rounded-full border-2 border-neutral-400 dark:border-neutral-600 lg:hover:scale-105"
        />
        <div className="flex flex-col gap-y-1">
          <span className="text-2xl font-medium text-green-600">
            {dataProfile?.name}
          </span>
          <span className="text-xs text-neutral-900 dark:text-neutral-400">
            Joined {day} {month} {year}
          </span>
          <span className="text-xs text-neutral-900 dark:text-neutral-400">
            Current streak: {dataProfile?.streak} days
          </span>
        </div>
      </div>

      <div className="col-span-4 flex items-center justify-around rounded-xl border border-neutral-200 bg-neutral-100 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-800">
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
          value={`${jam} : ${menit} : ${detik}`}
        />
      </div>

      <div className="col-span-6 flex items-center justify-between rounded-xl border border-neutral-200 bg-neutral-100 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-800">
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

      <div className="col-span-3 flex justify-between rounded-xl border border-neutral-200 bg-neutral-100 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-800">
        {Object.keys(dataProfile?.personalBests.time).map((item, index) => {
          const maxWpm = Object.values(dataProfile?.personalBests.time)[
            index
          ].reduce((prevValue, currentValue) => {
            return prevValue.wpm > currentValue.wpm ? prevValue : currentValue;
          });
          return (
            <OverviewItem
              key={index}
              label={`${item} second`}
              value={Math.round(maxWpm.wpm)}
              subValue={`${Math.floor(maxWpm.acc)}%`}
            />
          );
        })}
      </div>

      <div className="col-span-3 flex justify-between rounded-xl border border-neutral-200 bg-neutral-100 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-800">
        {Object.keys(dataProfile?.personalBests.words).map((item, index) => {
          const maxWpm = Object.values(dataProfile?.personalBests.words)[
            index
          ].reduce((prevValue, currentValue) => {
            return prevValue.wpm > currentValue.wpm ? prevValue : currentValue;
          });
          return (
            <OverviewItem
              key={index}
              label={`${item} words`}
              value={Math.round(maxWpm.wpm)}
              subValue={`${Math.floor(maxWpm.acc)}%`}
            />
          );
        })}
      </div>
    </div>
  );
}

{
  /* 
      <div className="col-span-4 flex items-center justify-around rounded-xl border border-neutral-200 bg-neutral-100 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-800">
        <div className="flex flex-col">
          <span className="text-xs dark:text-neutral-400">test started</span>
          <span className="text-2xl font-medium text-green-600">
            {dataProfile?.typingStats.startedTests}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs dark:text-neutral-400">test completed</span>
          <span className="text-2xl font-medium text-green-600">
            {dataProfile?.typingStats.completedTests}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs dark:text-neutral-400 ">time typing</span>
          <span className="text-2xl font-medium text-green-600">
            {jam} : {menit} : {detik}
          </span>
        </div>
      </div> */
}

// <div key={item} className="flex flex-col items-center gap-2">
//   <h2 className="text-xs dark:text-neutral-400">{item} seconds</h2>
//   <span className="text-2xl font-medium dark:text-green-600">
//     {Math.round(maxWpm.wpm)}
//   </span>
//   <span className=" dark:text-neutral-300">
//     {Math.floor(maxWpm.acc)}%
//   </span>
// </div>
