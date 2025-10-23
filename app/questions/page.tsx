"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Question } from "@/lib/types";
import Card from "@/app/_components/Card";

export default function QuestionsPage() {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchQuestions = async () => {
            const res = await fetch("/api/test"); // Supabaseから取るAPI
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
            <div className="grid grid-cols-2 gap-6">
                {questions.map((q) => (
                <button
                    key={q.id}
                    onClick={() => router.push(`/questions/${q.id}`)}
                    className="w-32 h-32 bg-gray-300 rounded-lg flex flex-col items-center justify-center hover:bg-blue-200 transition">
                    <div className="bg-blue-300 w-full text-center font-bold py-1">
                        {q.id}F
                    </div>
                    {/*<p>{q.question_text}</p>*/}
                    <Card id={q.id} />
                </button>
                ))}
            </div>
        </main>
    );
}









