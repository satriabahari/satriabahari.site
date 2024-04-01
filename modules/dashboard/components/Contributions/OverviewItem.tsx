import AnimateCounter from "@/common/components/elements/AnimateCounter";
import Card from "@/common/components/elements/Card";

interface OverviewItemProps {
  label: string;
  value: number;
  unit?: string;
}

const OverviewItem = ({ label, value, unit = "" }: OverviewItemProps) => (
  <Card className="flex flex-col self-center bg-neutral-100 px-4 py-3">
    <span className="text-sm dark:text-neutral-400">{label}</span>
    <div>
      <AnimateCounter
        className="text-xl font-medium text-green-600 lg:text-2xl"
        total={value}
      />
      {unit && <span className="text-sm dark:text-neutral-400"> {unit}</span>}
    </div>
  </Card>
);

export default OverviewItem;
