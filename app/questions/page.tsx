"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { QuestionDTO } from "@/lib/types";
import LogoutBotton from "@/app/_components/LogoutBotton";
import Image from "next/image";

export type Stamp = {
    id: number;
    result: boolean
}

const stamps: Stamp[] = [
    { id: 1, result: true },
    { id: 2, result: false },
    { id: 3, result: true },
    { id: 4, result: true },
    { id: 5, result: false },
    { id: 6, result: true },
    { id: 7, result: false },
    { id: 8, result: true },
    { id: 9, result: true },
    { id: 10, result: false },
    { id: 11, result: true },
    { id: 12, result: false },
];

export default function QuestionsPage() {
    const [questions, setQuestions] = useState<QuestionDTO[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchQuestions = async () => {
            const res = await fetch("/api/questionRegistry"); // Supabaseから取るAPI
            const data = await res.json();
            console.dir(data)
            setQuestions(data || []);
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
                    onClick={() => {
                        if(stamps[(q.id)-1].result) {return}
                        router.push(`/questions/${q.id}`)}}
                    className="btn border-0 w-25 h-25"
                >
                    {/*<p>{q.question_text}</p>*/}
                    <div className="card">
                        <div className={`card-img ${stamps[(q.id)-1].result ? "bg-success-subtle" :""} text-muted`}>
                            {q.id}F
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