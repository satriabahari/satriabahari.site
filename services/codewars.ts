import axios from "axios";

import { CODEWARS_ACCOUNT } from "@/common/constants/codewars";

const { user_id } = CODEWARS_ACCOUNT;

const CODEWARS_ENDPOINT = `https://www.codewars.com/api/v1/users/${user_id}`;

export const getCodewarsData = async () => {
  const response = await axios.get(CODEWARS_ENDPOINT);

  const status = response.status;
  const data = response.data;

  if (status > 400) {
    return { status, data: {} };
  }

  return { status, data };
};
