import { NextResponse } from "next/server";
import supabase from "@/lib/supabaseClient";

// 問題のパスワード認証を行うAPI
export async function POST(request: Request) {
    const { id, password } = await request.json();

    // パラメータチェック idまたはpasswordが無ければ400を返す
    if (!id || !password) {
        return NextResponse.json({ error: "Missing parameters" }, { status: 400 });
    }

    // 該当の問題を取得
    const { data, error } = await supabase
        .from("Questions")
        .select("password") // パスワードのみ取得
        .eq("id", id) // idが一致する行を探す
        .single(); // 1件だけオブジェクトを取得

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // パスワード照合
    if (data.password !== password) {
        return NextResponse.json({ success: false, message: "認証失敗" }, { status: 401 });
    }

    // 成功時はセッション用Cookieを発行
    const res = NextResponse.json({ success: true }, { status: 200 });
    res.cookies.set(`auth_question_${id}`, "true", {
        httpOnly: true,
        path: `/questions/${id}`,
        maxAge: 60 * 30, // 30分有効
    });

    return res;
}