// 問題詳細画面

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import supabase from "@/lib/supabaseClient";

interface QuestionPageProps {
    params: Promise<{ id: string }>;
}

export default async function QuestionPage({ params }: QuestionPageProps) {
    const { id } = await params;

    const cookieStore = await cookies();
    const authCookie = cookieStore.get(`auth_question_${id}`);

    // 認証用クッキーがない場合、パスワード要求画面へリダイレクト
    if (!authCookie || !authCookie.value) {
        redirect(`/questions/${id}/auth`);
    }

    //  Supabase から問題データを取得
    const { data, error } = await supabase
        .from("Questions") // 👈 テーブル名（大文字なら注意）
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        console.error("❌ Supabase error:", error);
        return (
            <main style={{ padding: "2rem" }}>
                <h1>問題の取得に失敗しました</h1>
                <p style={{ color: "red" }}>{error.message}</p>
            </main>
        );
    }

    if (!data) {
        return (
            <main style={{ padding: "2rem" }}>
                <h1>問題が見つかりません。</h1>
            </main>
        );
    }

    return (
        <main style={{ padding: "2rem" }}>
            <h1>問題 {data.id}</h1>
            <p style={{fontSize:"1.2rem", margin: "1rem 0"}}>{data.question_text}</p>
            <label><input type="radio" name="test" value="0"/>{data.option_a}</label>
            <label><input type="radio" name="test" value="1"/>{data.option_b}</label>
            <label><input type="radio" name="test" value="2"/>{data.option_c}</label>
            <label><input type="radio" name="test" value="3"/>{data.option_d}</label>
        </main>
    );
}