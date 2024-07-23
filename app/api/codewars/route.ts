import { NextResponse } from "next/server";

import { getCodewarsData } from "@/services/codewars";

export const GET = async () => {
  try {
    const response = await getCodewarsData();
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};
