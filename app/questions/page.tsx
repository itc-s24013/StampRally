"use client";
// 問題一覧ページ

import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";
import {useEffect, useState} from "react";

export default function QuestionMenu() {
    const router = useRouter();
    const {data: session, status} = useSession();
    const [questions, setQuestions] = useState([]);

    type Question = {
        id: string;
        title: string;
    };

    // ログインしていない場合はログインページにリダイレクト
    useEffect(() => {
        if (session) {
            // ログイン済みなら問題一覧へ
            router.push("/questions");
        }
    }, [session, router]);

    // const floors = [1, 2, 3, 4, 5, 6];
    //
    // return (
    //     // ↓styleの指定はtailwindでやってるらしい(インストールしてないからまだ反映されてない)
    //     <main className="flex flex-col items-center p-6">
    //         <h1 className="text-2xl font-bold mb-6 bg-gray-200 p-2 rounded">問題を選択してください</h1>
    //         <div className="grid grid-cols-2 gap-6">
    //             {floors.map((floor) => (
    //                 <button
    //                     key={floor}
    //                     onClick={() => router.push(`/question/${floor}`)}
    //                     className="w-32 h-32 bg-gray-300 rounded-lg flex flex-col items-center justify-center hover:bg-blue-200 transition">
    //                     <div className="bg-blue-300 w-full text-center font-bold py-1">
    //                         {floor}F
    //                     </div>
    //                 </button>
    //             ))}
    //         </div>
    //     </main>
    // );

    // 問題一覧の取得
    useEffect(() => {
        const fetchQuestions = async () => {
            const res = await fetch("/api/questions");
            const data = await res.json();
            setQuestions(data);
        };
        fetchQuestions();
    }, []);

    // ユーザーのログイン状況確認中の表示
    if (status === "loading") return <p>ログイン確認中</p>;

    return (
        <main>
            <h1>問題一覧</h1>
            <ul>
                {questions.map((q: Question) => (
                    <li key={q.id}>{q.title}</li>
                ))}
            </ul>
        </main>
    );
}
