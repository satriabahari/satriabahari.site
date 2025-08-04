import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  BsCloudMoon as DarkModeIcon,
  BsCloudSun as LightModeIcon,
} from "react-icons/bs";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const isLightMode = resolvedTheme === "light";

  return (
    <div className="flex items-center justify-center">
      {/* Desktop */}
      <div className="relative hidden items-center gap-2 rounded-full border-[1.5px] border-neutral-300 bg-neutral-100 p-1 dark:border-neutral-700 dark:bg-neutral-800 lg:flex">
        {/* Sliding Background */}
        <motion.div
          className="absolute bottom-1 top-1 w-8 rounded-full bg-neutral-300 dark:bg-neutral-700"
          animate={{
            x: isLightMode ? 0 : 40,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        />

        {/* Light Mode Button */}
        <motion.button
          className="relative z-10 flex h-8 w-8 items-center justify-center transition duration-200"
          onClick={() => setTheme("light")}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{
              color: isLightMode ? "#171717" : "#FFFFFF",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <LightModeIcon size={17} />
          </motion.div>
        </motion.button>

        {/* Dark Mode Button */}
        <motion.button
          className="relative z-10 flex h-8 w-8 items-center justify-center transition duration-200"
          onClick={() => setTheme("dark")}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{
              color: !isLightMode ? "#FFFFFF" : "#737373",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <DarkModeIcon size={17} />
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile */}
      <button
        className="flex items-center gap-2 rounded-full border-[1.5px] border-neutral-300 bg-neutral-100 p-1 transition duration-200 hover:scale-110 dark:border-neutral-700 dark:bg-neutral-800 lg:hidden"
        onClick={() => setTheme(isLightMode ? "dark" : "light")}
      >
        <motion.div
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-300 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-50"
        >
          {isLightMode ? (
            <DarkModeIcon size={17} />
          ) : (
            <LightModeIcon size={17} />
          )}
        </motion.div>
      </button>
    </div>
  );
};

export default ThemeToggle;
