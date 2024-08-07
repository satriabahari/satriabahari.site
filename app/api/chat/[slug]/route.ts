import { NextResponse } from "next/server";

import { createClient } from "@/common/utils/server";

export const DELETE = async (
  req: Request,
  { params }: { params: { slug: string } },
) => {
  const supabase = createClient();
  try {
    const id = params.slug;
    await supabase.from("messages").delete().eq("id", id);
    return NextResponse.json("Data saved successfully", { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};
