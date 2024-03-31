"use client";

import EmptyState from "@/common/components/elements/EmptyState";

import ProjectCard from "./ProjectCard";
import useSWR from "swr";
import { fetcher } from "@/services/fetcher";
import { ProjectItem } from "@/common/types/projects";

export default function Projects() {
  const { data } = useSWR("/api/projects", fetcher);

  const filteredProjects: ProjectItem[] = data?.filter(
    (item: ProjectItem) => item?.is_show,
  );

  if (filteredProjects?.length === 0) {
    return <EmptyState message="No Data" />;
  }

  return (
    <section className="grid grid-cols-1 gap-12 lg:grid-cols-2">
      {filteredProjects?.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
}
