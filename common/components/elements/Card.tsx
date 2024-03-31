type CardProps = {
  children: React.ReactNode;
  className?: string;
  [propName: string]: unknown;
};

export default function Card({
  children,
  className = "",
  ...others
}: CardProps) {
  return (
    <div
      className={`rounded-xl bg-neutral-50 shadow-sm transition-all duration-300 dark:bg-[#1E1E1E] ${className}`}
      {...others}
    >
      {children}
    </div>
  );
}
