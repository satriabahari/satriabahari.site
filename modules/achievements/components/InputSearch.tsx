"use client";

import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebounceValue } from "usehooks-ts";
import { FiSearch as SearchIcon } from "react-icons/fi";

const InputSearch = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialSearch = searchParams.get("search") || "";

  const [inputValue, setInputValue] = useState(initialSearch);
  const [debouncedValue] = useDebounceValue(inputValue, 1000);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const searchValue = inputValue.trim();
      if (searchValue) {
        router.push(`/achievements?search=${encodeURIComponent(searchValue)}`);
      } else {
        router.push("/achievements");
      }
    }
  };

  useEffect(() => {
    const searchValue = debouncedValue.trim();
    const currentSearch = searchParams.get("search") || "";

    if (searchValue !== currentSearch) {
      const params = new URLSearchParams(searchParams.toString());
      if (searchValue) {
        params.set("search", searchValue);
      } else {
        params.delete("search");
      }
      router.push(`/achievements?${params.toString()}`);
    }
  }, [debouncedValue, searchParams, router]);

  return (
    <div className="flex w-full items-center gap-2 rounded-lg bg-neutral-50 p-2 outline outline-neutral-300 focus:outline-neutral-400 dark:bg-neutral-900 dark:outline-neutral-700 md:w-fit">
      <SearchIcon className="text-neutral-500" size={17} />
      <input
        type="search"
        placeholder="Search..."
        value={inputValue}
        className="w-full bg-transparent pr-2 text-sm outline-none placeholder:text-neutral-500"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        data-umami-event="input_search"
      />
    </div>
  );
};

export default InputSearch;
