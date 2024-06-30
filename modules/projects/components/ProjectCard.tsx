import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowSmRight as ViewIcon } from "react-icons/hi";

import Card from "@/common/components/elements/Card";
import { STACKS } from "@/common/constant/stacks";
import { ProjectItem } from "@/common/types/projects";

export default function ProjectCard({
  title,
  slug,
  description,
  image,
  stacks,
  is_featured,
}: ProjectItem) {
  const stacksArray = JSON.parse(stacks);
  const trimmedContent =
    description.slice(0, 70) + (description.length > 70 ? "..." : "");

  return (
    <Link href={`/projects/${slug}`}>
      <Card className="group cursor-pointer">
        <div className="relative">
          <Image
            src={image}
            alt={title}
            width={450}
            height={200}
            className="h-full w-full rounded-t-xl object-cover md:w-auto"
          />
          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center gap-1 rounded-t-xl bg-black text-sm font-medium text-neutral-50 opacity-0 transition-opacity duration-300 group-hover:opacity-80">
            <span>View Project</span>
            <ViewIcon size={20} />
          </div>
        </div>
        <div className="space-y-2 p-5">
          <h3 className="cursor-pointer text-lg text-neutral-700 transition-all duration-300 group-hover:text-teal-500 dark:text-neutral-300 dark:group-hover:text-teal-400">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-400">
            {trimmedContent}
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {stacksArray.map((stack: string, index: number) => (
              <div key={index}>{STACKS[stack]}</div>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
}
