import axios from "axios";
import { UMAMI_ACCOUNT } from "@/common/constants/umami";

const { api_key, endpoint, base_url, parameters, websites } = UMAMI_ACCOUNT;

const getWebsiteIdByDomain = (domain: string) => {
  const found = websites.find((w) => w.domain === domain);
  return found?.website_id;
};

export const getPageViewsByDataRange = async (domain: string) => {
  const website_id = getWebsiteIdByDomain(domain);
  if (!website_id) {
    return {
      status: 404,
      data: {},
      error: `Website not found for domain "${domain}"`,
    };
  }

  const url = `${base_url}/${website_id}${endpoint.page_views}`;

  try {
    const response = await axios.get(url, {
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

export const getWebsiteStats = async (domain: string) => {
  const website_id = getWebsiteIdByDomain(domain);
  if (!website_id) {
    return {
      status: 404,
      data: {},
      error: `Website not found for domain "${domain}"`,
    };
  }

  const url = `${base_url}/${website_id}${endpoint.sessions}`;

  try {
    const response = await axios.get(url, {
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
