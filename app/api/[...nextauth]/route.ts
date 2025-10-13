import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOODLE_CLIENT_ID!,
            clientSecret: process.env.GOODLE_CLIENT_SECRET!,
        }),
    ],
        secret: process.env.NECTAUTH_SECRET,
})

export { handler as GET, handler as POST };