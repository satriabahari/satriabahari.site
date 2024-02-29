import axios from "axios";

export async function getMonkeytypeData() {
  const USER_NAME = process.env.NEXT_PUBLIC_USER_NAME;
  const MONKEYTYPE_API = `https://api.monkeytype.com/users/${USER_NAME}/profile`;
  try {
    const response = await axios.get(MONKEYTYPE_API);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
}
