import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";

import { BsGithub as GithubIcon } from "react-icons/bs";
import Overview from "./Overview";
import Calendar from "./Calendar";
import Link from "next/link";
import { GITHUB_ACCOUNTS } from "@/common/constant/github";

type ContributionsProps = {
  githubData: any;
};

export default function Contributions({ githubData }: ContributionsProps) {
  return (
    <section className="space-y-2">
      <SectionHeading title="Contributions" icon={<GithubIcon />} />
      <SectionSubHeading>
        <p>My contributions from last year on github.</p>
        <Link
          href={`https://github.com/${GITHUB_ACCOUNTS.username}`}
          target="_blank"
          className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-400"
        >
          @{GITHUB_ACCOUNTS.username}
        </Link>
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
