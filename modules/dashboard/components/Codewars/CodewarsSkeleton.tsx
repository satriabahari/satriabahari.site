import Card from "@/common/components/elements/Card";
import SkeletonLoader from "@/common/components/elements/SkeletonLoader";
import Skeleton from "react-loading-skeleton";

const CodewarsSkeleton = () => {
  return (
    <SkeletonLoader>
      <div className="grid grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="p-4">
            <Skeleton className="h-4" />
            <Skeleton className="h-6" />
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {[...Array(2)].map((_, i) => (
          <Card key={i} className="p-4">
            <Skeleton className="h-4" />
            <Skeleton className="h-6" />
          </Card>
        ))}
      </div>
    </SkeletonLoader>
  );
};

export default CodewarsSkeleton;
