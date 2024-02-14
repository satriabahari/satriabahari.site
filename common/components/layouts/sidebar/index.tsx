import React from "react";
import Menu from "./Menu";
import { MENU_ITEMS } from "@/common/constant/menu";
import Breakline from "../../elements/Breakline";
import Copyright from "../../elements/Copyright";
import ProfileHeader from "./ProfileHeader";
import Profile from "./Profile";

export default function Sidebar() {
  return (
    <header className="w-1/5">
      <div className="sticky top-0 z-10 py-8">
        <Profile />
        <Breakline />
        <Menu list={MENU_ITEMS} />
        <Breakline />
        <Copyright />
      </div>
    </header>
  );
}
