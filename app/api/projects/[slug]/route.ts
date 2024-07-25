import { NextResponse } from "next/server";

import { createClient } from "@/common/utils/supabase/server";

export const GET = async (
  req: Request,
  { params }: { params: { slug: string } },
) => {
  const supabase = createClient();
  try {
    const slug = params?.slug;
    const { data } = await supabase.from("projects").select().eq("slug", slug);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};
