import Link from "next/link";
import { SiMonkeytype as MonkeytypeIcon } from "react-icons/si";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import { MONKEYTYPE_URL } from "@/common/constant/monkeytype";
import {
  MonkeytypeData,
  MonkeytypeLeaderboard,
} from "@/common/types/monkeytype";

import Overview from "./Overview";

type MonkeytypeProps = {
  monkeytypeDataProfile: MonkeytypeData;
  monkeytypeDataTime60Leaderboard: MonkeytypeLeaderboard;
  monkeytypeDataTime15Leaderboard: MonkeytypeLeaderboard;
};

export default function Monkeytype({
  monkeytypeDataProfile,
  monkeytypeDataTime60Leaderboard,
  monkeytypeDataTime15Leaderboard,
}: MonkeytypeProps) {
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
          href={MONKEYTYPE_URL}
          target="_blank"
          className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-400"
        >
          SatriaAxel
        </Link>
      </SectionSubHeading>

      {monkeytypeDataProfile && (
        <>
          <Overview
            dataProfile={monkeytypeDataProfile}
            dataTime60Leaderboard={monkeytypeDataTime60Leaderboard}
            dataTime15Leaderboard={monkeytypeDataTime15Leaderboard}
          />
        </>
      )}
    </section>
  );
}
