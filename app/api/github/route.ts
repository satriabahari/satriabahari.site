import { getGithubData } from "@/services/github";
import { NextResponse } from "next/server";

export const GET = async () => {
  // const queryParams = req.query;

  // let type = "";

  // if (typeof queryParams.type === "string") {
  //   type = queryParams.type;
  // } else if (Array.isArray(queryParams.type)) {
  //   type = queryParams.type[0];
  // }

  // const response = await getGithubData();

  // res.setHeader(
  //   "Cache-Control",
  //   "public, s-maxage=60, stale-while-revalidate=30",
  // );

  // return NextResponse.json(response.data, { status: 200 });

  try {
    const response = await getGithubData();
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};
