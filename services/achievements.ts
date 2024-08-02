import { firestore } from "@/common/libs/firebase";
import { AchievementItem } from "@/common/types/achievements";
import { collection, getDocs, query, where } from "@firebase/firestore";

export const getAchievementsData = async () => {
  const querySnapshot = await getDocs(collection(firestore, "achievements"));
  const projects: AchievementItem[] = [];
  querySnapshot.forEach((doc) => {
    const data = { id: parseInt(doc.id), ...doc.data() } as AchievementItem;
    projects.push(data);
  });
  return projects;
};

export const getAchievementDataBySlug = async (slug: string) => {
  const q = query(
    collection(firestore, "achievements"),
    where("slug", "==", slug),
  );
  const querySnapshot = await getDocs(q);
  let data = {};
  querySnapshot.forEach((doc) => {
    data = { id: parseInt(doc.id), ...doc.data() };
  });
  return data;
};

export const getAchievementsDataByCategory = async (category: string) => {
  const q = query(
    collection(firestore, "achievements"),
    where("category", "==", category),
  );
  const querySnapshot = await getDocs(q);
  let data: AchievementItem[] = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: parseInt(doc.id), ...doc.data() } as AchievementItem);
  });
  return data;
};

export const getAchievementsDataByOrganization = async (
  organization: string,
) => {
  const q = query(
    collection(firestore, "achievements"),
    where("issuing_organization", "==", organization),
  );
  const querySnapshot = await getDocs(q);
  let data: AchievementItem[] = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: parseInt(doc.id), ...doc.data() } as AchievementItem);
  });
  return data;
};

export const getAchievementsDataByQuerySearch = async (querySearch: string) => {
  const decodedQuery = decodeURIComponent(querySearch).toLowerCase();
  const q = query(collection(firestore, "achievements"));
  const querySnapshot = await getDocs(q);

  let data: AchievementItem[] = [];
  querySnapshot.forEach((doc) => {
    const achievement = {
      id: parseInt(doc.id),
      ...doc.data(),
    } as AchievementItem;
    if (achievement.name.toLowerCase().includes(decodedQuery)) {
      data.push(achievement);
    }
  });

  return data;
};
