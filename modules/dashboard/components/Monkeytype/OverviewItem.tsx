import clsx from "clsx";

type OverviewItemProps = {
  label: string;
  value: number | string;
  subValue?: number | string;
  flex?: boolean;
};

export default function OverviewItem({
  label,
  value,
  subValue,
  flex = false,
}: OverviewItemProps) {
  return (
    <div
      className={`flex items-center ${flex ? "flex-row" : "flex-col"} gap-x-2`}
    >
      <span className="text-xs text-neutral-900 dark:text-neutral-400">
        {label}
      </span>
      <span className="text-2xl font-medium text-green-600">{value}</span>
      {subValue && (
        <span className=" text-neutral-900 dark:text-neutral-300">
          {subValue}
        </span>
      )}
    </div>
  );
}
