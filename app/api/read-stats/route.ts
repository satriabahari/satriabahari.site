import { NextResponse } from "next/server";

import { getAllTimeSinceToday, getReadStats } from "@/services/wakatime";

export const GET = async () => {
  try {
    const readStatsResponse = await getReadStats();
    const allTimeSinceTodayResponse = await getAllTimeSinceToday();

    // res.setHeader(
    //   "Cache-Control",
    //   "public, s-maxage=60, stale-while-revalidate=30",
    // )

    const data = {
      ...readStatsResponse.data,
      all_time_since_today: allTimeSinceTodayResponse.data,
    };

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error" });
  }
};
