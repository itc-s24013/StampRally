/* user/route.ts (ユーザー登録の存在確認と新規登録)
   user/register/route.ts (Googleアカウントの登録)
   → user/route.tsに統合した
 */
export const runtime = "nodejs";

import { NextResponse } from "next/server"; // jsonレスポンスを返す
import  supabase  from "@/lib/supabaseClient"; // データベース操作を行う

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        //
        if (!email) {
            return NextResponse.json({ error: "emailが必要です" }, { status: 400 });
        }

        // Googleアカウント登録処理
        const { data: existing } = await supabase
            .from('Users')
            .select("id")
            .eq("email", email)
            .maybeSingle(); // 失敗防止: single()より安全

        if (existing) {
            return NextResponse.json({ message: "既に登録済みです" });
        }

        /* error  クエリ結果でエラー情報を格納するためのプロパティ名として仕様で定義されている。
                  正常の場合は値がnullになる
         */
        const { error } = await supabase
            .from("Users")
            .upsert([{ email }], { onConflict: "email" });

        if (error) {
            console.error("Supabase登録エラー:", error.message);
            return NextResponse.json({ error: "登録に失敗しました" }, { status: 500 });
        }

        return NextResponse.json({ message: "登録成功" });
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "不明なエラーが発生しました";

        console.error("API処理エラー:", message);
        return NextResponse.json({ error: "サーバーエラー" }, { status: 500 });
    }
}