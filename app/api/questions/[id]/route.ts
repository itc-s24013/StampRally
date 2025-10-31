// 問題詳細を取得するAPI

import { NextResponse } from 'next/server';
import supabaseAdmin from '@/lib/supabaseAdmin';

type QuestionProps = {
    params:{
        id: number; // 問題ID
    }
}

export async function GET({ params }: QuestionProps) {
    const { id } = params;
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