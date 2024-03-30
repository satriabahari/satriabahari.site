"use client";

import { useState } from "react";

import OverviewItem from "./OverviewItem";

type OverviewProps = {
  data: any;
};

export default function Overview({ data }: OverviewProps) {
  const [isHover, setIsHover] = useState<number | null>(null);

  const handleHover = (index: number | null) => {
    setIsHover(index);
  };

  return (
    <div className="grid grid-cols-1 gap-3 py-2 sm:grid-cols-2">
      <OverviewItem data={data.personalBests.time} type="time" />
      <OverviewItem data={data.personalBests.words} type="words" />
    </div>
  );
}
