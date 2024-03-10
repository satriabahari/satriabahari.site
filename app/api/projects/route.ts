import { NextResponse } from "next/server";

import prisma from "@/common/libs/prisma";

export const GET = async () => {
  try {
    const data = await prisma.projects.findMany();
    return NextResponse.json({ status: true, data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ status: false, error }, { status: 400 });
  }
};
