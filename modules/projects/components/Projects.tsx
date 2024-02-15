import { ProjectItemProps } from "@/common/types/projects";

import ProjectCard from "./ProjectCard";

export default function Projects({ projects }: ProjectItemProps) {
  return (
    <section className="grid grid-cols-2 gap-12">
      {projects?.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
}
