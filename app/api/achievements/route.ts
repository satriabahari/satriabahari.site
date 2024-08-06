import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

import {
  getAchievementsData,
  getAchievementsDataByCategory,
  getAchievementsDataByCategoryAndQuery,
  getAchievementsDataByQuerySearch,
} from "@/services/achievements";

export const GET = async (req: NextRequest) => {
  try {
    const searchParams = req.nextUrl.searchParams;
    const queryCategory = searchParams.get("category");
    const querySearch = searchParams.get("search");

    if (queryCategory && querySearch) {
      const data = await getAchievementsDataByCategoryAndQuery(queryCategory, querySearch);
      return NextResponse.json(data, { status: 200 });
    }

    if (queryCategory && queryCategory.trim()) {
      const data = await getAchievementsDataByCategory(queryCategory);
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
      { status: 500 }
    );
  }
};
