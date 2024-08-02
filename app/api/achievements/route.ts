import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

import {
  getAchievementsData,
  getAchievementsDataByCategory,
  getAchievementsDataByOrganization,
  getAchievementsDataByQuerySearch,
} from "@/services/achievements";

export const GET = async (req: NextRequest) => {
  try {
    const searchParams = req.nextUrl.searchParams;
    const queryCategory = searchParams.get("category");
    const queryOrganization = searchParams.get("organization");
    const querySearch = searchParams.get("search");

    // if (queryCategory && queryCategory.trim() && queryOrganization && queryOrganization.trim()) {
    //   // Mengambil data berdasarkan kategori dan organisasi
    //   const dataByCategory = await getAchievementsDataByCategory(queryCategory);
    //   const dataByOrganization = await getAchievementsDataByOrganization(queryOrganization);
    //   const combinedData = dataByCategory.filter(achievement =>
    //     dataByOrganization.some(orgAchievement => orgAchievement.id === achievement.id)
    //   );
    //   return NextResponse.json(combinedData, { status: 200 });
    // }

    if (queryCategory && queryCategory.trim()) {
      const data = await getAchievementsDataByCategory(queryCategory);
      return NextResponse.json(data, { status: 200 });
    }

    if (queryOrganization && queryOrganization.trim()) {
      const data = await getAchievementsDataByOrganization(queryOrganization);
      return NextResponse.json(data, { status: 200 });
    }

    if (querySearch) {
      const data = await getAchievementsDataByQuerySearch(querySearch);
      return NextResponse.json(data, { status: 200 });
    }

    const data = await getAchievementsData();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};
