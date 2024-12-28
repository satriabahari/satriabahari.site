import { createClient } from "@/common/utils/server";

export const getProjectsData = async () => {
  const supabase = createClient();

  let { data } = await supabase.from("projects").select();
  return data;
};

export const getProjectsDataBySlug = async (slug: string) => {
  const supabase = createClient();

  let { data } = await supabase.from("projects").select().eq("slug", slug).single();
  return data;
};
