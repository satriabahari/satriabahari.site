"use client";

import useSWR from "swr";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";

import EmptyState from "@/common/components/elements/EmptyState";
import { AchievementItem } from "@/common/types/achievements";
import { fetcher } from "@/services/fetcher";

import CertificateCard from "./AchievementCard";
import AchievementSkeleton from "./AchievementSkeleton";
import Header from "./Header";

const Achievements = () => {
  const t = useTranslations("AchievementsPage");

  const params = useSearchParams();
  const category = params.get("category");
  const organization = params.get("organization");
  const search = params.get("search");

  const apiUrl = search
    ? `/api/achievements?search=${encodeURIComponent(search)}`
    : "/api/achievements";

  const { data, isLoading, error } = useSWR(apiUrl, fetcher);

  const filteredAchievements: AchievementItem[] = data
    ?.filter(
      (item: AchievementItem) => item?.is_show,
      // && (!category || item?.category === category)
    )
    .sort((a: AchievementItem, b: AchievementItem) => b.id - a.id);

  return (
    <section className="space-y-4">
      <Header totalData={data?.length} />

      {isLoading && <AchievementSkeleton />}

      {error && <EmptyState message={t("error")} />}

      {filteredAchievements?.length === 0 && (
        <EmptyState message={t("no_data")} />
      )}

      {!isLoading && !error && filteredAchievements.length !== 0 && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {filteredAchievements?.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <CertificateCard key={index} {...item} />
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Achievements;
