import Breakline from "@/common/components/elements/Breakline";

import Introduction from "./Introduction";
import SkillList from "./SkillList";

export default function Home() {
  return (
    <>
      <Introduction />
      <Breakline className="my-8" />
      <SkillList />
    </>
  );
}
