// 問題詳細を取得するAPI

import { NextRequest, NextResponse } from 'next/server';
import supabaseAdmin from '@/lib/supabaseAdmin';

type QuestionProps = {
    params: Promise<{ id: string }>
}

export async function GET(request: NextRequest, context: QuestionProps) {
    const params = await context.params
    const id = Number(params.id)
    const questionId = Number(id);
    const { data, error } = await supabaseAdmin
        .from("questions")
        .select("*")
        .eq("id", id) // ページごとの問題だけとってくる
        .single(); // 1件だけオブジェクトを取得

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(data)
}

// import { NextRequest, NextResponse } from 'next/server';
// import supabaseAdmin from '@/lib/supabaseAdmin';
//
// type QuestionProps = {
//     params: { id: string } | Promise<{ id: string }>;
// };
//
// export async function GET(request: NextRequest, { params }: QuestionProps) {
//     const resolvedParams = await params;
//     const id = Number(resolvedParams.id);
//     if (Number.isNaN(id)) {
//         return NextResponse.json({ error: 'invalid id' }, { status: 400 });
//     }
//
//     const { data, error } = await supabaseAdmin
//         .from('questions')
//         .select('*')
//         .eq('id', id)
//         .single();
//
//     if (error) {
//         return NextResponse.json({ error: error.message }, { status: 500 });
//     }
//     return NextResponse.json(data);
// }