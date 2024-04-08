import { getMonkeytypeData } from "@/services/monkeytype";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const response = await getMonkeytypeData();
    // const response = NextResponse.next();
    // response.cookies.set(
    //   "Cache-Control",
    //   "public, s-maxage=60, stale-while-revalidate=30",
    // );
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};
