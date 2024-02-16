type SectionSubHeadingProps = {
  children: React.ReactNode;
};

export default function SectionSubHeading({
  children,
}: SectionSubHeadingProps) {
  return (
    <div className=" text-neutral-600 dark:text-neutral-400">{children}</div>
  );
}
