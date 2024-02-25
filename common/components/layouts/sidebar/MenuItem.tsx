import { MenuItemProps } from "@/common/types/menu";
import { useMenu } from "@/stores/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { BsArrowRightShort as ExternalLinkIcon } from "react-icons/bs";

export default function MenuItem({
  title,
  href,
  icon,
  onClick,
  className = "",
  isHover,
  children,
}: MenuItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { hideMenu } = useMenu();
  const isExternalUrl = href?.includes("http");
  const isHashLink = href === "#";
  const pathname = usePathname();

  const activeClasses = `flex items-center gap-2 py-2 px-4 text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 hover:dark:text-neutral-300 rounded-lg group ${
    pathname === href
      ? "bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:!text-neutral-200"
      : "hover:dark:lg:bg-neutral-800 hover:dark:!text-neutral-300 hover:lg:bg-neutral-200 hover:lg:rounded-lg lg:hover:scale-105 lg:transition-all lg:duration-300"
  }`;

  const handleClick = () => {
    hideMenu();
    if (onClick) onClick();
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const elementProps = {
    className: `${activeClasses} ${className}`,
    onClick: handleClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };

  const itemComponent = () => {
    return (
      <div {...elementProps}>
        <i className="transition group-hover:-rotate-12">{icon}</i>
        {isHover && (
          <p className="ml-1 whitespace-nowrap text-sm delay-1000">{title}</p>
        )}
        <p className="flex-grow">{title}</p>
        {children && <>{children}</>}
        {isExternalUrl && isHovered && (
          <ExternalLinkIcon
            size={22}
            className="-rotate-45 text-gray-500 lg:transition-all lg:duration-300"
          />
        )}
      </div>
    );
  };

  return isHashLink ? (
    <div className="cursor-pointer">{itemComponent()}</div>
  ) : (
    <Link
      aria-label={title}
      tabIndex={0}
      href={href}
      target={isExternalUrl ? "_blank" : ""}
      onClick={handleClick}
    >
      {itemComponent()}
    </Link>
  );
}
