import { ProjectItemProps } from "@/common/types/projects";

import ProjectCard from "./ProjectCard";

export default function Projects({ projects }: ProjectItemProps) {
  return (
    <section>
      {projects?.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
}
