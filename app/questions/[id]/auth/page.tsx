// パスワード認証画面

"use client";

import { use } from "react";
import { useState } from "react"; // パスワード入力とエラーメッセージの状態管理
import { useRouter } from "next/navigation";

interface PasswordAuthPageProps {
    params: Promise<{ id: string }>;
}

export default function PasswordAuthPage({ params }: PasswordAuthPageProps) {
    const resolvedParams = use(params);
    const router = useRouter(); // ページ遷移に使用するルーターの取得

    const [password, setPassword] = useState(""); // ホーム入力されたパス
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // ページリロードを防ぐ

        // api/questions/checkへPOST送信
        const res = await fetch("/api/questions/check", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: resolvedParams.id, password }),
        });

        // APIレスポンスを取得
        const data = await res.json();

        if (res.ok && data.success) {
            // 認証成功 → 問題ページへ遷移
            router.push(`/questions/${resolvedParams.id}`);
        } else {
            // 認証失敗 → エラーメッセージ表示
            setErrorMessage(data.message || "パスワードが違います");
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "60px" }}>
            <h2>{resolvedParams.id} 階の問題パスワードを入力してください</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="パスワード"
                />
                <button type="submit" style={{ marginLeft: "10px" }}>確定</button>
            </form>
            {errorMessage && <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>}
        </div>
    );
}