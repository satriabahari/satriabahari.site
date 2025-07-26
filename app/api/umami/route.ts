import { NextResponse } from "next/server";
import { getPageViewsByDataRange, getWebsiteStats } from "@/services/umami";

export const GET = async () => {
  const pageViewsByDataRange = await getPageViewsByDataRange();
  const websiteStats = await getWebsiteStats();

  const result = {
    ...pageViewsByDataRange.data,
    websiteStats: websiteStats.data,
  };

  if (result.status >= 400) {
    return NextResponse.json(
      { message: result.error || "Failed to fetch Umami data" },
      { status: result.status },
    );
  }

  return NextResponse.json(result, { status: 200 });
};
