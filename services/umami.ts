import axios from "axios";

import { UMAMI_ACCOUNT } from "@/common/constants/umami";

const { api_key, website_id, endpoint, base_url, parameters } = UMAMI_ACCOUNT;

const url = `${base_url}/${website_id}`;
const url_pageviews = `${url}${endpoint.page_views}`;
const url_sessions = `${url}${endpoint.sessions}`;

export const getPageViewsByDataRange = async () => {
  try {
    const response = await axios.get(url_pageviews, {
      headers: {
        Accept: "application/json",
        "x-umami-api-key": api_key || "",
      },
      params: parameters,
    });

    return {
      status: response.status,
      data: response.data,
    };
  } catch (error: any) {
    return {
      status: error?.response?.status || 500,
      data: {},
      error: error?.message || "Unknown error",
    };
  }
};

export const getWebsiteStats = async () => {
  try {
    const response = await axios.get(url_sessions, {
      headers: {
        Accept: "application/json",
        "x-umami-api-key": api_key || "",
      },
      params: { startAt: parameters.startAt, endAt: parameters.endAt },
    });

    return {
      status: response.status,
      data: response.data,
    };
  } catch (error: any) {
    return {
      status: error?.response?.status || 500,
      data: {},
      error: error?.message || "Unknown error",
    };
  }
};
