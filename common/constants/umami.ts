export const UMAMI_ACCOUNT = {
  username: "Satria Bahari",
  umami_url: "https://us.umami.is/share/wg6XA2bPFWg8Qc7r/www.satriabahari.site",
  api_key: process.env.UMAMI_API_KEY,
  website_id: process.env.UMAMI_WEBSITE_ID,
  endpoint: {
    page_views: "/pageviews",
    sessions: "/sessions/stats",
  },
  base_url: "https://api.umami.is/v1/websites",
  parameters: {
  startAt: 1717174800000, // 1 Juni 2024 00:00 WIB
    endAt: 1767190799000, // 31 Desember 2025 23:59 WIB
    unit: "month",
    timezone: "Asia/Jakarta",
  },
  is_active: true,
};
