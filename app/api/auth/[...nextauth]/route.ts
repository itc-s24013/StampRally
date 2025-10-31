import NextAuth, { NextAuthOptions, User, Account, Profile } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prismaClient } from "@/lib/prismaClient";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prismaClient),
    session: { strategy: "jwt" },
    secret: process.env.NEXTAUTH_SECRET,

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],

    callbacks: {
        // JWTを生成・更新するときに呼ばれる
        async jwt({ token, user }) {
            if (user) {
                // PrismaのUser.idをJWTに格納（新規ログイン時のみuserが存在する）
                token.id = user.id;
            }
            return token;
        },

        // セッションをクライアントに返すときに呼ばれる
        async session({ session, token }) {
            if (session.user && token.id) {
                // JWTからユーザーIDをセッションに渡す
                session.user.id = token.id as string;
            }
            return session;
        },
    },

    events: {
        // ✅ サインイン時に自動で呼ばれる
        async signIn({ user, account, profile }: { user: User; account: Account | null; profile?: Profile }) {
            if (!user?.email) return;

            // すでに登録されているユーザーか確認
            const existingUser = await prismaClient.user.findUnique({
                where: { email: user.email },
            });

            // ✅ 新規ユーザーなら登録
            if (!existingUser) {
                await prismaClient.user.create({
                    data: {
                        name: user.name ?? "",
                        email: user.email,
                    },
                });
                console.log("🆕 新しいユーザーを登録:", user.email);
            } else {
                console.log("✅ 既存ユーザー:", existingUser.email);
            }
        },
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
