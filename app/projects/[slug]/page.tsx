import axios from "axios";

import BackButton from "@/common/components/elements/BackButton";
import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import ProjectDetail from "@/modules/projects/components/ProjectDetail";

type ProjectDetailPageProps = {
  params: { slug: string };
};

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const response = await axios.get("http://localhost:3000/api/projects");
  const projects = response.data.data;

  const project = projects.find((item: any) => item.slug === params.slug);

  const PAGE_TITLE = project.title;
  const PAGE_DESCRIPTION = project.description;
  return (
    <Container data-aos="fade-up">
      <BackButton url="/projects" />
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <ProjectDetail {...project} />
    </Container>
  );
}
