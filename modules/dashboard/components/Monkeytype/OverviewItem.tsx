import clsxm from "@/common/libs/clsxm";

type OverviewItemProps = {
  label: string;
  value: number | string;
  subValue?: number | string;
  isFlex?: boolean;
};

export default function OverviewItem({
  label,
  value,
  subValue,
  isFlex = false,
}: OverviewItemProps) {
  return (
    <div
      className={clsxm(
        "flex flex-col items-center gap-x-2 p-1",
        isFlex && "flex-row",
      )}
    >
      <span className="text-xs text-neutral-600 dark:text-neutral-400">
        {label}
      </span>
      <span className="text-2xl font-medium text-green-600">{value}</span>
      {subValue && (
        <span className=" text-neutral-600 dark:text-neutral-300">
          {subValue}
        </span>
      )}
    </div>
  );
}
