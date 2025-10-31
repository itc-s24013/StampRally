import { NextResponse } from 'next/server';
import { getUserIdSimple } from "@/lib/auth";
import supabaseAdmin from "@/lib/supabaseAdmin";

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
            error: "パラメータ不足: questionId, userAnswer, userId 必須"
        }, { status: 400 });
    }

    const questionIdNum = Number(questionId);
    const userAnswerNum = Number(userAnswer);
    const userIdStr = userId; // UUID文字列

    // --- 2. 該当の問題から正解を取得 ---
    const { data: questionData, error: questionError } = await supabaseAdmin
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

        // --- 2. 正解の場合スタンプ付与 ---
        if (isCorrect) {
            const { data: existingStamp, error: selectStampError } = await supabaseAdmin
                .from("Stamps")
                .select("id")
                .eq("user_id", userId)
                .eq("questions_id", questionIdNum)
                .maybeSingle();

            if (selectStampError) {
                console.error("スタンプ存在チェックエラー:", selectStampError);
            }

            if (!existingStamp) {
                const { error: insertStampError } = await supabaseAdmin
                    .from("Stamps")
                    .insert({
                        user_id: userId,
                        questions_id: questionIdNum,
                        obtained: true,
                        obtained_at: new Date().toISOString()
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