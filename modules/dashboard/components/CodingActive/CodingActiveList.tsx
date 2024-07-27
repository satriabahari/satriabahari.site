import { useTranslations } from "next-intl";

import Card from "@/common/components/elements/Card";

import Progress from "./Progress";

interface ItemProps {
  name: string;
  hours: number;
  minutes: number;
}

interface CodingActiveListProps {
  data?: {
    languages?: ItemProps[];
    categories?: ItemProps[];
  };
}

const CodingActiveList = ({ data }: CodingActiveListProps) => {
  const t = useTranslations("DashboardPage.wakatime");

  if (!data) {
    return null;
  }

  return (
    <Card className="flex flex-col gap-y-3 px-4 py-3">
      <p className="dark:text-neutral-400">{t("languages")}</p>

      <ul className="grid grid-cols-1 gap-x-12 sm:grid-cols-2">
        {data?.languages?.map((subItem) => (
          <li key={subItem?.name}>
            <Progress
              data={subItem}
              className={"bg-gradient-to-r from-cyan-600 to-green-500"}
            />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default CodingActiveList;
