"use client"

import React, { useState } from "react"
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
        formData.append("userId", "00000000-0000-0000-0000-000000000000");

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
            <p style={{fontSize:"1.2rem", margin: "1rem 0"}}>{data.question_text}</p>
            <form onSubmit={handleSubmit}>
                <input type="hidden" name="id" value={data.id} />
                <label style={{ display: "block", marginBottom: "8px" }}>
                    <input type="radio" name="answer" value="1" checked={selected==="1"} onChange={handleChange} className="form-check-input"/> {data.option_a}
                </label>
                <label style={{ display: "block", marginBottom: "8px" }}>
                    <input type="radio" name="answer" value="2" checked={selected==="2"} onChange={handleChange} className="form-check-input"/> {data.option_b}
                </label>
                <label style={{ display: "block", marginBottom: "8px" }}>
                    <input type="radio" name="answer" value="3" checked={selected==="3"} onChange={handleChange} className="form-check-input"/> {data.option_c}
                </label>
                <label style={{ display: "block", marginBottom: "8px" }}>
                    <input type="radio" name="answer" value="4" checked={selected==="4"} onChange={handleChange} className="form-check-input"/> {data.option_d}
                </label>
                <BackListButton onClick={() => router.push('http://localhost:3000/questions')} />
                <button
                    type="submit"
                    className="btn btn-outline-primary"
                    disabled={!selected}
                >
                    回答を送信
                </button>
            </form>
            {result && (
                <div style={{marginTop: "1rem", fontWeight: "bold"}}>
                    {result}
                </div>
            )}
        </main>
    )
}