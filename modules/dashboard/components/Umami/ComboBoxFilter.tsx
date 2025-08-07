"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { LuChevronsUpDown as ArrowIcon } from "react-icons/lu";
import { TiTick as ActiveIcon } from "react-icons/ti";
import { MdArrowOutward as LinkIcon } from "react-icons/md";
import { motion } from "framer-motion";

import cn from "@/common/libs/clsxm";
import Button from "@/common/components/elements/Button";
import { UMAMI_ACCOUNT } from "@/common/constants/umami";

const ComboBoxFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectValue, setSelectValue] = useState("");

  const searchParams = useSearchParams();
  const domainParams = searchParams.get("domain");

  const router = useRouter();
  const comboBoxRef = useRef<HTMLDivElement>(null);

  const { websites } = UMAMI_ACCOUNT;

  const handleClickOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (newValue: string) => {
    setSelectValue((prev) => (prev === newValue ? "" : newValue));
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      comboBoxRef.current &&
      !comboBoxRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (domainParams) {
      setSelectValue(domainParams);
    } else {
      setSelectValue("");
    }
  }, [domainParams]);

  useEffect(() => {
    if (selectValue === "") {
      router.push(`/dashboard`);
    } else {
      router.push(`/dashboard?domain=${encodeURIComponent(selectValue)}`);
    }
  }, [router, selectValue]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={comboBoxRef} className="relative w-full md:w-[200px]">
      <Button
        className="flex w-full items-center justify-between gap-4 bg-neutral-100 p-2 text-neutral-900 outline outline-neutral-300 hover:bg-neutral-300 dark:bg-neutral-900 dark:text-neutral-400 dark:outline-neutral-700 dark:hover:bg-neutral-800"
        onClick={handleClickOpen}
        data-umami-event="click_filter_websites"
      >
        <span className="text-sm">{selectValue || `Filter domains...`}</span>
        <ArrowIcon
          className={cn("transition duration-200", isOpen && "scale-125")}
        />
      </Button>

      {isOpen && (
        <motion.div
          initial={{ scale: 0, y: -20 }}
          animate={{ scale: 1, y: 0 }}
          className="absolute left-0 top-12 z-10 w-full"
        >
          <div className="w-full rounded-md bg-neutral-100 outline outline-neutral-300 dark:bg-neutral-900 dark:outline-neutral-600">
            <div className="p-1">
              {websites.length === 0 && (
                <div className="px-4 py-2 text-center text-sm text-neutral-900 dark:text-neutral-50">
                  no website found.
                </div>
              )}

              {websites.map((item, index) => (
                <button
                  key={index}
                  className="group grid w-full grid-cols-[1.5rem_1fr_1.5rem] items-center rounded-[4px] p-2 text-neutral-900 hover:bg-neutral-300 dark:text-neutral-50 dark:hover:bg-neutral-800"
                  onClick={() => handleSelect(item.domain)}
                >
                  {item.domain === selectValue && <ActiveIcon />}
                  <span className="col-start-2 flex w-fit justify-start text-sm">
                    {item.domain}
                  </span>
                  <Link
                    href={item.umami_url}
                    target="_blank"
                    className="m-auto ml-1 rounded-md p-1 transition duration-300 group-hover:scale-105 dark:bg-neutral-800 dark:group-hover:bg-neutral-900 bg-neutral-300 group-hover:bg-neutral-200"
                  >
                    <LinkIcon />
                  </Link>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ComboBoxFilter;
