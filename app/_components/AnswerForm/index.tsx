"use client"

import React, { useState } from "react"
import { useSession } from "next-auth/react"
import {BackListButton} from "@/app/_components/BackListButton";
import { QuestionDTO } from '@/lib/types';
import { useRouter } from 'next/navigation'

// 問題テーブルの型定義　正答をフロントに含んだらだめらしい
interface AnswerFormProps {
    question: QuestionDTO;
    userId: string;
}

export default function AnswerForm({question, userId}: AnswerFormProps) {
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

        // userId が無ければ送信しない
        if (!userId) {
            setResult("ユーザーIDが取得できません。ログインしてください。");
            return;
        }

        const formData = new FormData();
        formData.append("questionId", String(question.id));
        formData.append("userAnswer", selected);
        // 仮のUUID（本番は認証情報から取得してください）
        formData.append("userId", userId);

        try {
            const res = await fetch("/api/record/answer", {
                method: "POST",
                body: formData,
            });
            const json = await res.json();
            if (json.success) {
                if(!json.is_correct) {
                    router.push('/questions/incorrect')
                    return;
                }
                router.push('/questions/correct')
            } else {
                setResult(json.error || "エラーが発生しました");
            }
        } catch (err) {
            setResult("通信エラー");
        }
    }

    return (
        <main className="text-center">
            <h1>🫟問題 {question.id}🫟</h1>
            <p style={{fontSize:"1.2rem", margin: "1rem 0"}}>{question.question_text}</p>
            <form onSubmit={handleSubmit}>
                <input type="hidden" name="id" value={question.id} />
                <label style={{ display: "block", marginBottom: "8px" }}>
                    <input type="radio" name="answer" value="1" checked={selected==="1"} onChange={handleChange} className="form-check-input"/> {question.option_a}
                </label>
                <label style={{ display: "block", marginBottom: "8px" }}>
                    <input type="radio" name="answer" value="2" checked={selected==="2"} onChange={handleChange} className="form-check-input"/> {question.option_b}
                </label>
                <label style={{ display: "block", marginBottom: "8px" }}>
                    <input type="radio" name="answer" value="3" checked={selected==="3"} onChange={handleChange} className="form-check-input"/> {question.option_c}
                </label>
                <label style={{ display: "block", marginBottom: "8px" }}>
                    <input type="radio" name="answer" value="4" checked={selected==="4"} onChange={handleChange} className="form-check-input"/> {question.option_d}
                </label>
                <button
                    type="submit"
                    className="btn btn-outline-primary"
                    disabled={!selected}
                >
                    回答を送信
                </button>
            </form>
            {result && <p style={{ color: "red", marginTop: "10px" }}>{result}</p>}
        </main>
    )
}