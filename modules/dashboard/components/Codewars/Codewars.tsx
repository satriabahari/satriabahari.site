"use client";

import Link from "next/link";
import { SiCodewars as CodewarsIcon } from "react-icons/si";
import useSWR from "swr";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import { fetcher } from "@/services/fetcher";

import Overview from "./Overview";
import { CODEWARS_ACCOUNT } from "@/common/constant/codewars";

type CodewarsProps = {
  endpoint: string;
};

export default function Codewars({ endpoint }: CodewarsProps) {
  const { data } = useSWR(endpoint, fetcher);
  const { codewars_url } = CODEWARS_ACCOUNT;

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
          href={codewars_url}
          target="_blank"
          className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-400"
        >
          Codewars
        </Link>
      </SectionSubHeading>

      {data && <Overview data={data} />}
    </section>
  );
}
