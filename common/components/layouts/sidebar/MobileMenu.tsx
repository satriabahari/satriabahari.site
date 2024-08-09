import { motion } from "framer-motion";

import { MENU_ITEMS } from "@/common/constants/menu";

import Breakline from "../../elements/Breakline";

import Menu from "./Menu";

const MobileMenu = () => {
  const filteredMenu = MENU_ITEMS?.filter((item) => item?.isShow);
  return (
    <motion.div
      className="my-3 flex h-screen flex-col"
      initial={{ y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <Breakline />
        <Menu list={filteredMenu} />
      </div>
    </motion.div>
  );
};

export default MobileMenu;
