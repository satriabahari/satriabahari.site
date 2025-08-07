  <h1>satriabahari.site</h1>
  <p>🔥 Personal website was built originally from scratch using Next.js, TypeScript, Tailwind CSS, SWR, Supabase and more.</p> 

[![GitHub Repo stars](https://img.shields.io/github/stars/satriabahari/satria.com)](https://github.com/satriabahari/satria.com/stargazers)
[![Depfu](https://badges.depfu.com/badges/02483ebb21fdb2182a66a28b68d1b7b0/status.svg)](https://depfu.com)
[![Depfu](https://badges.depfu.com/badges/02483ebb21fdb2182a66a28b68d1b7b0/overview.svg)](https://depfu.com/github/satriabahari/satria.com?project_id=38809)
[![Depfu](https://badges.depfu.com/badges/02483ebb21fdb2182a66a28b68d1b7b0/count.svg)](https://depfu.com/github/satriabahari/satria.com?project_id=38809)
[![Last Update](https://img.shields.io/badge/deps%20update-every%20sunday-blue.svg)](https://shields.io/)

---

<img width="1525" height="1221" alt="Screenshot 2025-08-07 115929" src="https://github.com/user-attachments/assets/fcf5a30b-0ad8-4a57-b1bf-e846e4ed416c" />

## 📘 Introduction

This is my personal website built from scratch since February 2024 using modern technologies such as Next.js and TypeScript.

I use this platform to share projects, insights, and resources. The site is constantly evolving as I add more features and improvements.

Feel free to explore the source code, use it as inspiration, or fork it as a template under the provided license. If you find this project useful, consider giving it a star ⭐.

Have feedback, ideas, or questions? Don’t hesitate to reach out! 🙌

---

## Tech Stack

This website is built using these technologies:

- **⚛️ Next.js**
- **🔰 TypeScript**
- **💠 Tailwind CSS v3**
- **🦫 Zustand**
- **〰️ SWR**
- **➰ Framer Motion**
- **💢 React Icons**
- **🌐 Next-Intl (i18n)**
- **📦 Absolute Imports & Path Alias**
- **📏 ESLint & Prettier**
- **📌 Conventional Commit Lint**

---

## 🚀 Features

### 🕗 Wakatime Statistics
Displays live coding statistics from Wakatime using serverless API routes in Next.js.

### 🗳 Project Showcase
Projects are stored in a Supabase PostgreSQL database. Uses ISR (1s revalidation) and SSR for optimal performance.

### 🌍 Internationalization
Supports multiple languages using `next-intl`. Easily extendable to support additional locales.

### 📊 Developer Dashboard
Interactive dashboard visualizing:
- GitHub contributions
- Wakatime data
- Codewars stats
- Monkeytype typing stats

Each stat is retrieved using public APIs and visualized in a user-friendly way.

---

## ⚡ Performance

### 📈 Google PageSpeed Insights

➡️ [View Report](https://pagespeed.web.dev/analysis/https-satriav2-vercel-app/yjcgcx7o2a?form_factor=desktop)  
![PageSpeed](https://github.com/satriabahari/satria.com/assets/121304362/22628b99-fd71-4aff-b8d8-f744fef6e06c)

### 📉 GTmetrix

➡️ [View Report](https://gtmetrix.com/reports/satriav2.vercel.app/cRqM4gpB/)  
![GTmetrix](https://github.com/satriabahari/satria.com/assets/121304362/872797d0-e027-4972-ae93-0343c607140d)

## 🛠 Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repository

Using Git:
```bash
git clone https://github.com/satriabahari/satriabahari.my.id
```

Using `create-next-app`:
```bash
npx create-next-app -e https://github.com/satriabahari/satriabahari.my.id project-name
```

Using `degit`:
```bash
npx degit satriabahari/satriabahari.my.id YOUR_APP_NAME
```

Or deploy directly to Vercel / Netlify:

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/satriabahari/satriabahari.my.id)  
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/satriabahari/satriabahari.my.id)

---

### 2. Install Dependencies

```bash
bun install
```

> ⚠️ It's recommended to use **Bun** to ensure husky hooks and scripts work properly.

---

### 3. Configure Environment Variables

Copy `.env.example` to `.env` and replace with your own credentials.

```bash
cp .env.example .env
```

You’ll need credentials for services like:
- Nodemailer
- GitHub
- Wakatime
- Codewars
- Monkeytype
- Supabase/PostgreSQL

#### Example:

```
NODEMAILER_PW=
NODEMAILER_EMAIL=
GITHUB_READ_USER_TOKEN_PERSONAL=
WAKATIME_API_ID=
WAKATIME_API_KEY=
MONKEYTYPE_API_KEY=
CODEWARS_USER_ID=
POSTGRES_URL=
POSTGRES_URL_NON_POOLING=
POSTGRES_URL_NO_SSL=
POSTGRES_PRISMA_URL=
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_HOST=
POSTGRES_DATABASE=
```

---

### 4. Run Development Server

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

You can start editing the homepage in:  
`src/pages/index.tsx`

---

## 📄 License

This project is licensed under the MIT License.
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `src/pages/index.tsx`.
<br /><br />
