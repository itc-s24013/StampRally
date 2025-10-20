// app/api/test/route.ts
import supabase from "@/lib/supabaseClient";
import { NextResponse } from "next/server";

// 問題登録時のみ使用
export async function POST() {
    const { data, error } = await supabase
        .from("Questions")
        .insert([{ question_text: "テスト問題1", correct_answer: "テスト解答1" },
            { question_text: "テスト問題2", correct_answer: "テスト解答2" },
            { question_text: "テスト問題3", correct_answer: "テスト解答3" }]);
    if (error) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ success: true, data });
}

export async function GET() {
    const { data, error } = await supabase
        .from("Questions")
        .select("*");
    if (error) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ success: true, data });
}