import Tooltip from "@/common/components/elements/Tooltip";
import { MonkeytypeData } from "@/common/types/monkeytype";
import { differenceInDays, format } from "date-fns";
import Image from "next/image";

type ProfileProps = {
  data: MonkeytypeData;
};

export default function Profile({ data }: ProfileProps) {
  const date = new Date(data?.addedAt);
  const endDate = new Date();
  const durationDays = differenceInDays(endDate, date);

  return (
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
          {data?.name}
        </span>
        <Tooltip title={`${durationDays} days ago`}>
          <span className="text-xs text-neutral-900 dark:text-neutral-400">
            Joined {format(date, "dd MMM yyyy")}
          </span>
        </Tooltip>
        <Tooltip title={`Longest streak: ${data?.maxStreak} days`}>
          <span className="text-xs text-neutral-900 dark:text-neutral-400">
            Current streak: {data?.streak} days
          </span>
        </Tooltip>
      </div>
    </div>
  );
}
