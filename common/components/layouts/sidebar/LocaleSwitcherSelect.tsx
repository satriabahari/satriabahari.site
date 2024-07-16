"use client";

import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useState, useTransition } from "react";
import { HiChevronRight as ChevronIcon } from "react-icons/hi";
import { TbWorld as WorldIcon } from "react-icons/tb";

interface LocaleSwitcherSelectProps {
  children: React.ReactNode;
  defaultValue: string;
  label: string;
}

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: LocaleSwitcherSelectProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isShow, setIsShow] = useState(false);
  const pathname = usePathname();

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value;
    startTransition(() => {
      const newPathname = `/${nextLocale}${pathname.substring(3)}`;
      router.replace(newPathname);
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
      {/* <p className="sr-only">{label}</p> */}
      <select
        className="inline-flex appearance-none rounded-xl bg-neutral-100 px-2 py-1 outline-none transition duration-300 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
      {/* <ChevronIcon
        size={18}
        className={clsx({
          "rotate-90 transition-all duration-100": isShow,
        })}
      /> */}
    </button>
  );
}
