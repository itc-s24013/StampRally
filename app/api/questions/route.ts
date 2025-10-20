// 問題一覧を取得するAPI

import { NextResponse } from 'next/server';
import supabase from '@/lib/supabaseClient';

export async function GET() {
    const { data, error } = await supabase.from("questions").select("id");
    // スタンプ取得の処理もかく予定

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    console.log(data);
    return NextResponse.json(data)
}