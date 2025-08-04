import React, { useTransition } from "react";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";

import { Locale } from "@/config";
import { setUserLocale } from "@/services/locale";

const IntlToggle = () => {
  const currentLocale = useLocale();

  const locales = [
    { value: "en" as Locale, label: "EN", flag: "🇺🇸" },
    { value: "id" as Locale, label: "ID", flag: "🇮🇩" },
  ];

  const [isPending, startTransition] = useTransition();

  const currentIndex = locales.findIndex(
    (locale) => locale.value === currentLocale,
  );
  const buttonWidth = 40;
  const totalWidth = buttonWidth * locales.length;
  const slidePosition = currentIndex * buttonWidth;

  const handleLocaleChange = (locale: Locale) => {
    if (locale === currentLocale || isPending) return;

    startTransition(() => {
      setUserLocale(locale);
    });
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`relative flex items-center gap-1 rounded-full border-[1.5px] border-neutral-300 bg-neutral-200 p-1 dark:border-neutral-700 dark:bg-neutral-800 ${
          isPending ? "pointer-events-none opacity-70" : ""
        }`}
        style={{ width: `${totalWidth + (locales.length - 1) * 4 + 8}px` }}
      >
        {/* Sliding Background */}
        <motion.div
          className="absolute bottom-1 top-1 w-10 rounded-full bg-green-500"
          animate={{
            x: slidePosition + currentIndex * 4,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        />

        {/* Locale Buttons */}
        {locales.map((locale, index) => (
          <motion.button
            key={locale.value}
            className="relative z-10 flex h-8 w-10 items-center justify-center transition duration-200"
            onClick={() => handleLocaleChange(locale.value)}
            whileHover={{ scale: isPending ? 1 : 1.15 }}
            whileTap={{ scale: isPending ? 1 : 0.9 }}
            disabled={isPending}
          >
            <motion.div
              className="flex flex-col items-center justify-center text-xs font-medium"
              animate={{
                color: currentIndex === index ? "#FFFFFF" : "#737373",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <span className="text-[10px] leading-none">{locale.flag}</span>
              <span className="text-[9px] font-semibold leading-none">
                {locale.label}
              </span>
            </motion.div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default IntlToggle;
