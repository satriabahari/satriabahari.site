"use client";

import useSWR from "swr";
import { motion } from "framer-motion";

import ProjectCard from "./ProjectCard";

import EmptyState from "@/common/components/elements/EmptyState";
import { fetcher } from "@/services/fetcher";
import { ProjectItem } from "@/common/types/projects";
import { useTranslations } from "next-intl";
import ProjectSkeleton from "./ProjectSkeleton";

export default function Projects() {
  const { data, isLoading, error } = useSWR("/api/projects", fetcher);
  const t = useTranslations("ProjectsPage");

  const filteredProjects: ProjectItem[] = data
    ?.filter((item: ProjectItem) => item?.is_show)
    .sort((a: ProjectItem, b: ProjectItem) => a.id - b.id);

  if (filteredProjects?.length === 0) {
    return <EmptyState message={t("no_data")} />;
  }

  if (error) {
    return <EmptyState message={t("error")} />;
  }

  if (isLoading) {
    return <ProjectSkeleton/>;
  }

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {filteredProjects?.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </section>
  );
}
