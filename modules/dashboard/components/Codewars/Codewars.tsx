import Link from "next/link";
import { SiCodewars as CodewarsIcon } from "react-icons/si";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import { CodewarsData } from "@/common/types/codewars";
import { CODEWARS_URL } from "@/common/constant/codewars";

import Info from "./Info";
import Overview from "./Overview";

type CodewarsProps = {
  codewarsData: CodewarsData;
};

export default function Codewars({ codewarsData }: CodewarsProps) {
  return (
    <section className="space-y-2">
      <SectionHeading
        title="Codewars Statistic"
        icon={
          <div className="h-5 w-5 overflow-hidden rounded-full">
            <CodewarsIcon />
          </div>
        }
      />
      <SectionSubHeading>
        <p>My statistic score on codewars.</p>
        <Link
          href={CODEWARS_URL}
          target="_blank"
          className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-400"
        >
          Codewars
        </Link>
      </SectionSubHeading>

      {codewarsData && (
        <div>
          <Overview data={codewarsData} />
          <Info data={codewarsData} />
        </div>
      )}
    </section>
  );
}
