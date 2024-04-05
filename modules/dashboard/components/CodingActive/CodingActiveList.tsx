import Card from "@/common/components/elements/Card";
import Progress from "./Progress";

type ItemProps = {
  name: string;
  hours: number;
  minutes: number;
};

type CodingActiveListProps = {
  data?: {
    languages?: ItemProps[];
    categories?: ItemProps[];
  };
};

export default function CodingActiveList({ data }: CodingActiveListProps) {
  if (!data) {
    return null;
  }

  return (
    <Card className="flex flex-col gap-y-3 px-4 py-3">
      <p className="dark:text-neutral-400">Languages</p>

      <ul className="grid grid-cols-1 gap-x-12 sm:grid-cols-2">
        {data?.languages?.map((subItem) => (
          <li key={subItem?.name}>
            <Progress
              data={subItem}
              className={"bg-gradient-to-r from-sky-500 to-blue-600"}
            />
          </li>
        ))}
      </ul>
    </Card>
  );
}
