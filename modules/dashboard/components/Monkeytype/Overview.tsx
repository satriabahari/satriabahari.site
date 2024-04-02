import OverviewItem from "./OverviewItem";

type OverviewProps = {
  data: any;
};

export default function Overview({ data }: OverviewProps) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <OverviewItem data={data.personalBests.time} type="time" />
      <OverviewItem data={data.personalBests.words} type="words" />
    </div>
  );
}
