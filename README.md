  <h1>satriabahari.my.id</h1>
  <p>🔥 Personal website was built originally from scratch using Next.js, TypeScript, Tailwind CSS, SWR, Supabase and more.</p> 

[![GitHub Repo stars](https://img.shields.io/github/stars/satriabahari/satria.com)](https://github.com/satriabahari/satria.com/stargazers)
[![Depfu](https://badges.depfu.com/badges/02483ebb21fdb2182a66a28b68d1b7b0/status.svg)](https://depfu.com)
[![Depfu](https://badges.depfu.com/badges/02483ebb21fdb2182a66a28b68d1b7b0/overview.svg)](https://depfu.com/github/satriabahari/satria.com?project_id=38809)
[![Depfu](https://badges.depfu.com/badges/02483ebb21fdb2182a66a28b68d1b7b0/count.svg)](https://depfu.com/github/satriabahari/satria.com?project_id=38809)
[![Last Update](https://img.shields.io/badge/deps%20update-every%20sunday-blue.svg)](https://shields.io/)

<br/>

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
# Nodemailer
NODEMAILER_PW=your_email_password
NODEMAILER_EMAIL=your_email@example.com

# GitHub Token
GITHUB_READ_USER_TOKEN_PERSONAL=your_github_token

# Umami Analytics
UMAMI_API_KEY=your_umami_api_key
UMAMI_WEBSITE_ID_SITE=your_site_id
UMAMI_WEBSITE_ID_MYID=your_myid_id

# Wakatime
WAKATIME_API_ID=your_wakatime_id
WAKATIME_API_KEY=your_wakatime_key

# Monkeytype
MONKEYTYPE_API_KEY=your_monkeytype_api_key

# Codewars
CODEWARS_USER_ID=your_codewars_username

# PostgreSQL (Supabase)
POSTGRES_URL=your_postgres_url
POSTGRES_PRISMA_URL=your_prisma_url
POSTGRES_URL_NO_SSL=your_postgres_url_no_ssl
POSTGRES_URL_NON_POOLING=your_postgres_url_non_pooling
POSTGRES_USER=your_postgres_user
POSTGRES_HOST=your_postgres_host
POSTGRES_PASSWORD=your_postgres_password
POSTGRES_DATABASE=your_postgres_db

# Google Auth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Gemini API
GEMINI_API_KEY=your_gemini_api_key

# GitHub Auth
GITHUB_ID=your_github_app_id
GITHUB_SECRET=your_github_app_secret

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
NEXT_PUBLIC_FIREBASE_DB_URL=your_firebase_db_url
NEXT_PUBLIC_FIREBASE_CHAT_DB=messages

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Misc
NEXT_PUBLIC_AUTHOR_EMAIL=your_email@example.com
DOMAIN=https://www.yourdomain.com

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
