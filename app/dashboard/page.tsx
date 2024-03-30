import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Dashboard from "@/modules/dashboard/components/Dashboard";
import { getGithubData } from "@/services/github";
import { getCodewarsData } from "@/services/codewars";
// import {
//   getMonkeytypeData,
//   getMonkeytypeLeaderboard,
// } from "@/services/monkeytype";

const PAGE_TITLE = "Dashboard";
const PAGE_DESCRIPTION =
  "This is my personal dashboard, built with Next.js API routes deployed as serverless functions.";

export default async function DashboardPage() {
  // const githubData = await getGithubData();
  // const codewardData = await getCodewarsData();
  // const monkeytypeDataProfile = await getMonkeytypeData();
  // const monkeytypeDataTime60Leaderboard = await getMonkeytypeLeaderboard({
  //   language: "english",
  //   mode: "time",
  //   mode2: 60,
  // });
  // const monkeytypeDataTime15Leaderboard = await getMonkeytypeLeaderboard({
  //   language: "english",
  //   mode: "time",
  //   mode2: 15,
  // });

  return (
    <Container data-aos="fade-up">
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <Dashboard
        // githubData={githubData}
        // codewarsData={codewardData}
        // monkeytypeDataProfile={monkeytypeDataProfile}
        // monkeytypeDataTime60Leaderboard={monkeytypeDataTime60Leaderboard}
        // monkeytypeDataTime15Leaderboard={monkeytypeDataTime15Leaderboard}
      />
    </Container>
  );
}
