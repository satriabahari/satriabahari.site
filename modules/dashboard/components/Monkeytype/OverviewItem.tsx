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
      className={`flex items-center ${isFlex ? "flex-row" : "flex-col"} gap-x-2 p-1`}
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
