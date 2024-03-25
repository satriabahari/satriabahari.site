import Breakline from "@/common/components/elements/Breakline";
import { CodewarsData } from "@/common/types/codewars";
import {
  MonkeytypeData,
  MonkeytypeLeaderboard,
} from "@/common/types/monkeytype";

import Contributions from "./Contributions";
import Codewars from "./Codewars";
import Monkeytype from "./Monkeytype";
import CodingActive from "./CodingActive";

type DashboardProps = {
  githubData: any;
  codewarsData: CodewarsData;
  monkeytypeDataProfile: MonkeytypeData;
  monkeytypeDataTime60Leaderboard: MonkeytypeLeaderboard;
  monkeytypeDataTime15Leaderboard: MonkeytypeLeaderboard;
};

export default function Dashboard({
  githubData,
  codewarsData,
  monkeytypeDataProfile,
  monkeytypeDataTime60Leaderboard,
  monkeytypeDataTime15Leaderboard,
}: DashboardProps) {
  return (
    <>
      <Contributions githubData={githubData} />
      <Breakline className="my-8" />
      <CodingActive />
      <Breakline className="my-8" />
      <Codewars codewarsData={codewarsData} />
      <Breakline className="my-8" />
      <Monkeytype
        monkeytypeDataProfile={monkeytypeDataProfile}
        monkeytypeDataTime60Leaderboard={monkeytypeDataTime60Leaderboard}
        monkeytypeDataTime15Leaderboard={monkeytypeDataTime15Leaderboard}
      />
    </>
  );
}
