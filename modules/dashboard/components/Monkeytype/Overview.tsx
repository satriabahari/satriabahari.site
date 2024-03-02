import React from "react";
import { MonkeytypeData } from "@/common/types/monkeytype";

type OverviewProps = {
  data: MonkeytypeData;
};

export default function Overview({ data }: OverviewProps) {
  return (
    <div className="grid grid-cols-2 gap-3 py-2 sm:grid-cols-4">
      <div className="flex flex-col rounded-xl border border-neutral-200 bg-neutral-100 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-800">
        <span className="text-2xl font-medium text-green-600">
          {data?.name}
        </span>
        <span className="text-sm dark:text-neutral-400">{data?.addedAt}</span>
      </div>
      <div className="col-span-3 flex justify-between rounded-xl border border-neutral-200 bg-neutral-100 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-800">
        <div className="flex flex-col">
          <span className="text-sm dark:text-neutral-400">test started</span>
          <span className="text-2xl font-medium text-green-600">
            {data?.typingStats.startedTests}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm dark:text-neutral-400">test completed</span>
          <span className="text-2xl font-medium text-green-600">
            {data?.typingStats.completedTests}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm dark:text-neutral-400">time typing</span>
          <span className="text-2xl font-medium text-green-600">
            {data?.typingStats.timeTyping}
          </span>
        </div>
      </div>
      {/* <div className="flex justify-between rounded-xl border border-neutral-200 bg-neutral-100 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-800">
        <span>All-Time English Leaderboards</span>
        <div>
          <span></span>
          <span></span>
        </div>
        <div>
          <span></span>
          <span></span>
        </div>
      </div> */}
      <div className="col-span-2 flex justify-between rounded-xl border border-neutral-200 bg-neutral-100 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-800">
        {Object.keys(data?.personalBests.time).map((item, index) => {
          const maxWpm = Object.values(data?.personalBests.time)[index].reduce(
            (prevValue, currentValue) => {
              return prevValue.wpm > currentValue.wpm
                ? prevValue
                : currentValue;
            },
          );
          console.log("max", maxWpm);
          return (
            <div key={item} className="flex flex-col items-center gap-2">
              <h2 className="text-xs dark:text-neutral-500">{item} seconds</h2>
              <span className="text-4xl dark:text-neutral-50">
                {Math.round(maxWpm.wpm)}
              </span>
              <span className="text-xl dark:text-neutral-300">
                {Math.floor(maxWpm.acc)}%
              </span>
            </div>
          );
        })}
      </div>

      <div className="col-span-2 flex justify-between rounded-xl border border-neutral-200 bg-neutral-100 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-800">
        {Object.keys(data?.personalBests.words).map((item, index) => {
          const maxWpm = Object.values(data?.personalBests.words)[index].reduce(
            (prevValue, currentValue) => {
              return prevValue.wpm > currentValue.wpm
                ? prevValue
                : currentValue;
            },
          );
          return (
            <div key={item} className="flex flex-col items-center gap-2">
              <h2 className="text-xs dark:text-neutral-500">{item} words</h2>
              <span className="text-4xl dark:text-neutral-50">
                {Math.round(maxWpm.wpm)}
              </span>
              <span className="text-xl dark:text-neutral-300">
                {Math.floor(maxWpm.acc)}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
