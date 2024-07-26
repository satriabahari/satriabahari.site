"use client";

import { useTheme } from "next-themes";
import { BsCloudMoon, BsCloudSun } from "react-icons/bs";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-xl bg-neutral-100 p-2 transition-all duration-300 hover:bg-neutral-200 dark:bg-neutral-800 hover:dark:bg-neutral-700"
    >
      {resolvedTheme === "light" ? <BsCloudSun /> : <BsCloudMoon />}
    </button>
  );
};

export default ThemeToggle;
