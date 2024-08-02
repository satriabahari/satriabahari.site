"use client";

import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDebounceValue } from "usehooks-ts";
import { FiSearch as SearchIcon } from "react-icons/fi";

interface InputSearchProps {
  placeholder?: string;
}

const InputSearch = ({ placeholder }: InputSearchProps) => {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useDebounceValue("", 1500);

  const router = useRouter();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setDebouncedValue(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (inputValue.length === 0) {
        router.push(`/achievements`);
      } else {
        setInputValue("");
        setDebouncedValue("");
        router.push(`/achievements?search=${inputValue}`);
      }
    }
  };

  useEffect(() => {
    if (debouncedValue !== "") {
      router.push(`?search=${debouncedValue}`);
    }
  }, [debouncedValue, router]);

  return (
    <div className="flex w-full items-center gap-2 rounded-lg bg-neutral-50 p-2 outline outline-neutral-300 focus:outline-neutral-400 dark:bg-neutral-900 dark:outline-neutral-700 md:w-fit">
      <SearchIcon className="text-neutral-500" size={17} />
      <input
        type="search"
        placeholder={placeholder}
        value={inputValue}
        className="w-full bg-transparent pr-2 text-sm outline-none placeholder:text-neutral-500"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default InputSearch;
