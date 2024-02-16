import { SKILLS } from "@/common/constant/skills";
import { ProjectItem } from "@/common/types/projects";
import Image from "next/image";
import React from "react";
import ProjectLink from "./ProjectLink";

export default function ProjectDetail({
  title,
  image,
  stacks,
  link_demo,
  link_github,
  content,
}: ProjectItem) {
  const stacksArray = JSON.parse(stacks);
  return (
    <div className="space-y-8 overflow-hidden">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mb-1 text-sm text-neutral-700 dark:text-neutral-300">
            Tech Stack :{" "}
          </span>
          <div className="flex flex-wrap items-center gap-3">
            {stacksArray.map((stack: string, index: number) => (
              <div key={index}>{SKILLS[stack]}</div>
            ))}
          </div>
        </div>
        <ProjectLink
          title={title}
          link_demo={link_demo || ""}
          link_github={link_github || ""}
        />
      </div>
      <Image src={image} alt={title} width={1000} height={400} />
    </div>
  );
}
