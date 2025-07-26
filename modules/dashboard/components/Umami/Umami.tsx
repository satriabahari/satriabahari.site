"use client";

import Link from "next/link";
import useSWR from "swr";
import { SiUmami as UmamiIcon } from "react-icons/si";
import { useTranslations } from "next-intl";

import Overview from "./Overview";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import EmptyState from "@/common/components/elements/EmptyState";
import { fetcher } from "@/services/fetcher";
import UmamiSkeleton from "./UmamiSkeleton";
import TrafficTrendsChart from "./TrafficTrendsChart";
import { UMAMI_ACCOUNT } from "@/common/constants/umami";
import Button from "@/common/components/elements/Button";

const Umami = () => {
  const { data, isLoading, error } = useSWR("/api/umami", fetcher);

  const { umami_url, is_active } = UMAMI_ACCOUNT;

  const t = useTranslations("DashboardPage");

  if (!is_active) return null;

  return (
    <section className="space-y-2">
      <SectionHeading title="Umami" icon={<UmamiIcon />} />
      <SectionSubHeading>
        <p>
          Monitor real-time traffic and engagement from my portfolio website.
        </p>
        <Link
          href={umami_url}
          target="_blank"
          className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-400"
        >
          View Detail
        </Link>
      </SectionSubHeading>
      {error ? (
        <EmptyState message={t("error")} />
      ) : isLoading ? (
        <UmamiSkeleton />
      ) : (
        <div className="space-y-3">
          <Overview data={data} />
          <TrafficTrendsChart data={data} />
        </div>
      )}
    </section>
  );
};

export default Umami;
