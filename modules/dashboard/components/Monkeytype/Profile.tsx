import { differenceInDays, format } from "date-fns";
import Image from "next/image";

import Tooltip from "@/common/components/elements/Tooltip";
import { MonkeytypeData } from "@/common/types/monkeytype";
import clsxm from "@/common/libs/clsxm";

import OverviewItem from "./OverviewItem";

type ProfileProps = {
  data: MonkeytypeData;
  className?: string;
};

export default function Profile({ data, className }: ProfileProps) {
  const date = new Date(data?.addedAt);
  const endDate = new Date();
  const durationDays = differenceInDays(endDate, date);

  const timeTyping = data?.typingStats.timeTyping;
  const hours = Math.floor(timeTyping / 3600);
  const minutes = Math.floor((timeTyping % 3600) / 60);
  const remainingSeconds = Math.round(timeTyping % 60);

  let xp = data?.xp;
  let level = 1;
  let xpNeeded = 100;

  while (xp >= xpNeeded) {
    level++;
    xp -= xpNeeded;
    xpNeeded += 49;
  }

  const xpToNextLevel = level * 49 + 100;
  const difference = (xpToNextLevel - xp) / 100;
  const remainder = xpToNextLevel - xp;

  return (
    <div
      className={clsxm(
        "flex flex-col items-center gap-x-8 gap-y-4 rounded-xl border border-neutral-200 bg-neutral-100 py-3 dark:border-neutral-800 dark:bg-neutral-800 sm:flex-row sm:px-4",
        className,
      )}
    >
      <div className="flex flex-col gap-y-2">
        <div className="flex gap-x-4">
          <div className="flex items-center">
            <Image
              src={"/images/satria.jpg"}
              width={80}
              height={80}
              alt="Satria Bahari"
              className="rounded-full border-2 border-neutral-400 transition-all duration-300 dark:border-neutral-600 lg:hover:scale-105"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-2xl font-medium text-green-600">
              {data?.name}
            </span>
            <Tooltip title={`${durationDays} days ago`}>
              <span className="text-xs text-neutral-600 dark:text-neutral-400">
                Joined {format(date, "dd MMM yyyy")}
              </span>
            </Tooltip>
            <Tooltip title={`Longest streak: ${data?.maxStreak} days`}>
              <span className="text-xs text-neutral-600 dark:text-neutral-400">
                Current streak: {data?.streak} days
              </span>
            </Tooltip>
          </div>
        </div>

        <div className="flex w-full items-center justify-between gap-3">
          <span className="text-sm font-medium text-green-600">{level}</span>
          <div className="relative h-2 w-full rounded-full bg-neutral-300 dark:bg-neutral-900 ">
            <span
              className={clsxm(
                "absolute h-2  rounded-full bg-neutral-600 dark:bg-neutral-50",
                `w-[${Math.round(difference)}%]`,
              )}
            />
          </div>
          <Tooltip title={`${remainder} xp until next level`}>
            <span className="text-xs text-neutral-600 dark:text-neutral-400">
              {xp}/{Math.floor(xpToNextLevel)}
            </span>
          </Tooltip>
        </div>
      </div>

      <span className="hidden h-24 w-2 rounded-full bg-neutral-300 p-1 dark:bg-neutral-900 sm:block" />

      <div className="flex flex-grow items-center justify-between rounded-xl  bg-neutral-100 dark:bg-neutral-800 sm:flex-row sm:px-4 sm:py-3">
        <OverviewItem
          label="test started"
          value={data?.typingStats.startedTests}
        />
        <OverviewItem
          label="test completed"
          value={data?.typingStats.completedTests}
        />
        <OverviewItem
          label="time typing"
          value={format(
            new Date(0, 0, 0, hours, minutes, remainingSeconds),
            "HH:mm:ss",
          )}
        />
      </div>
    </div>
  );
}
