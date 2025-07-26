"use client";

import clsx from "clsx";
import { ChangeEvent, useState, useTransition } from "react";

import { Locale } from "@/config";
import { setUserLocale } from "@/services/locale";

interface LocaleSwitcherSelectProps {
  items: Array<{ value: string; label: string }>;
  label: string;
  defaultValue: string;
}

const LocaleSwitcherSelect = ({
  items,
  label,
  defaultValue,
}: LocaleSwitcherSelectProps) => {
  const [isPending, startTransition] = useTransition();
  const [isShow, setIsShow] = useState(false);

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const locale = event.target.value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  };

  return (
    <button
      className={clsx(
        "flex items-center justify-center text-neutral-900 dark:text-neutral-300 ",
        isPending && "transition-opacity [&:disabled]:opacity-30",
      )}
      onClick={() => setIsShow(!isShow)}
    >
      <select
        className="inline-flex appearance-none rounded-xl bg-neutral-100 px-2 py-1 outline-none transition duration-300 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </button>
  );
};

export default LocaleSwitcherSelect;
