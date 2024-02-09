import { MenuItemProps } from "@/common/types/menu";
import MenuItem from "./MenuItem";

type MenuProps = {
  list: MenuItemProps[];
};
export default function Menu({ list }: MenuProps) {
  return (
    <nav className="flex flex-col gap-y-1">
      {list?.map((item: MenuItemProps, index: number) => (
        <MenuItem key={index} {...item} />
      ))}
    </nav>
  );
}
