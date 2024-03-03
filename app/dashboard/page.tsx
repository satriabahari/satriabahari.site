import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Dashboard from "@/modules/dashboard/components/Dashboard";
import { getCodewarsData } from "@/services/codewars";
import { getGithubData } from "@/services/github";
import {
  getMonkeytypeData,
  getMonkeytypeLeaderboard,
} from "@/services/monkeytype";
import React from "react";

const PAGE_TITLE = "Dashboard";
const PAGE_DESCRIPTION =
  "This is my personal dashboard, built with Next.js API routes deployed as serverless functions.";

export default async function DashboardPage() {
  // const githubData = await getGithubData();
  const githubData = null;
  const codewardData = await getCodewarsData();
  const monkeytypeDataProfile = await getMonkeytypeData();
  const monkeytypeDataLeaderboard = await getMonkeytypeLeaderboard();
  return (
    <Container data-aos="fade-up">
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <Dashboard
        githubData={githubData}
        codewarsData={codewardData}
        monkeytypeDataProfile={monkeytypeDataProfile}
        monkeytypeDataLeaderboard={monkeytypeDataLeaderboard}
      />
    </Container>
  );
}
