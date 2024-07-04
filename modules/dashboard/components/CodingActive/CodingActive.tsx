"use client";

import { useEffect, useState } from "react";
import useSWR from "swr";
import Link from "next/link";
import { SiWakatime as WakatimeIcon } from "react-icons/si";
import { formatDistanceToNowStrict } from "date-fns";
import { utcToZonedTime, zonedTimeToUtc } from "date-fns-tz";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import { fetcher } from "@/services/fetcher";

import CodingActiveList from "./CodingActiveList";
import Overview from "./Overview";
import { useTranslations } from "next-intl";

const CodingActive = () => {
  const { data } = useSWR("/api/read-stats", fetcher);

  const [formattedLastUpdate, setFormattedLastUpdate] = useState<string | null>(
    null,
  );

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

  const t = useTranslations("DashboardPage.wakatime");

  return (
    <section className="space-y-2">
      <SectionHeading
        title={t("title")}
        icon={<WakatimeIcon className="mr-1" />}
      />
      <SectionSubHeading>
        {t("sub_title")}
        <Link
          href="https://wakatime.com/@satriabahari"
          target="_blank"
          className="text-sm text-neutral-600 hover:text-neutral-800 dark:text-neutral-500 dark:hover:text-neutral-400"
        >
          {t("last_update")}: {renderLastUpdate()}
        </Link>
      </SectionSubHeading>

      <Overview data={data} />
      <CodingActiveList data={data} />
    </section>
  );
};

export default CodingActive;
