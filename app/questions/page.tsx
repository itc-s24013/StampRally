"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { QuestionDTO } from "@/lib/types";
import LogoutBotton from "@/app/_components/LogoutBotton";

export default function QuestionsPage() {
    const [questions, setQuestions] = useState<QuestionDTO[]>([]);
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
        <main className="text-center">
            <h1 className="text-2xl font-bold mb-4">問題一覧</h1>
            {questions.map((q) => (
                <button
                    key={q.id}
                    onClick={() => router.push(`/questions/${q.id}`)}
                    className="btn border-0 w-25 h-25"
                >
                    {/*<p>{q.question_text}</p>*/}
                    <div className="card">
                        <div className="card-img bg-secondary text-white">{q.id}F</div>
                        <div className="card-body">
                            <h5 className="card-title">第{q.id}問</h5>
                        </div>
                    </div>
                </button>
            ))}
            <br/>
            <LogoutBotton/>
        </main>
    );
}









