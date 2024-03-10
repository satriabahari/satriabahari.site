import Breakline from "@/common/components/elements/Breakline";

import Story from "./Story";
import CareerList from "./CareerList";
import EducationList from "./EducationList";
import SkillList from "./SkillList";

export default function About() {
  return (
    <>
      <Story />
      <Breakline className="my-8" />
      <SkillList />
      <Breakline className="my-8" />
      <CareerList />
      <Breakline className="my-8" />
      <EducationList />
    </>
  );
}
