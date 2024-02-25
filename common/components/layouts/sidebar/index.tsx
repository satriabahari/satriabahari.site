import React from "react";
import Menu from "./Menu";
import { MENU_ITEMS } from "@/common/constant/menu";
import Breakline from "../../elements/Breakline";
import Copyright from "../../elements/Copyright";
import ProfileHeader from "./ProfileHeader";
import Profile from "./Profile";
import useIsMobile from "@/hooks/useIsMobile";

export default function Sidebar() {
  const isMobile = useIsMobile();
  return (
    <header className="lg:w-1/5">
      <div className="sticky top-0 z-10 transition-all duration-300 lg:py-8">
        <Profile />
        {!isMobile ? (
          <>
            <Breakline />
            <Menu list={MENU_ITEMS} />
            <Breakline />
            <Copyright />
          </>
        ) : null}
      </div>
    </header>
  );
}
