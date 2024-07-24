import { NextResponse } from "next/server";

import { createClient } from "@/common/utils/supabase/server";

export const GET = async () => {
  const supabase = createClient();
  try {
    const { data } = await supabase.from("certificates").select();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};
