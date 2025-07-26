import Card from "@/common/components/elements/Card";
import SkeletonLoader from "@/common/components/elements/SkeletonLoader";
import Skeleton from "react-loading-skeleton";

const AchievementSkeleton = () => {
  return (
    <SkeletonLoader>
      <Card>
        <Skeleton className="h-44"/>
        <div className="flex flex-col gap-2 p-4">
          <Skeleton className="h-6" />
          <Skeleton className="h-4" />
          <Skeleton className="h-4" />
          <Skeleton className="h-4" />
        </div>
      </Card>
    </SkeletonLoader>
  );
};

export default AchievementSkeleton;
