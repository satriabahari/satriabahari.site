"use client";

import useSWR from "swr";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";

import EmptyState from "@/common/components/elements/EmptyState";
import { AchievementItem } from "@/common/types/achievements";
import { fetcher } from "@/services/fetcher";

import AchievementCard from "./AchievementCard";
import AchievementSkeleton from "./AchievementSkeleton";
import FilterHeader from "./FilterHeader";

const Achievements = () => {
  const t = useTranslations("AchievementsPage");

  const params = useSearchParams();
  const [filter, setFilter] = useState({
    category: params.get("category") || "",
    search: params.get("search") || "",
  });
  const category = params.get("category");
  const search = params.get("search");

  let apiUrl = "/api/achievements";

  const queryParams = new URLSearchParams();
  if (category) queryParams.append("category", category);
  if (search) queryParams.append("search", search);

  if (queryParams.toString()) {
    apiUrl += `?${queryParams.toString()}`;
  }

  const { data, isLoading, error } = useSWR(apiUrl, fetcher);

  const filteredAchievements: AchievementItem[] = data
    ?.filter(
      (item: AchievementItem) =>
        item?.is_show && (!category || item?.category === category),
    )
    .sort((a: AchievementItem, b: AchievementItem) => b.id - a.id);

  return (
    <section className="space-y-4">
      <FilterHeader totalData={data?.length} />

      {isLoading && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <AchievementSkeleton key={i} />
          ))}
        </div>
      )}

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
              <AchievementCard key={index} {...item} />
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Achievements;
