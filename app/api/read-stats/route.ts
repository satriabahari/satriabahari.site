import { NextResponse } from "next/server";

import { getAllTimeSinceToday, getReadStats } from "@/services/wakatime";

export const GET = async () => {
  try {
    const readStatsResponse = await getReadStats();
    const allTimeSinceTodayResponse = await getAllTimeSinceToday();
    const data = {
      ...readStatsResponse.data,
      all_time_since_today: allTimeSinceTodayResponse.data,
    };
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};
