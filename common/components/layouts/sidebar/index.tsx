import React from "react";
import Menu from "./Menu";
import { MENU_ITEMS } from "@/common/constant/menu";
import Breakline from "../../elements/Breakline";
import Copyright from "../../elements/Copyright";
import ProfileHeader from "./ProfileHeader";

export default function Sidebar() {
  return (
    <header className="min-h-screen w-1/5 p-4 shadow-2xl">
      <ProfileHeader />
      <Breakline />
      <Menu list={MENU_ITEMS} />
      <Breakline />
      <Copyright />
    </header>
  );
}
