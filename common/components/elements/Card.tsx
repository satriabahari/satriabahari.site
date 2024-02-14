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
      className={`rounded-xl bg-neutral-50 shadow-sm ${className}`}
      {...others}
    >
      {children}
    </div>
  );
}
