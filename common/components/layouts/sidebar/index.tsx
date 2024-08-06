import React from "react";

import { MENU_ITEMS } from "@/common/constants/menu";

import Copyright from "../../elements/Copyright";
import Breakline from "../../elements/Breakline";
import Profile from "./Profile";
import Menu from "./Menu";

export default function Sidebar() {
  const filteredMenu = MENU_ITEMS?.filter((item) => item?.isShow);
  return (
    <header className="lg:w-1/5">
      <div className="sticky top-0 z-10 flex flex-col transition-all duration-300 lg:py-8">
        <Profile />
        <div className="hidden md:block">
          <Breakline />
          <div className="hidden lg:block">
            <Menu list={filteredMenu} />
          </div>
          <Breakline />
          <Copyright />
        </div>
      </div>
    </header>
  );
}
