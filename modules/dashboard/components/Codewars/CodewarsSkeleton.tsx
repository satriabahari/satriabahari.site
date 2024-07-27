const CodewarsSkeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="h-20 w-full animate-pulse rounded-md bg-neutral-300 dark:bg-neutral-800" />
        <div className="h-20 w-full animate-pulse rounded-md bg-neutral-300 dark:bg-neutral-800" />
        <div className="h-20 w-full animate-pulse rounded-md bg-neutral-300 dark:bg-neutral-800" />
        <div className="h-20 w-full animate-pulse rounded-md bg-neutral-300 dark:bg-neutral-800" />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="h-20 w-full animate-pulse rounded-md bg-neutral-300 dark:bg-neutral-800" />
        <div className="h-20 w-full animate-pulse rounded-md bg-neutral-300 dark:bg-neutral-800 " />
      </div>
    </div>
  );
};

export default CodewarsSkeleton;
