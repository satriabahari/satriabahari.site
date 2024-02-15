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
      className={`rounded-xl shadow-sm transition-all duration-300 ${className}`}
      {...others}
    >
      {children}
    </div>
  );
}
