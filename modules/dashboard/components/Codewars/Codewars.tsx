"use client";

import Link from "next/link";
import { SiCodewars as CodewarsIcon } from "react-icons/si";
import useSWR from "swr";
import { useTranslations } from "next-intl";

import CodewarsSkeleton from "./CodewarsSkeleton";
import Overview from "./Overview";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import { fetcher } from "@/services/fetcher";
import { CODEWARS_ACCOUNT } from "@/common/constant/codewars";
import EmptyState from "@/common/components/elements/EmptyState";

type CodewarsProps = {
  endpoint: string;
};

export default function Codewars({ endpoint }: CodewarsProps) {
  const { data, isLoading, error } = useSWR(endpoint, fetcher);
  const { codewars_url } = CODEWARS_ACCOUNT;

  const t = useTranslations("DashboardPage");

  return (
    <section className="space-y-2">
      <SectionHeading
        title={t("codewars.title")}
        icon={
          <div className="h-5 w-5 overflow-hidden rounded-full">
            <CodewarsIcon />
          </div>
        }
      />
      <SectionSubHeading>
        <p>{t("codewars.sub_title")}</p>
        <Link
          href={codewars_url}
          target="_blank"
          className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-400"
        >
          Codewars
        </Link>
      </SectionSubHeading>

      {error ? (
        <EmptyState message={t("error")} />
      ) : isLoading ? (
        <CodewarsSkeleton />
      ) : (
        <Overview data={data} />
      )}
    </section>
  );
}
