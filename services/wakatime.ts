import { WAKATIME_ACCOUNT } from "@/common/constants/wakatime";
import axios from "axios";

const { api_key, base_url, all_time_endpoint, stats_endpoint } =
  WAKATIME_ACCOUNT;

export const getReadStats = async () => {
  const response = await axios.get(`${base_url}${stats_endpoint}/last_7_days`, {
    headers: {
      Authorization: `Basic ${api_key}`,
    },
  });

  const status = response.status;

  if (status >= 400) return { status, data: [] };

  const getData = response.data;

  const start_date = getData?.data?.start;
  const end_date = getData?.data?.end;
  const last_update = getData?.data?.modified_at;

  const best_day = {
    date: getData?.data?.best_day?.date,
    text: getData?.data?.best_day?.text,
  };
  const human_readable_daily_average =
    getData?.data?.human_readable_daily_average_including_other_language;
  const human_readable_total =
    getData?.data?.human_readable_total_including_other_language;

  const languages = getData?.data?.languages?.slice(0, 6);
  const editors = getData?.data?.editors;

  return {
    status,
    data: {
      start_date,
      end_date,
      last_update,
      best_day,
      human_readable_daily_average,
      human_readable_total,
      languages,
      editors,
    },
  };
};

export const getAllTimeSinceToday = async () => {
  const response = await axios.get(`${base_url}${all_time_endpoint}`, {
    headers: {
      Authorization: `Basic ${api_key}`,
    },
  });

  const status = response.status;

  if (status >= 400) return { status, data: {} };

  const getData = response.data;

  const data = {
    text: getData?.data?.text,
    total_seconds: getData?.data?.total_seconds,
  };

  return {
    status,
    data,
  };
};
