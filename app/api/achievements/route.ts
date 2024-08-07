import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

import { getAchievementsData } from "@/services/achievements";

export const GET = async (req: NextRequest) => {
  try {
    const searchParams = req.nextUrl.searchParams;
    const queryCategory = searchParams.get("category");
    const querySearch = searchParams.get("search");

    if (queryCategory && querySearch) {
      const data = await getAchievementsData({
        category: queryCategory,
        search: querySearch,
      });
      return NextResponse.json(data, { status: 200 });
    }

    if (queryCategory && queryCategory.trim()) {
      const data = await getAchievementsData({ category: queryCategory });
      return NextResponse.json(data, { status: 200 });
    }

    if (querySearch) {
      const data = await getAchievementsData({ search: querySearch });
      return NextResponse.json(data, { status: 200 });
    }

    const data = await getAchievementsData({});
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};
