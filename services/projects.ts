import { firestore } from "@/common/libs/firebase";
import { ProjectItem } from "@/common/types/projects";
import { collection, getDocs, query, where } from "@firebase/firestore";

export const getProjectsData = async () => {
  const querySnapshot = await getDocs(collection(firestore, "projects"));
  const projects: ProjectItem[] = [];
  querySnapshot.forEach((doc) => {
    const data = { id: parseInt(doc.id), ...doc.data() } as ProjectItem;
    projects.push(data);
  });
  return projects;
};

export const getProjectsDataBySlug = async (slug: string) => {
  const q = query(collection(firestore, "projects"), where("slug", "==", slug));
  const querySnapshot = await getDocs(q);
  let data = {};
  querySnapshot.forEach((doc) => {
    data = { id: parseInt(doc.id), ...doc.data() };
  });
  return data;
};
