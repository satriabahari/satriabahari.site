import axios from "axios";

type getMonkeytypeLeaderboardProps = {
  language: string;
  mode: string;
  mode2: number;
};

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

export async function getMonkeytypeLeaderboard({
  language,
  mode,
  mode2,
}: getMonkeytypeLeaderboardProps) {
  const API_KEY = process.env.MONKEYTYPE_API_KEY;
  const MONKEYTYPE_API = `https://api.monkeytype.com/leaderboards/rank?&language=${language}&mode=${mode}&mode2=${mode2}`;
  try {
    const response = await axios.get(MONKEYTYPE_API, {
      headers: {
        Authorization: `ApeKey ${API_KEY}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
}
