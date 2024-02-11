const BASE_URL =
  "https://res.cloudinary.com/dnbdko2by/image/upload/v1707536514";

export const getCloudinaryUrl = (path: string) => {
  return `${BASE_URL}${path}`;
};
