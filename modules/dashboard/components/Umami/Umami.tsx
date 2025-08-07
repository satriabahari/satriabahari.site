"use client";

import useSWR from "swr";
import { SiUmami as UmamiIcon } from "react-icons/si";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";

import UmamiSkeleton from "./UmamiSkeleton";
import TrafficTrendsChart from "./TrafficTrendsChart";
import Overview from "./Overview";
import ComboBoxFilter from "./ComboBoxFilter";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import EmptyState from "@/common/components/elements/EmptyState";
import { fetcher } from "@/services/fetcher";
import { UMAMI_ACCOUNT } from "@/common/constants/umami";

const Umami = () => {
  const searchParams = useSearchParams();
  const domain = searchParams.get("domain");

  const key = domain ? `/api/umami?domain=${domain}` : `/api/umami`;

  const { data, isLoading, error } = useSWR(key, fetcher);

  const { is_active } = UMAMI_ACCOUNT;

  const t = useTranslations("DashboardPage");

  if (!is_active) return null;

  return (
    <section className="space-y-2">
      <SectionHeading title={t("umami.title")} icon={<UmamiIcon />} />
      <SectionSubHeading>
        <div className="flex w-full flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>{t("umami.sub_title")} </p>

          <ComboBoxFilter />
        </div>
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
