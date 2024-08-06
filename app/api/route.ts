import { createClient } from "@/common/utils/server";
import { NextResponse } from "next/server";

export const GET = async () => {
  const supabase = createClient();
  const { data: notes } = await supabase.from("notes").select();

  return NextResponse.json(notes, { status: 200 });
};
