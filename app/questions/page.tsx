// app/questions/page.tsx
"use client";
import { useEffect, useState } from "react";
import {Question} from "@/lib/types";
export default function QuestionsPage() {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchQuestions = async () => {
            const res = await fetch("/api/test"); // :左向き指差し: Supabaseから取るAPI
            const data = await res.json();
            setQuestions(data.data || []);
            setLoading(false);
        };
        fetchQuestions();
    }, []);
    if (loading) return <p>読み込み中...</p>;
    return (
        <main className="p-6">
            <h1 className="text-2xl font-bold mb-4">問題一覧</h1>
            <ul className="space-y-2">
                {questions.map((q) => (
                    <li key={q.id} className="border p-3 rounded">
                        <h2>{q.title}</h2>
                        <p>{q.content}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
}









