"use client";

import Link from "next/link";
import { SiMonkeytype as MonkeytypeIcon } from "react-icons/si";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import { fetcher } from "@/services/fetcher";

import Overview from "./Overview";
import useSWR from "swr";
import Profile from "./Profile";
import Leaderboard from "./Leaderboard";
import { MONKEYTYPE_ACCOUNT } from "@/common/constant/monkeytype";

export default function Monkeytype() {
  const { data } = useSWR("/api/monkeytype", fetcher);

  return (
    <section className="space-y-2">
      <SectionHeading
        title="Monkeytype Statistic"
        icon={
          <div className="h-5 w-5 overflow-hidden rounded-full">
            <MonkeytypeIcon />
          </div>
        }
      />
      <SectionSubHeading>
        <p>My statistic score on Monkeytype.</p>
        <Link
          href={MONKEYTYPE_ACCOUNT.monkeytype_url}
          target="_blank"
          className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-400"
        >
          SatriaAxel
        </Link>
      </SectionSubHeading>

      {data && (
        <div className="flex flex-col gap-4">
          <Profile data={data} />
          <Leaderboard data={data} />
          <Overview data={data} />
        </div>
      )}
    </section>
  );
}
