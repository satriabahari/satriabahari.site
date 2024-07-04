import { Metadata } from "next";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Contact from "@/modules/contact";
import { METADATA } from "@/common/constant/metadata";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: `Contact ${METADATA.exTitle}`,
  description: `Contact ${METADATA.creator}`,
  alternates: {
    canonical: `${process.env.DOMAIN}/contact`,
  },
};

const PAGE_TITLE = "Contact";
const PAGE_DESCRIPTION = "Let`s get in touch";

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  return (
    <Container data-aos="fade-up">
      <PageHeading title={t("title")} description={t("description")} />
      <Contact />
    </Container>
  );
}
