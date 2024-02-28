import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Dashboard from "@/modules/dashboard/components/Dashboard";
import { getCodewarsData } from "@/services/codewars";
import { getGithubData } from "@/services/github";
import React from "react";

const PAGE_TITLE = "Dashboard";
const PAGE_DESCRIPTION =
  "This is my personal dashboard, built with Next.js API routes deployed as serverless functions.";

export default async function DashboardPage() {
  const githubData = await getGithubData();
  const codewardData = await getCodewarsData();
  return (
    <Container data-aos="fade-up">
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <Dashboard githubData={githubData} codewarsData={codewardData} />
    </Container>
  );
}
