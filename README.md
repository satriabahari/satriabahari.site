  <h1>satriabahari.site</h1>
  <p>🔥 Personal website was built originally from scratch using Next.js, TypeScript, Tailwind CSS, SWR, and Prisma</p>

[![GitHub Repo stars](https://img.shields.io/github/stars/satriabahari/satria.com)](https://github.com/satriabahari/satria.com/stargazers)
[![Depfu](https://badges.depfu.com/badges/02483ebb21fdb2182a66a28b68d1b7b0/status.svg)](https://depfu.com)
[![Depfu](https://badges.depfu.com/badges/02483ebb21fdb2182a66a28b68d1b7b0/overview.svg)](https://depfu.com/github/satriabahari/satria.com?project_id=38809)
[![Depfu](https://badges.depfu.com/badges/02483ebb21fdb2182a66a28b68d1b7b0/count.svg)](https://depfu.com/github/satriabahari/satria.com?project_id=38809)
[![Last Update](https://img.shields.io/badge/deps%20update-every%20sunday-blue.svg)](https://shields.io/)

</div>
<br />

<img width="1359" alt="image" src="https://github.com/satriabahari/satria.com/assets/121304362/aefc17bd-5174-44ab-a1a2-61b66b3e3f66">




## Introduction

This website was carefully crafted from the ground using Next.js and other helpful tools, starting in Feb 2024.

I'm constantly making improvements to add more features and content. This website is where I share what I've learned and offer insights to others.

Feel free to use this website as a reference, for inspiration, or as a template, following the provided license. You can access the source code to customize it to your needs.

If you find this website helpful, please consider leaving a rating. 😎👍🏻

If you have any questions, suggestions, or anything else, don't hesitate to reach out to me! 🧑‍💻
<br /><br />

## Tech Stack

This website is built using these technologies:

- ◼️ Next.js 
- ⚛️ React
- 🔰 TypeScript
- 💠 Tailwind CSS 3
- 🗂 Prisma Client
- 🦫 Zustand
- 〰️ SWR
- ➰ Framer Motion
- 💢 React Icons
- 🌐 Next-Intl
- 🧿 Absolute Import and Path Alias
- 📏 ESLint
- ✨ Prettier
- 📌 Conventional Commit Lint

<br />

## Features

On this website there are several features that will continue to be updated and added in the future.

- ### 🕗 Wakatime Statistics

Data is retrieved using the Wakatime API and then displayed on the dashboard, built with Next.js API routes deployed as serverless functions.

- ### 🗳 Projects

The data projects on this blog are taken from the PostgreSQL database connected through the Prisma Client. The database for this application is hosted on Supabase DB.The data fetching method used to retrieve data projects is Incremental Static Regeneration (ISR) with 1 second revalidation and Server-Side Rendering (SSR) for the project details..
<br /><br />

- ### 🌍 International Language

This website supports multiple languages, enabling users from different regions to interact with it in their preferred language. The translation is managed using i18n, making it easy to add new languages as needed.

- ### 📊 Dashboard

The dashboard page contains various statistics, including contributions from platforms like GitHub, Wakatime, Codewars, and Monkeytype. These statistics are fetched using their respective APIs and displayed in an interactive and user-friendly manner.

## Performance

- ### PageSpeed Insights

Report URL: https://pagespeed.web.dev/analysis/https-satriav2-vercel-app/yjcgcx7o2a?form_factor=desktop

![image](https://github.com/satriabahari/satria.com/assets/121304362/22628b99-fd71-4aff-b8d8-f744fef6e06c)

- ### GTmetrix

Report URL: https://gtmetrix.com/reports/satriav2.vercel.app/cRqM4gpB/

![image](https://github.com/satriabahari/satria.com/assets/121304362/872797d0-e027-4972-ae93-0343c607140d)
<br /><br />

## Getting Started

If you are interested in running this project on your local machine, you can do so in just 3 easy steps below. Additionally, remember to update the ".env.example" file to ".env" and replace the variables with your own in the ".env" file.

### 1. Clone this template using one of the three ways:

1. Clone using git

   ```bash
   git clone https://github.com/satriabahari/satriabahari.site
   ```

2. Using `create-next-app`

   ```bash
   npx create-next-app -e https://github.com/satriabahari/satriabahari.site project-name
   ```

3. Using `degit`

   ```bash
   npx degit satriabahari/satriabahari.site YOUR_APP_NAME
   ```

4. Deploy to Vercel or Netlify, etc

   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/aulianza/aulianza.id)
   [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/aulianza/aulianza.id)

### 2. Install dependencies

It is encouraged to use **yarn** so the husky hooks can work properly.

```bash
bun install
```

### 3. Config .env

This repository uses several environment variables. Please copy .env.example into .env, then fill in the values with your own. For third-party environment variables such as Spotify, Wakatime, Firebase, and others, please refer to the official documentation provided by each provider.

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

### 4. Run the development server

You can start the server using this command:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `src/pages/index.tsx`.
<br /><br />
