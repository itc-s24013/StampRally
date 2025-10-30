"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Question } from "@/lib/types";

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
            <h1 className="text-center">問題一覧</h1>
            {questions.map((q) => (
                <button
                    key={q.id}
                    onClick={() => router.push(`/questions/${q.id}`)}
                    className="col-12 col-sm-6 col-md-4 col-lg-4 btn"
                >
                    <div className="card">
                        <div className="card-img-top bg-primary text-white">{q.id}F</div>
                        <div className="card-body">
                            <h5 className="card-title">第{q.id}問</h5>
                        </div>
                    </div>
                </button>
            ))}
        </main>
    );
}









