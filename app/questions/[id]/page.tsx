// 問題詳細画面
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AnswerForm from "@/app/_components/AnswerForm";

interface QuestionPageProps {
    params: Promise<{ id: string }>;
}

export default async function QuestionPage({ params }: QuestionPageProps) {
    const {id} = await params;

    const cookieStore = await cookies();
    const authCookie = cookieStore.get(`auth_question_${id}`);

    // 認証用クッキーがない場合、パスワード要求画面へリダイレクト
    if (!authCookie || !authCookie.value) {
        redirect(`/questions/${id}/auth`);
    }

    const userId = authCookie.value ?? ""; // クッキーからユーザーIDを取得

    //  Supabase から問題データを取得
    // const { data, error } = await supabase
    //     .from("Questions")
    //     .select("*")
    //     .eq("id", id)
    //     .single();

    const res = await fetch(`http://localhost:3000/api/questions/${id}`)
    const data = await res.json().catch(() => null);

    if (!res.ok) {
        console.error("❌ Supabase error:", res.status);
        return (
            <main style={{ padding: "2rem" }}>
                <h1>問題の取得に失敗しました</h1>
                <p style={{ color: "red" }}>{res.status}</p>
            </main>
        );
    }

    if (!data) {
        return (
            <main style={{ padding: "2rem" }}>
                <h1>問題が見つかりません。</h1>
            </main>
        );
    }

    return (
        <AnswerForm question={data} userId={userId!}/>
    );
}
