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

  return (
    <section className="space-y-2">
      <SectionHeading
        title="Weekly Statistics"
        icon={<WakatimeIcon className="mr-1" />}
      />
      <SectionSubHeading>
        <div className="dark:text-neutral-400 md:flex-row md:items-center">
          <span>My </span>
          <Link
            href="https://wakatime.com/@aulianza"
            className="hover:text-neutral-900 hover:underline dark:hover:text-neutral-100"
          >
            WakaTime
          </Link>
          <span> last 7 days stats.</span>
        </div>
        <div className="text-sm text-neutral-600 dark:text-neutral-500">
          Last update: {renderLastUpdate()}
        </div>
      </SectionSubHeading>

      <Overview data={data} />
      <CodingActiveList data={data} />
    </section>
  );
};

export default CodingActive;
