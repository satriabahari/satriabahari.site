import Contributions from "./Contributions";
import Breakline from "@/common/components/elements/Breakline";
import Codewars from "./Codewars";
import { CodewarsData } from "@/common/types/codewars";
import { MonkeytypeData } from "@/common/types/monkeytype";
import Monkeytype from "./Monkeytype";

type DashboardProps = {
  githubData: any;
  codewarsData: CodewarsData;
  monkeytypeData: MonkeytypeData;
};

export default function Dashboard({
  githubData,
  codewarsData,
  monkeytypeData,
}: DashboardProps) {
  return (
    <>
      <Contributions githubData={githubData} />
      <Breakline className="my-8" />
      <Codewars codewarsData={codewarsData} />
      <Breakline className="my-8" />
      <Monkeytype monkeytypeData={monkeytypeData} />
    </>
  );
}
