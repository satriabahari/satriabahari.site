import { ChangeEvent, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { LuChevronsUpDown as ArrowIcon } from "react-icons/lu";
import { TiTick as ActiveIcon } from "react-icons/ti";
import { FiSearch as SearchIcon } from "react-icons/fi";

import cn from "@/common/libs/clsxm";

import Button from "./Button";

interface ComboBoxProps {
  data: dataComboBox[];
  param: string;
  url: string;
  label: string;
}

interface dataComboBox {
  label: string;
  value: string;
}

const ComboBox = ({ data, param, url, label }: ComboBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const searchParams = useSearchParams();
  const category = searchParams.get(param);

  const [value, setValue] = useState(
    category ? encodeURIComponent(category) : "",
  );

  const comboBoxRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const filteredData = data?.filter((item) =>
    item.label.toLowerCase().includes(inputValue.toLowerCase()),
  );

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (newValue: string) => {
    setValue((prevValue) => {
      const updatedValue = prevValue === newValue ? "" : newValue;

      if (updatedValue === "") {
        router.push(`/${url}`);
      } else {
        router.push(`/${url}?${param}=${encodeURIComponent(updatedValue)}`);
      }

      return updatedValue;
    });

    setIsOpen(false);
  };

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
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
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div ref={comboBoxRef} className="relative w-full md:w-[230px]">
        <Button
          className="flex w-full items-center justify-between gap-4 p-2 outline outline-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800"
          onClick={handleClick}
        >
          <span className="text-sm ">
            {value
              ? data.find((item) => item.value === value)?.label
              : `Filter ${label}...`}
          </span>
          <ArrowIcon
            className={cn("transition duration-200", isOpen && "scale-125")}
          />
        </Button>

        {isOpen && (
          <motion.div
            initial={{ scale: 0, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            className="absolute left-0 top-12 w-full"
          >
            <div className="w-full  rounded-md border-neutral-500 outline outline-neutral-600 dark:bg-neutral-900">
              <div className="grid w-full grid-cols-[1.5rem_1fr] items-center border-b border-neutral-700 px-3 py-2">
                <SearchIcon className="dark:text-neutral-500" />
                <input
                  type="search"
                  className=" flex justify-start text-sm text-neutral-50 outline-none placeholder:text-neutral-500 dark:bg-neutral-900"
                  placeholder={`Search ${label}...`}
                  onChange={handleChangeInput}
                  value={inputValue}
                />
              </div>

              <div className="p-1">
                {filteredData.length === 0 && (
                  <div className="px-4 py-2 text-center text-sm dark:text-neutral-50">
                    no {label} found.
                  </div>
                )}

                {filteredData.map((item, index) => {
                  return (
                    <button
                      key={index}
                      className="grid w-full grid-cols-[1.5rem_1fr] items-center rounded-[4px] p-2 text-neutral-50 hover:bg-neutral-800"
                      onClick={() => handleSelect(item.value)}
                    >
                      {item.value === value && <ActiveIcon />}
                      <span className="col-start-2 flex justify-start text-sm">
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default ComboBox;
