import NextAuth, { NextAuthOptions, User, Account, Profile } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prismaClient } from "@/lib/prismaClient";
// import { AdapterUser } from "next-auth/adapters";
// import { User } from "@/lib/types";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prismaClient), // NextAuthとPrismaをつなぐアダプター
    session: { strategy: "jwt" as const }, // JWT = JSON形式のデータを安全にやり取りするための仕組み
    secret: process.env.NEXTAUTH_SECRET, // セッションの暗号化
    providers: [ // ログイン方法
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    events: {
        // ユーザーがサインインしたときに呼ばれる関数
        async signIn({
                         user,
                         account,
                         profile
        }: {
            user: User
            account: Account | null
            profile?: Profile
        })  {
            // サインインしたユーザーが学生テーブルに存在しなければ処理を中断する
            if (!user?.id) return;

            const existing = await prismaClient.student.findUnique({
                where: { userId: user.id }
            })
            if (!existing) {
                await prismaClient.student.create({
                    data: {
                        userId: user.id,
                        name: user.name ?? "",
                        email: user.email ?? "",
                    },
                })
            }
        },
    },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST };
