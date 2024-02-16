import clsx from "clsx";

type BreaklineProps = {
  className?: string;
  [propName: string]: string | undefined;
};

export default function Breakline({
  className = "",
  ...others
}: BreaklineProps) {
  return (
    <div
      className={clsx(
        "my-4 border-t border-neutral-300 dark:border-neutral-700",
        className,
      )}
      {...others}
    ></div>
  );
}
