// ユーザーIDの型チェックと取得ユーティリティ

import { getServerSession } from "next-auth/next";
import { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import type { JWT } from "next-auth/jwt";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

/**
 * 簡易版: session.user.id を優先、なければ JWT.sub を返す。
 * ESLint の `any` を使わず、unknown / 型ガードで安全に確認する。
 */
export async function getUserIdSimple(request: Request): Promise<string | undefined> {
    const session = await getServerSession(authOptions);
    const idFromSession = session?.user ? (session.user as unknown as { id?: unknown }).id : undefined;
    if (typeof idFromSession === "string") return idFromSession;

    const token = (await getToken({
        req: request as NextRequest,
        secret: process.env.NEXTAUTH_SECRET,
    })) as JWT | null;

    if (!token || typeof token !== "object") return undefined;
    if (typeof token.sub === "string") return token.sub;

    const idClaim = (token as Record<string, unknown>)["id"];
    return typeof idClaim === "string" ? idClaim : undefined;
}
