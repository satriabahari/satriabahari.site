import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";

import { BsGithub as GithubIcon } from "react-icons/bs";
import Overview from "./Overview";
import Calendar from "./Calendar";

type ContributionsProps = {
  githubData: any;
};
export default function Contributions({ githubData }: ContributionsProps) {
  return (
    <section>
      <SectionHeading title="Contributions" icon={<GithubIcon />} />
      <SectionSubHeading>
        My contributions from last year on github.
      </SectionSubHeading>

      {githubData ? (
        <div className="space-y-3">
          <Overview data={githubData} />
          <Calendar data={githubData} />
        </div>
      ) : null}
    </section>
  );
}
