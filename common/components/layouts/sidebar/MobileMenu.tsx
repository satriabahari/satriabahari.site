import { MENU_ITEMS } from "@/common/constant/menu";
import Breakline from "../../elements/Breakline";
import Menu from "./Menu";

export default function MobileMenu() {
  return (
    <div className="my-3 h-screen">
      <Breakline />
      <Menu list={MENU_ITEMS} />
    </div>
  );
}
