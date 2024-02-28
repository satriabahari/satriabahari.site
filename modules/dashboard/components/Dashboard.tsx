import { GITHUB_ACCOUNTS } from "@/common/constant/github";
import Contributions from "./Contributions";
import Breakline from "@/common/components/elements/Breakline";
import Codewars from "./Codewars";
import { CodewarsData } from "@/common/types/codewars";

type DashboardProps = {
  githubData: any;
  codewarsData: CodewarsData;
};

export default function Dashboard({
  githubData,
  codewarsData,
}: DashboardProps) {
  return (
    <>
      <Contributions githubData={githubData} />
      <Breakline />
      <Codewars codewarsData={codewarsData} />
    </>
  );
}
