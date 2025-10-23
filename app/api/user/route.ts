export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json({ error: "emailが必要です" }, { status: 400 });
        }

        const { data: existing } = await supabase
            .from('"Students"')
            .select("id")
            .eq("email", email)
            .maybeSingle(); // 失敗防止: single()より安全

        if (existing) {
            return NextResponse.json({ message: "既に登録済み" });
        }

        const { error } = await supabase.from('"Students"').insert([{ email }]);

        if (error) {
            console.error("Supabase登録エラー:", error.message);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ message: "登録成功" });
    } catch (err) {
        console.error("API処理エラー:", err);
        return NextResponse.json({ error: "サーバーエラー" }, { status: 500 });
    }
}