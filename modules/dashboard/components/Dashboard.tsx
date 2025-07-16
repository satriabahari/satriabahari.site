import Codewars from "./Codewars";
import Monkeytype from "./Monkeytype";
import CodingActive from "./CodingActive";
import Contributions from "./Contributions";

import Breakline from "@/common/components/elements/Breakline";
import { GITHUB_ACCOUNTS } from "@/common/constants/github";
import { MONKEYTYPE_ACCOUNT } from "@/common/constants/monkeytype";
import { CODEWARS_ACCOUNT } from "@/common/constants/codewars";
import Umami from "./Umami";

const Dashboard = () => {
  return (
    <>
      <Umami />
      <Breakline className="my-8" />
      <Contributions endpoint={GITHUB_ACCOUNTS.endpoint} />
      <Breakline className="my-8" />
      <CodingActive />
      <Breakline className="my-8" />
      <Codewars endpoint={CODEWARS_ACCOUNT.endpoint} />
      {/* <Breakline className="my-8" /> */}
      <Monkeytype />
    </>
  );
};

export default Dashboard;
