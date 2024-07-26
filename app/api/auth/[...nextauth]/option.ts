// Hapus kalau berhasil debug production
import GithubProvider from "next-auth/providers/github";
import GoolgeProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoolgeProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
