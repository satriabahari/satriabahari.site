export const apiResponse = (
  status: number,
  message: string,
  data: unknown = {},
) => {
  return {
    status,
    message,
    data,
  };
};
