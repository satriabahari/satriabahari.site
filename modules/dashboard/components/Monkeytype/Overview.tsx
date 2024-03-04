import {
  MonkeytypeData,
  MonkeytypeLeaderboard,
} from "@/common/types/monkeytype";
import Image from "next/image";
import OverviewItem from "./OverviewItem";
import Tooltip from "@/common/components/elements/Tooltip";
import { differenceInDays, format } from "date-fns";

type OverviewProps = {
  dataProfile: MonkeytypeData;
  dataLeaderboard: MonkeytypeLeaderboard;
};

export default function Overview({
  dataProfile,
  dataLeaderboard,
}: OverviewProps) {
  const timeTyping = dataProfile?.typingStats.timeTyping;
  const hours = Math.round(timeTyping / 3600);
  const minutes = Math.round((timeTyping % 3600) / 60);
  const remainingSeconds = Math.round(timeTyping % 60);

  const date = new Date(dataProfile?.addedAt);

  const endDate = new Date();
  const durationDays = differenceInDays(endDate, date);
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
          <Tooltip title={`${durationDays} days ago`}>
            <span className="text-xs text-neutral-900 dark:text-neutral-400">
              Joined {format(date, "dd MMM yyyy")}
            </span>
          </Tooltip>
          <Tooltip title={`Longest streak: ${dataProfile?.maxStreak} days`}>
            <span className="text-xs text-neutral-900 dark:text-neutral-400">
              Current streak: {dataProfile?.streak} days
            </span>
          </Tooltip>
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
          value={format(
            new Date(0, 0, 0, hours, minutes, remainingSeconds),
            "HH:mm:ss",
          )}
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