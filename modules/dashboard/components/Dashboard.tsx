import { GITHUB_ACCOUNTS } from "@/common/constant/github";
import Contributions from "./Contributions";
import Breakline from "@/common/components/elements/Breakline";

type DashboardProps = {
  githubData: any;
};

export default function Dashboard({ githubData }: DashboardProps) {
  return (
    <>
      <Contributions githubData={githubData} />
      <Breakline />
    </>
  );
}
