import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Projects from "@/modules/projects";

const PAGE_TITLE = "Projects";
const PAGE_DESCRIPTION =
  "Several projects that I have worked on, both private and open source.";

export default async function ProjectsPage() {
  return (
    <Container data-aos="fade-up">
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <Projects />
    </Container>
  );
}
