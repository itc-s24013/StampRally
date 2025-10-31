"use client"

import React, { useState } from "react"
import { useSession } from "next-auth/react"
import {BackListButton} from "@/app/_components/BackListButton";
import { useRouter } from 'next/navigation'
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
    const [selected, setSelected] = useState<string>("");
    const [result, setResult] = useState<string>("");

    const { data: session } = useSession()
    const router = useRouter()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelected(e.target.value);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult(""); // 送信前にリセット

        const formData = new FormData();
        formData.append("questionId", String(data.id));
        formData.append("userAnswer", selected);
        // 仮のUUID（本番は認証情報から取得してください）
        // formData.append("userId", "00000000-0000-0000-0000-000000000000");

        // 🔽 Google認証ユーザーIDを使用（session.user.idなど）
        const userId = session?.user?.id || "unknown-user"
        formData.append("userId", userId)


        try {
            const res = await fetch("/api/record/answer", {
                method: "POST",
                body: formData,
            });
            const json = await res.json();
            if (json.success) {
                setResult(json.message);
            } else {
                setResult(json.error || "エラーが発生しました");
            }
        } catch (err) {
            setResult("通信エラー");
        }
    }

    return (
        <main className="text-center">
            <h1>問題 {data.id}</h1>
            <p style={{ fontSize: "1.2rem", margin: "1rem 0" }}>{data.question_text}</p>
            <form onSubmit={handleSubmit}>
                <label style={{ display: "block", marginBottom: "8px" }}>
                    <input
                        type="radio"
                        name="answer"
                        value="1"
                        checked={selected === "1"}
                        onChange={handleChange}
                    />{" "}
                    {data.option_a}
                </label>
                <label style={{ display: "block", marginBottom: "8px" }}>
                    <input
                        type="radio"
                        name="answer"
                        value="2"
                        checked={selected === "2"}
                        onChange={handleChange}
                    />{" "}
                    {data.option_b}
                </label>
                <label style={{ display: "block", marginBottom: "8px" }}>
                    <input
                        type="radio"
                        name="answer"
                        value="3"
                        checked={selected === "3"}
                        onChange={handleChange}
                    />{" "}
                    {data.option_c}
                </label>
                <label style={{ display: "block", marginBottom: "8px" }}>
                    <input
                        type="radio"
                        name="answer"
                        value="4"
                        checked={selected === "4"}
                        onChange={handleChange}
                    />{" "}
                    {data.option_d}
                </label>

                <button type="submit" className="btn btn-outline-secondary mx-2" disabled={!selected}>
                    回答を送信
                </button>
                <BackListButton onClick={() => router.push("http://localhost:3000/questions")} />
            </form>

            {result && (
                <div style={{ marginTop: "1rem", fontWeight: "bold" }}>
                    {result}
                </div>
            )}
        </main>
    )
}