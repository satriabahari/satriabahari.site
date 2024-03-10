"use client";

import React from "react";

import { MENU_ITEMS } from "@/common/constant/menu";
import useIsMobile from "@/hooks/useIsMobile";

import Copyright from "../../elements/Copyright";
import Breakline from "../../elements/Breakline";
import Profile from "./Profile";
import Menu from "./Menu";

export default function Sidebar() {
  const filteredMenu = MENU_ITEMS?.filter((item) => item?.isShow);
  const isMobile = useIsMobile();
  return (
    <header className="lg:w-1/5">
      <div className="sticky top-0 z-10 transition-all duration-300 lg:py-8">
        <Profile />
        {!isMobile && (
          <>
            <Breakline />
            <Menu list={filteredMenu} />
            <Breakline />
            <Copyright />
          </>
        )}
      </div>
    </header>
  );
}
