import { MenuItemProps } from "@/common/types/menu";

import MenuItem from "./MenuItem";

interface MenuProps {
  title?: string;
  list: MenuItemProps[];
}

const Menu = ({ title, list }: MenuProps) => {
  return (
    <nav className="flex flex-col gap-y-1">
      {title && (
        <div className="mb-2 ml-2 mt-1 hidden text-sm text-neutral-600 dark:text-neutral-500 lg:block">
          {title}
        </div>
      )}
      {list?.map((item: MenuItemProps, index: number) => (
        <MenuItem key={index} {...item} />
      ))}
    </nav>
  );
};

export default Menu;
