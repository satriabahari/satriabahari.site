import Card from "@/common/components/elements/Card";
import { PersonalBestsTime } from "@/common/types/monkeytype";

type OverviewItemProps = {
  data?: {
    [time: string]: PersonalBestsTime[];
  };
  type?: string;
};

export default function OverviewItem({ data, type }: OverviewItemProps) {
  if (data && typeof data === "object") {
    const datas = Object.keys(data).map((time) => {
      const items = data[time];
      const maxWPMItem = items.reduce((prev, current) =>
        prev.wpm > current.wpm ? prev : current,
      );
      return { time, maxWPMItem };
    });

    // const maxWpm = Object.values(personalBestData)[index].reduce(
    //   (prevValue, currentValue) => {
    //     return prevValue.wpm > currentValue.wpm ? prevValue : currentValue;
    //   },
    // );

    return (
      <Card className="grid grid-cols-4 gap-4 px-2 py-4">
        {datas.map((item) => (
          <div key={item.time} className="flex flex-col items-center gap-y-1">
            <span className="flex text-xs dark:text-neutral-600">{`${item.time} ${type}`}</span>
            <span className="text-3xl dark:text-neutral-50">
              {Math.round(item.maxWPMItem.wpm)}
            </span>
            <span className="text-lg dark:text-neutral-400">{`${Math.floor(item.maxWPMItem.acc)}%`}</span>
          </div>
        ))}
      </Card>
    );
  }
}
