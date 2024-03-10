import { ProjectItemProps } from "@/common/types/projects";
import EmptyState from "@/common/components/elements/EmptyState";

import ProjectCard from "./ProjectCard";

export default function Projects({ projects }: ProjectItemProps) {
  const filteredProjects = projects.filter((project) => project?.is_show);

  if (filteredProjects.length === 0) {
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
