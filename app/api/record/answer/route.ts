import { NextResponse } from 'next/server';
import supabase from '@/lib/supabaseClient';
import { getUserIdSimple } from "@/lib/auth";

// POSTリクエストで回答を受け取り、判定・保存する
export async function POST(request: Request) {
    const formData = await request.formData();
    const questionId = formData.get("questionId") as string | null;
    const userAnswer = formData.get("userAnswer") as string | null;

    // userIdを取得 → lib/auth.tsにまとめた
    const userId = await getUserIdSimple(request);
    if (!userId) {
        return new Response(JSON.stringify({ error: "userId が取得できません" }), { status: 401 });
    }
    console.log("取得したuserId:", userId);

    // パラメータチェック
    if (!questionId || userAnswer === null || !userId) {
        return NextResponse.json({
            success: false,
            error: "パラメータ不足: questionId, userAnswer, userIdのいずれかが欠けています。"
        }, { status: 400 });
    }

    // 型変換
    const questionIdNum = Number(questionId);
    const userAnswerNum = Number(userAnswer);
    const userIdStr = userId; // UUID文字列

    // --- 2. 該当の問題から正解を取得 ---
    const { data: questionData, error: questionError } = await supabase
        .from("Questions")
        .select("correct_answer")
        .eq("id", questionIdNum)
        .single();

    if (questionError || !questionData) {
        console.error("問題データ取得エラー:", questionError);
        return NextResponse.json({ success: false, error: "問題データ取得エラー" }, { status: 500 });
    }

    const correctAnswerNum = Number(questionData.correct_answer);
    const isCorrect = userAnswerNum === correctAnswerNum;

    let stampObtained = false;

    // --- 5. 正解の場合、Stampsテーブルにスタンプを付与 ---
    if (isCorrect) {
        const { data: existingStamp, error: selectStampError } = await supabase
            .from("Stamps")
            .select("id")
            .eq("user_id", userIdStr)
            .eq("questions_id", questionIdNum)
            .maybeSingle();

        if (selectStampError) {
            console.error("スタンプ存在チェックエラー:", selectStampError);
        }

        if (!existingStamp) {
            const { error: insertStampError } = await supabase
                .from("Stamps")
                .insert({
                    user_id: userIdStr,
                    questions_id: questionIdNum,
                    obtained: true,
                    obtained_at: new Date().toISOString(),
                });

            if (insertStampError) {
                console.error("スタンプ挿入エラー:", insertStampError);
            } else {
                stampObtained = true;
            }
        }
    }

    const message = isCorrect
        ? (stampObtained ? "正解！スタンプゲット！" : "正解！(スタンプは取得済みです)")
        : "残念...不正解";

    return NextResponse.json({
        success: true,
        is_correct: isCorrect,
        stamp_newly_obtained: stampObtained,
        message: message
    }, { status: 200 });
}