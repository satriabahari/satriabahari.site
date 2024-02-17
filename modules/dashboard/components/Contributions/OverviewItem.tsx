type OverviewItemProps = {
  label: string;
  value: number;
  unit?: string;
};
export default function OverviewItem({
  label,
  value,
  unit = "",
}: OverviewItemProps) {
  return (
    <div className="flex flex-col self-center rounded-xl border border-neutral-200 bg-neutral-100 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-800">
      <span className="text-sm dark:text-neutral-400">{label}</span>
      <div>
        {/* <AnimateCounter
          className="text-xl font-medium text-green-600 lg:text-2xl"
          total={value}
        /> */}
        <span className="text-2xl font-medium text-green-600">{value}</span>
        {unit ? (
          <span className="text-sm dark:text-neutral-400"> {unit}</span>
        ) : null}
      </div>
    </div>
  );
}
