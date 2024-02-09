"use client";

import { useTheme } from "next-themes";
import { resolve } from "path";
import { BsCloudMoon, BsCloudSun } from "react-icons/bs";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={toggleTheme} className="">
      {resolvedTheme ? <BsCloudSun /> : <BsCloudMoon />}
    </button>
  );
}
