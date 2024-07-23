"use client";

import { useState } from "react";

interface TabProps {
  label: React.ReactNode;
  children: React.ReactNode;
}

interface TabsProps {
  tabs: TabProps[];
}

export const Tab = ({ children }: TabProps) => {
  return <>{children}</>;
};

export default function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClik = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      {tabs.map((tab, index) => (
        <button key={index}></button>
      ))}
    </div>
  );
}
