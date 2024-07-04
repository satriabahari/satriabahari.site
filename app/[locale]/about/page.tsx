import { Metadata } from "next";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import About from "@/modules/about";
import { METADATA } from "@/common/constant/metadata";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: `About ${METADATA.exTitle}`,
  description: `A short story of ${METADATA.creator}`,
  alternates: {
    canonical: `${process.env.DOMAIN}/about`,
  },
};

const PAGE_TITLE = "About";
const PAGE_DESCRIPTION = "A short story of me";

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  return (
    <Container data-aos="fade-up">
      <PageHeading title={t("title")} description={t("description")} />
      <About />
    </Container>
  );
}
