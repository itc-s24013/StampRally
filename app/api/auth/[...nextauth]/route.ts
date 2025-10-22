import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

/*
このファイル構造で
/api/auth/signin → ログイン画面
/api/auth/signout → ログアウト
/api/auth/session → セッション確認
が自動で動くようになるらしい
 */

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  // ログイン成功後、Supabase にユーザーを登録するコールバック
  callbacks: {
    async signIn({ user }) {
      try {
        const { email } = user;
        await fetch(`${process.env.NEXTAUTH_URL}/api/users/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
      } catch (err) {
        console.error("Supabase登録エラー:", err);
      }
      return true; // true を返すとログイン継続
    },
  },
});

export { handler as GET, handler as POST };
