import Card from "@/common/components/elements/Card";
import SkeletonLoader from "@/common/components/elements/SkeletonLoader";
import Skeleton from "react-loading-skeleton";

const ContributionsSkeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      <SkeletonLoader>
        <div className="grid grid-cols-5 gap-4">
          {[...Array(5)].map((_, i) => (
            <Card key={i} className="p-4">
              <Skeleton className="h-4" />
              <Skeleton className="h-6" />
            </Card>
          ))}
        </div>

        <Card className="flex flex-col p-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-1">
              {[...Array(35)].map((_, i) => (
                <div key={i}>
                  <Skeleton className="h-4 w-2" containerClassName="w-full" />
                </div>
              ))}
            </div>
          ))}
        </Card>
      </SkeletonLoader>
    </div>
  );
};

export default ContributionsSkeleton;
