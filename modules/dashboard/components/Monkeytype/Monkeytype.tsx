"use client";

import Link from "next/link";
import useSWR from "swr";
import { SiMonkeytype as MonkeytypeIcon } from "react-icons/si";
import { useTranslations } from "next-intl";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import EmptyState from "@/common/components/elements/EmptyState";
import { fetcher } from "@/services/fetcher";
import { MONKEYTYPE_ACCOUNT } from "@/common/constant/monkeytype";

import MonkeytypeSkeleton from "./MonkeytypeSkeleton";
import Overview from "./Overview";
import Profile from "./Profile";
import Leaderboard from "./Leaderboard";

const Monkeytype = () => {
  const { data, isLoading, error } = useSWR("/api/monkeytype", fetcher);

  const t = useTranslations("DashboardPage");

  return (
    <section className="space-y-2">
      <SectionHeading
        title={t("monkeytype.title")}
        icon={
          <div className="h-5 w-5 overflow-hidden rounded-full">
            <MonkeytypeIcon />
          </div>
        }
      />
      <SectionSubHeading>
        <p>{t("monkeytype.sub_title")}</p>
        <Link
          href={MONKEYTYPE_ACCOUNT.monkeytype_url}
          target="_blank"
          className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-400"
        >
          SatriaAxel
        </Link>
      </SectionSubHeading>

      {error ? (
        <EmptyState message={t("error")} />
      ) : isLoading ? (
        <MonkeytypeSkeleton />
      ) : (
        <div className="flex flex-col gap-4">
          <Profile data={data} />
          <Leaderboard data={data} />
          <Overview data={data} />
        </div>
      )}
    </section>
  );
};

export default Monkeytype;
