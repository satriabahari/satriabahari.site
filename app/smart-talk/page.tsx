import { Metadata } from "next";
import { useTranslations } from "next-intl";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import SmartTalk from "@/modules/smarttalk";
import { METADATA } from "@/common/constants/metadata";

export const metadata: Metadata = {
  title: `Smart Talk ${METADATA.exTitle}`,
  description: `Smart Talk Integreted with AI`,
  alternates: {
    canonical: `${process.env.DOMAIN}/smart-talk`,
  },
};

const SmartTalkPage = () => {
  const t = useTranslations("SmartTalkPage");

  return (
    <Container data-aos="fade-up">
      <PageHeading title={t("title")} description={t("description")} />
      <SmartTalk />
    </Container>
  );
};

export default SmartTalkPage;
