import { Metadata } from "next";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Projects from "@/modules/projects";
import { METADATA } from "@/common/constant/metadata";

export const metadata: Metadata = {
  title: `Projects ${METADATA.exTitle}`,
  description: "Software Engineer portfolio ideas",
  keywords: "portfolio frontend developer",
  alternates: {
    canonical: `${process.env.DOMAIN}/projects`,
  },
};

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
