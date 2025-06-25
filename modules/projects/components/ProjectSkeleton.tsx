import Card from "@/common/components/elements/Card";
import SkeletonLoader from "@/common/components/elements/SkeletonLoader";
import Skeleton from "react-loading-skeleton";

const ProjectSkeleton = () => {
  return (
    <SkeletonLoader>
      <Card>
        <Skeleton className="h-44 w-full rounded-xl" />
        <div className="flex flex-col gap-2 p-4">
          <Skeleton className="h-6" />
          <div className="flex flex-col">
            {[...Array(2)].map((_, i) => (
              <Skeleton key={i} className="h-4" />
            ))}
          </div>
          <div className="flex w-1/2 gap-2">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-8" containerClassName="w-1/4" />
            ))}
          </div>
        </div>
      </Card>
    </SkeletonLoader>
  );
};

export default ProjectSkeleton;
