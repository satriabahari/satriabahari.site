import SpotlightCard from "@/common/components/elements/SpotlightCard";

interface OverviewItemProps {
  label: string;
  value: string;
}

const OverviewItem = ({ label, value }: OverviewItemProps) => {
  return (
    <SpotlightCard className="flex flex-col space-y-1 p-4 sm:col-span-1">
      <span className="text-sm dark:text-neutral-400 text-neutral-600">{label}</span>
      <span>{value || "-"}</span>
    </SpotlightCard>
  );
};

export default OverviewItem;
