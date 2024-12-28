import { ButtonHTMLAttributes, ReactNode } from "react";

import cn from "@/common/libs/clsxm";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  isLoading?: boolean;
}

const Button = ({
  children,
  isLoading,
  className = "",
  icon,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={cn(
        `flex items-center gap-2 rounded-lg bg-neutral-500 px-4 py-2 text-neutral-50 transition-all duration-300 hover:bg-neutral-600 dark:bg-neutral-600 dark:hover:bg-neutral-700`,
        className,
      )}
      {...rest}
    >
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>
          {icon && <>{icon}</>}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;
