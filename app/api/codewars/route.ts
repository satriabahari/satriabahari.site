import { getCodewarsData } from "@/services/codewars";
import { NextResponse } from "next/server";

export const GET = async () => {
  const response = await getCodewarsData();

  return NextResponse.json(response.data, { status: 200 });
};
