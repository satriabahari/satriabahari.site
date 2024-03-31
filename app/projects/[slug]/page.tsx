import BackButton from "@/common/components/elements/BackButton";
import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import ProjectDetail from "@/modules/projects/components/ProjectDetail";
import prisma from "@/common/libs/prisma";

type ProjectDetailPageProps = {
  params: { slug: string };
};

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const response = await prisma.projects.findUnique({
    where: {
      slug: String(params?.slug),
    },
  });

  const data = JSON.parse(JSON.stringify(response));

  const PAGE_TITLE = data?.title;
  const PAGE_DESCRIPTION = data?.description;
  return (
    <Container data-aos="fade-up">
      <BackButton url="/projects" />
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <ProjectDetail {...data} />
    </Container>
  );
}
