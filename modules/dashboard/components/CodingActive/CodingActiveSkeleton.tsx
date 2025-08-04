import Skeleton from "react-loading-skeleton";

import SkeletonLoader from "@/common/components/elements/SkeletonLoader";
import SpotlightCard from "@/common/components/elements/SpotlightCard";

const CodingActiveSkeleton = () => {
  return (
    <SkeletonLoader>
      <div className="grid grid-cols-2 gap-4">
        {[...Array(6)].map((_, i) => (
          <SpotlightCard key={i} className="p-4">
            <Skeleton className="h-4" />
            <Skeleton className="h-6" />
          </SpotlightCard>
        ))}
      </div>

      <SpotlightCard className="!mt-4 p-4">
        <Skeleton className="h-4" />
        <div className="grid grid-cols-2 gap-4">
          <Skeleton className="h-6" count={3} />
          <Skeleton className="h-6" count={3} />
        </div>
      </SpotlightCard>
    </SkeletonLoader>
  );
};

export default CodingActiveSkeleton;
