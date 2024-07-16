import { Metadata } from "next";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Projects from "@/modules/projects";
import { METADATA } from "@/common/constant/metadata";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: `Projects ${METADATA.exTitle}`,
  description: "Software Engineer portfolio ideas",
  keywords: "portfolio frontend developer",
  alternates: {
    canonical: `${process.env.DOMAIN}/projects`,
  },
};

export default function ProjectsPage() {
  const t = useTranslations("ProjectsPage");
  return (
    <Container data-aos="fade-up">
      <PageHeading title={t("title")} description={t("description")} />
      <Projects />
    </Container>
  );
}
