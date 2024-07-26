"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { useNotifStore } from "@/common/stores/notif";

const Notif = () => {
  const { isOpen, text, hideNotif } = useNotifStore();

  useEffect(() => {
    const timeout = setTimeout(() => {
      hideNotif();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [hideNotif, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed right-6 top-6 rounded-sm bg-neutral-600 bg-opacity-80 px-2 py-1 font-sans text-sm text-neutral-100 dark:bg-neutral-300 dark:text-neutral-700"
        >
          {text}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notif;
