import React from "react";
import Card from "@/common/components/elements/Card";

interface OverviewItemProps {
  label: string;
  value: string;
}

const OverviewItem = ({ label, value }: OverviewItemProps) => {
  return (
    <Card className="flex flex-col space-y-1 px-4 py-3 sm:col-span-1">
      <span className="text-sm dark:text-neutral-400">{label}</span>
      <span>{value || "-"}</span>
    </Card>
  );
};

export default OverviewItem;
