import { MenuItemProps } from "@/common/types/menu";
import Link from "next/link";
import React from "react";

export default function MenuItem({ title, href, icon }: MenuItemProps) {
  return (
    <Link href={href}>
      <div className="group flex items-center gap-x-2 rounded-lg  p-2 text-neutral-700 transition duration-300 hover:scale-105 hover:bg-neutral-200 hover:text-neutral-900 dark:text-neutral-400 hover:dark:bg-neutral-800 hover:dark:text-neutral-300 ">
        <i className="transition group-hover:-rotate-12">{icon}</i>
        <p>{title}</p>
      </div>
    </Link>
  );
}
