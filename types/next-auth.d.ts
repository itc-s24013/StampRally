// NextAuthの型拡張を行う（session.user.idを認識させる）

import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: DefaultSession["user"] & {
            id: string;
        };
    }

    interface User extends DefaultUser {
        id: string;
    }
}