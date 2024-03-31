import { differenceInDays, format } from "date-fns";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

import Tooltip from "@/common/components/elements/Tooltip";
import { MonkeytypeData } from "@/common/types/monkeytype";
import clsxm from "@/common/libs/clsxm";
import Card from "@/common/components/elements/Card";

type ProfileProps = {
  data: MonkeytypeData;
};

type ItemProps = {
  label?: string;
  value?: number | string;
};

const Item = ({ label, value }: ItemProps) => (
  <div className="flex flex-col">
    <span className="text-xs dark:text-neutral-500">{label}</span>
    <span className="text-2xl dark:text-neutral-50">{value}</span>
  </div>
);

export default function Profile({ data }: ProfileProps) {
  const date = new Date(data?.addedAt);
  const endDate = new Date();
  const durationDays = differenceInDays(endDate, date);

  const timeTyping = data?.typingStats.timeTyping;
  const minutes = Math.floor(timeTyping / 60);
  const seconds = Math.round(timeTyping % 60);

  let xp = data?.xp;
  let level = 1;
  let xpNeeded = 100;

  while (xp >= xpNeeded) {
    level++;
    xp -= xpNeeded;
    xpNeeded += 49;
  }

  const xpToNextLevel = (level - 1) * 49 + 100;
  const difference = (xpToNextLevel - xp) / 100;
  const remainder = xpToNextLevel - xp;

  const progressVariants: Variants = {
    initial: { width: 0 },
    animate: {
      width: `${Math.round(difference)}px`,
      transition: { delay: 0.8 },
    },
  };

  const XpProgress = () => (
    <div className="flex w-full items-center justify-between gap-3">
      <Tooltip title={`${data?.xp} total xp`}>
        <span className="text-sm font-medium text-green-600">{level}</span>
      </Tooltip>

      <div className="relative h-2 w-full rounded-full bg-neutral-300 dark:bg-neutral-900 ">
        <motion.span
          initial="initial"
          animate="animate"
          variants={progressVariants}
          className="absolute left-0 top-0 h-2 rounded-full bg-neutral-600 dark:bg-neutral-50"
        >
          &ensp;
        </motion.span>
      </div>

      <Tooltip title={`${remainder} xp until next level`}>
        <span className="text-xs text-neutral-600 dark:text-neutral-400">
          {xp}/{Math.floor(xpToNextLevel)}
        </span>
      </Tooltip>
    </div>
  );

  return (
    <Card className="flex flex-col items-center gap-x-8 gap-y-4 py-3 sm:flex-row sm:px-4">
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

        <XpProgress />
      </div>

      <span className="hidden h-full w-2 rounded-full bg-neutral-300 p-1 dark:bg-neutral-900 sm:flex" />

      <div className="flex flex-grow items-center justify-between rounded-xl sm:flex-row sm:px-4 sm:py-3">
        <Item label="test started" value={data?.typingStats.startedTests} />
        <Item label="test completed" value={data?.typingStats.completedTests} />
        <Item
          label="time typing"
          value={format(new Date(0, 0, 0, 0, minutes, seconds), "HH:mm:ss")}
        />
      </div>
    </Card>
  );
}
