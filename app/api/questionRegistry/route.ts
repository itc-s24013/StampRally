// app/api/questionRegistry/route.ts
import supabaseAdmin from "@/lib/supabaseAdmin";
import { NextResponse } from "next/server";

// 問題登録時のみ使用
export async function POST() {
    const { data, error } = await supabaseAdmin
        .from("Questions")
        .insert([{ question_text: "赤嶺先生の趣味はなんでしょう？", correct_answer: "2", password: "question1",
            option_a: "1. 読書", option_b: "2. キングス観戦", option_c: "3. ビリヤード", option_d: "4. 釣り" },
            { question_text: "仲宗根先生の好きな猫種はなんでしょう？", correct_answer: "3", password: "question2",
            option_a: "1. アメリカンショートヘアー", option_b: "2. メインクーン", option_c: "3. サイアミーズ", option_d: "4. アビシニアン" },
            { question_text: "大桝先生の人生最後に食べたい食べ物はなんでしょう？", correct_answer: "2", password: "question3",
                option_a: "1. 鮎ラーメン", option_b: "2. 地獄ラーメン", option_c: "3. オロチョンラーメン", option_d: "4. 松坂牛麺" },
            {question_text: "比屋根先生が生まれた年に発売されたゲーム機はなんでしょう？", correct_answer: "4", password: "question4",
                option_a: "1. ニンテンドーDS", option_b: "2. ファミコン", option_c: "3. Wii", option_d: "4. ゲームボーイ" },
            {question_text: "学内ハロウィンイベントでいまり先生は何の仮装をしていたでしょう？", correct_answer: "1", password: "question5",
                option_a: "1. 魔女", option_b: "2. キョンシー", option_c: "3. メイドさん", option_d: "4. 雛子(SILENT HILL f)" },
            {question_text: "学内ハロウィンイベントで大桝先生は何の仮装をしていたでしょう？", correct_answer: "3", password: "question6",
                option_a: "1. 牧師", option_b: "2. 吸血鬼", option_c: "3. 黒執事", option_d: "4. 名探偵コナン" },
            { question_text: "いまり先生は何カ国行ったことがあるでしょう？", correct_answer: "2", password: "question7",
                option_a: "1. １カ国", option_b: "2. ２カ国", option_c: "3. ３カ国", option_d: "4. ４カ国" },
            { question_text: "このプログラムの実行結果はどれでしょう？\na = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)", correct_answer: "1", password: "question8",
                option_a: "1. [1, 2, 3, 4]", option_b: "2. [1, 2, 3]", option_c: "3. a", option_d: "4. Error" }]);

    if (error) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ success: true, data });
}

export async function GET() {
    try {
        const { data, error } = await supabaseAdmin
            .from("Questions")
            .select("id, question_text, created_at, updated_at, option_a, option_b, option_c, option_d");
        if (error) throw error;
        return NextResponse.json(data);
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error(err.message);
            return NextResponse.json({ error: err.message }, { status: 500 });
        } else {
            console.error(err);
            return NextResponse.json({ error: "Unknown error" }, { status: 500 });
        }
    }
}