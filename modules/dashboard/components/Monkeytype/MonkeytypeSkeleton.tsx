const MonkeytypeSkeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="h-52 w-full animate-pulse rounded-md bg-neutral-300 dark:bg-neutral-800 md:h-40" />
      <div className="h-32 w-full animate-pulse rounded-md bg-neutral-300 dark:bg-neutral-800 md:h-16" />
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="h-32 w-full animate-pulse rounded-md bg-neutral-300 dark:bg-neutral-800 md:h-32" />
        <div className="h-32 w-full animate-pulse rounded-md bg-neutral-300 dark:bg-neutral-800 md:h-32" />
      </div>
    </div>
  );
};

export default MonkeytypeSkeleton;
