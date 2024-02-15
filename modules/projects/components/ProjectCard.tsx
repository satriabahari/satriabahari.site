import Card from "@/common/components/elements/Card";
import { SKILLS } from "@/common/constant/skills";
import { ProjectItem } from "@/common/types/projects";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  title,
  slug,
  description,
  image,
  stacks,
  is_featured,
}: ProjectItem) {
  return (
    <Link href={`/projects/${slug}`}>
      <Card>
        {/* <Image src={image} alt={title} width={400} height={200} /> */}
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          {/* <div>
            {stacks.map((stack, index) => (
              <div key={index}>{SKILLS[stack]}</div>
            ))}
          </div> */}
        </div>
      </Card>
    </Link>
  );
}
