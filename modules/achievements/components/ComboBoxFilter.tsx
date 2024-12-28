import { ChangeEvent, useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { LuChevronsUpDown as ArrowIcon } from "react-icons/lu";
import { TiTick as ActiveIcon } from "react-icons/ti";
import { FiSearch as SearchIcon } from "react-icons/fi";
import { motion } from "framer-motion";

import cn from "@/common/libs/clsxm";
import Button from "@/common/components/elements/Button";

interface dataComboBox {
  label: string;
  value: string;
}

const data: dataComboBox[] = [
  {
    label: "Certificate",
    value: "certificate",
  },
  {
    label: "Badge",
    value: "badge",
  },
];

const ComboBoxFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValueSearch, setInputValueSearch] = useState("");
  const [selectValue, setSelectValue] = useState("");

  const searchParams = useSearchParams();
  const categoryParams = searchParams.get("category");

  const router = useRouter();
  const comboBoxRef = useRef<HTMLDivElement>(null);

  const filteredData = data?.filter((item) =>
    item.label.toLowerCase().includes(inputValueSearch.toLowerCase()),
  );

  const handleClickOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (newValue: string) => {
    setSelectValue((prevValue) => (prevValue === newValue ? "" : newValue));
    setIsOpen(false);
  };

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValueSearch(event.target.value);
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
    if (categoryParams) {
      setSelectValue(categoryParams);
    } else {
      setSelectValue("");
    }
  }, [categoryParams]);

  useEffect(() => {
    if (selectValue === "") {
      router.push(`/achievements`);
    } else {
      router.push(`/achievements?category=${encodeURIComponent(selectValue)}`);
    }
  }, [router, selectValue]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={comboBoxRef} className="relative w-full md:w-[230px]">
      <Button
        className="flex w-full  items-center justify-between gap-4 bg-neutral-100 p-2 text-neutral-900 outline outline-neutral-300 hover:bg-neutral-300  dark:bg-neutral-900 dark:text-neutral-400 dark:outline-neutral-700 dark:hover:bg-neutral-800"
        onClick={handleClickOpen}
      >
        <span className="text-sm ">
          {selectValue
            ? data.find((item) => item.value === selectValue)?.label
            : `Filter achievements...`}
        </span>
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
          <div className="w-full rounded-md  bg-neutral-100 outline outline-neutral-300 dark:bg-neutral-900 dark:outline-neutral-600">
            <div className="grid w-full grid-cols-[1.5rem_1fr] items-center border-b border-neutral-700 px-3 py-2">
              <SearchIcon className="dark:text-neutral-500" />
              <input
                type="search"
                className="flex justify-start bg-neutral-100 text-sm text-neutral-900 outline-none placeholder:text-neutral-500 dark:bg-neutral-900 dark:text-neutral-50"
                placeholder={`Search achievements...`}
                onChange={handleChangeInput}
                value={inputValueSearch}
              />
            </div>

            <div className="p-1">
              {filteredData.length === 0 && (
                <div className="px-4 py-2 text-center text-sm text-neutral-900 dark:text-neutral-50">
                  no category found.
                </div>
              )}

              {filteredData.map((item, index) => (
                <button
                  key={index}
                  className="grid w-full grid-cols-[1.5rem_1fr] items-center rounded-[4px] p-2 text-neutral-900 hover:bg-neutral-300 dark:text-neutral-50 dark:hover:bg-neutral-800"
                  onClick={() => handleSelect(item.value)}
                >
                  {item.value === selectValue && <ActiveIcon />}
                  <span className="col-start-2 flex justify-start text-sm">
                    {item.label}
                  </span>
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
