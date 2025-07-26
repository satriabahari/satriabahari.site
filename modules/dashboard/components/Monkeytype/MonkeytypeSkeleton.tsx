import Card from "@/common/components/elements/Card";
import SkeletonLoader from "@/common/components/elements/SkeletonLoader";
import Skeleton from "react-loading-skeleton";

const MonkeytypeSkeleton = () => {
  return (
    <SkeletonLoader>
      <Card className="grid grid-cols-[1fr_2fr] gap-16 p-4">
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

        <div className="flex items-center justify-center gap-16">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-full">
              <Skeleton containerClassName="w-full" className="h-6" />
              <Skeleton containerClassName="w-full" />
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4">
        <div className="flex items-center justify-center gap-16">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-full">
              <Skeleton containerClassName="w-full" className="h-6" />
            </div>
          ))}
        </div>
      </Card>

      <div className="flex gap-4">
        {[...Array(2)].map((_, i) => (
          <Card key={i} className="flex gap-8 p-4">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} containerClassName="w-full" count={3} />
            ))}
          </Card>
        ))}
      </div>
    </SkeletonLoader>
  );
};

export default MonkeytypeSkeleton;
