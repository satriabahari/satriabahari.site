import { motion } from "framer-motion";

import { MENU_ITEMS } from "@/common/constant/menu";

import Breakline from "../../elements/Breakline";
import Menu from "./Menu";


export default function MobileMenu() {
  return (
    <motion.div
      className="my-3 flex h-screen flex-col"
      initial={{ y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <Breakline />
        <Menu list={MENU_ITEMS} />
      </div>
    </motion.div>
  );
}
