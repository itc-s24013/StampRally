"use client"

type dataType = {
    data: {
        id: number,
        question_text: string,
        correct_answer: string,
        option_a: string,
        option_b: string,
        option_c: string,
        option_d: string,
    }
}

export default function AnswerForm({data}: dataType) {
    const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault(); // ページリロードを防ぐ

        // 1. ボタンが属するフォーム要素を取得
        const form = e.currentTarget.form;
        if (!form) {
            console.log("エラー: フォーム要素が見つかりません。");
            return;
        }

        // 2. FormData APIを使ってフォーム内の全データを取得
        const formData = new FormData(form);

        // 3. name="answer" の値（選択されたラジオボタンのvalue）を抽出
        const selectedAnswerValue = formData.get("answer") as string | null;

        if (selectedAnswerValue) {
            // 取得した値をコンソールに出力
            console.log("✅ 取得した選択値 (value):", selectedAnswerValue);
        } else {
            console.log("ラジオボタンが選択されていません。");
        }
    }

    return (
        <main style={{ padding: "2rem" }}>
    <h1>問題 {data.id}</h1>
    <p style={{fontSize:"1.2rem", margin: "1rem 0"}}>{data.question_text}</p>
    <form action="/api/answer" method="POST">
    <input type="hidden" name="id" value={data.id} />

    <label style={{ display: "block", marginBottom: "8px" }}>
    <input type="radio" name="answer" value="1" /> {data.option_a}
        </label>
        <label style={{ display: "block", marginBottom: "8px" }}>
    <input type="radio" name="answer" value="2" /> {data.option_b}
        </label>
        <label style={{ display: "block", marginBottom: "8px" }}>
    <input type="radio" name="answer" value="3" /> {data.option_c}
        </label>
        <label style={{ display: "block", marginBottom: "8px" }}>
    <input type="radio" name="answer" value="4" /> {data.option_d}
        </label>

        <button
    type="submit"
    style={{ display: "block", marginTop: "1rem" }}
    onClick={handleSubmit}
        >
        回答を送信
        </button>
        </form>
        </main>
    )
}