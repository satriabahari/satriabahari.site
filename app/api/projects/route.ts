import { NextResponse } from "next/server";

import { getProjectsData } from "@/services/projects";

export const GET = async () => {
  try {
    const data = await getProjectsData();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};
