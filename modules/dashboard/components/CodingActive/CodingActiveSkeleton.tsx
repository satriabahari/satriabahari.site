import Card from "@/common/components/elements/Card";
import SkeletonLoader from "@/common/components/elements/SkeletonLoader";
import Skeleton from "react-loading-skeleton";

const CodingActiveSkeleton = () => {
  return (
    <SkeletonLoader>
      <div className="grid grid-cols-2 gap-4">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="p-4">
            <Skeleton className="h-4" />
            <Skeleton className="h-6" />
          </Card>
        ))}
      </div>

      <Card className="p-4">
        <Skeleton className="h-4" />
        <div className="grid grid-cols-2 gap-4">
          <Skeleton className="h-6" count={3} />
          <Skeleton className="h-6" count={3} />
        </div>
      </Card>
    </SkeletonLoader>
  );
};

export default CodingActiveSkeleton;
