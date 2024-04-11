import Codewars from "./Codewars";
import Monkeytype from "./Monkeytype";
import CodingActive from "./CodingActive";
import Contributions from "./Contributions";

import Breakline from "@/common/components/elements/Breakline";
import { GITHUB_ACCOUNTS } from "@/common/constant/github";
import { MONKEYTYPE_ACCOUNT } from "@/common/constant/monkeytype";
import { CODEWARS_ACCOUNT } from "@/common/constant/codewars";

export default function Dashboard() {
  return (
    <>
      <Contributions endpoint={GITHUB_ACCOUNTS.endpoint} />
      <Breakline className="my-8" />
      <CodingActive />
      <Breakline className="my-8" />
      <Codewars endpoint={CODEWARS_ACCOUNT.endpoint} />
      <Breakline className="my-8" />
      <Monkeytype/>
    </>
  );
}
