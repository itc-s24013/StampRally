// app/api/test/route.ts
import supabase from "@/lib/supabaseClient";
import { NextResponse } from "next/server";

// 問題登録時のみ使用
export async function POST() {
    const { data, error } = await supabase
        .from("Questions")
        .insert([{ question_text: "赤嶺先生の趣味はなんでしょう？", correct_answer: "2", password: "question1",
            option_a: "1. 読書", option_b: "2. キングス観戦", option_c: "3. ビリヤード", option_d: "4. 釣り" },
            { question_text: "仲宗根先生の好きな猫種はなんでしょう？", correct_answer: "3", password: "question2",
            option_a: "1. アメリカンショートヘアー", option_b: "2. メインクーン", option_c: "3. サイアミーズ", option_d: "4. アビシニアン" },
            { question_text: "太陽が出ている時間をなんという？", correct_answer: "2", password: "question3",
            option_a: "1. 夜", option_b: "2. 昼", option_c: "3. 冬", option_d: "4. 雨" },
            {question_text: "人間が息をするのに必要な気体は？", correct_answer: "4", password: "question4",
            option_a: "1. 二酸化炭素", option_b: "2. 水素", option_c: "3. ヘリウム", option_d: "4. 酸素" },
            {question_text: "牛からとれる白い飲み物は？", correct_answer: "1", password: "question5",
            option_a: "1. 牛乳", option_b: "2. ジュース", option_c: "3. コーヒー", option_d: "4. 水" },
            {question_text: "ピアノで音を出すときに使うものは？", correct_answer: "3", password: "question6",
            option_a: "1. 弦", option_b: "2. 指揮棒", option_c: "3. 鍵盤", option_d: "4. 太鼓" }]);
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