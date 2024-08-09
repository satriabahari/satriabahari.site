const ChatItemSkeleton = () => {
  return (
    <div className="flex h-80 flex-col gap-4 p-4">
      <div className="mb-4 flex  gap-4">
        <div className="h-12 w-12 animate-pulse rounded-full bg-neutral-300 dark:bg-neutral-800" />
        <div className="w-full space-y-2">
          <div className="flex gap-2">
            <div className="h-3 w-24 animate-pulse rounded-sm bg-neutral-300 dark:bg-neutral-800"></div>
            <div className="h-3 w-24 animate-pulse rounded-sm bg-neutral-300 dark:bg-neutral-800"></div>
          </div>
          <div className="relative">
            <div className="h-16 w-full animate-pulse rounded-md bg-neutral-300 dark:bg-neutral-800" />
          </div>
        </div>
      </div>
      <div className="mb-4 flex h-80 gap-4">
        <div className="h-12 w-12 animate-pulse rounded-full bg-neutral-300 dark:bg-neutral-800" />
        <div className="w-full space-y-2">
          <div className="flex gap-2">
            <div className="h-3 w-24 animate-pulse rounded-sm bg-neutral-300 dark:bg-neutral-800"></div>
            <div className="h-3 w-24 animate-pulse rounded-sm bg-neutral-300 dark:bg-neutral-800"></div>
          </div>
          <div className="relative">
            <div className="h-16 w-full animate-pulse rounded-md bg-neutral-300 dark:bg-neutral-800" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatItemSkeleton;
