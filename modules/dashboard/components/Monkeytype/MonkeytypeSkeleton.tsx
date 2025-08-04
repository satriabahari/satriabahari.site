import Skeleton from "react-loading-skeleton";

import SkeletonLoader from "@/common/components/elements/SkeletonLoader";
import SpotlightCard from "@/common/components/elements/SpotlightCard";

const MonkeytypeSkeleton = () => {
  return (
    <SkeletonLoader>
      <SpotlightCard className="grid grid-cols-1 gap-4 p-4 md:grid-cols-[1fr_2fr] md:gap-16">
        <div className="flex flex-col gap-2">
          <div className="flex gap-4">
            <Skeleton className="h-full" circle containerClassName="w-1/2" />
            <div className="w-full">
              <Skeleton containerClassName="w-full" className="h-6" />
              <Skeleton containerClassName="w-full" />
              <Skeleton containerClassName="w-full" />
            </div>
          </div>
          <div className="flex w-full gap-2">
            <Skeleton containerClassName="w-full" />
            <Skeleton containerClassName="w-full" />
            <Skeleton containerClassName="w-full" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-16">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-full">
              <Skeleton containerClassName="w-full" className="h-6" />
              <Skeleton containerClassName="w-full" />
            </div>
          ))}
        </div>
      </SpotlightCard>

      <SpotlightCard className="!mt-4 p-4">
        <div className="flex items-center justify-center gap-16">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-full">
              <Skeleton containerClassName="w-full" className="h-6" />
            </div>
          ))}
        </div>
      </SpotlightCard>

      <div className="!mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {[...Array(2)].map((_, i) => (
          <SpotlightCard key={i} className="flex gap-8 p-4">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} containerClassName="w-full" count={3} />
            ))}
          </SpotlightCard>
        ))}
      </div>
    </SkeletonLoader>
  );
};

export default MonkeytypeSkeleton;
