import { MONKEYTYPE_ACCOUNT } from "@/common/constant/monkeytype";
import axios from "axios";

const { username } = MONKEYTYPE_ACCOUNT;

const USER_ENDPOINT = `https://api.monkeytype.com/users/${username}/profile`;

export async function getUserData() {
  const response = await axios.get(USER_ENDPOINT);

  const status = response.status;
  const responseJson = response.data;

  if (status > 400) {
    return { status, data: {} };
  }

  return { status, data: responseJson.data };
}
