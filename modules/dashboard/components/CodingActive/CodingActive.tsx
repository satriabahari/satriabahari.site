"use client";

import Link from "next/link";
import useSWR from "swr";
import { useEffect, useState } from "react";
import { SiWakatime as WakatimeIcon } from "react-icons/si";
import { formatDistanceToNowStrict } from "date-fns";
import { utcToZonedTime, zonedTimeToUtc } from "date-fns-tz";
import { useTranslations } from "next-intl";

import CodingActiveList from "./CodingActiveList";
import Overview from "./Overview";
import CodingActiveSkeleton from "./CodingActiveSkeleton";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import EmptyState from "@/common/components/elements/EmptyState";
import { fetcher } from "@/services/fetcher";
import { WAKATIME_ACCOUNT } from "@/common/constants/wakatime";

const CodingActive = () => {
  const { data, isLoading, error } = useSWR("/api/read-stats", fetcher);

  const [formattedLastUpdate, setFormattedLastUpdate] = useState<string | null>(
    null,
  );

  const { is_active } = WAKATIME_ACCOUNT;

  const t = useTranslations("DashboardPage");

  useEffect(() => {
    const formatLastUpdate = (): void => {
      const lastUpdateDate = data?.last_update;
      if (lastUpdateDate) {
        const zoneDate = utcToZonedTime(
          zonedTimeToUtc(lastUpdateDate, "Asia/Jakarta"),
          "Asia/Jakarta",
        );
        const distance = formatDistanceToNowStrict(zoneDate, {
          addSuffix: true,
        });
        setFormattedLastUpdate(distance);
      }
    };

    formatLastUpdate();
  }, [data]);

  const renderLastUpdate = () => {
    if (formattedLastUpdate) {
      return <span>{formattedLastUpdate}</span>;
    }
    return null;
  };

  if (!is_active) return null;

  return (
    <section className="space-y-2">
      <SectionHeading
        title={t("wakatime.title")}
        icon={<WakatimeIcon className="mr-1" />}
      />
      <SectionSubHeading>
        {t("wakatime.sub_title")}
        <Link
          href="https://wakatime.com/@satriabahari"
          target="_blank"
          className="text-sm text-neutral-600 hover:text-neutral-800 dark:text-neutral-500 dark:hover:text-neutral-400"
        >
          {t("wakatime.last_update")}: {renderLastUpdate()}
        </Link>
      </SectionSubHeading>

      {error ? (
        <EmptyState message={t("error")} />
      ) : isLoading ? (
        <CodingActiveSkeleton />
      ) : (
        <>
          <Overview data={data} />
          <CodingActiveList data={data} />
        </>
      )}
    </section>
  );
};

export default CodingActive;
