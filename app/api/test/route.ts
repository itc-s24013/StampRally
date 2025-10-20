// // app/api/test/route.ts
// import supabase from "@/lib/supabaseClient";
// import { NextResponse } from "next/server";
// export async function POST() {
//     const { data, error } = await supabase
//         .from("Questions")
//         .insert([{ title: "テスト問題", content: "これはSupabase接続テストです。" }]);
//     if (error) {
//         console.error(error);
//         return NextResponse.json({ error: error.message }, { status: 500 });
//     }
//     return NextResponse.json({ success: true, data });
// }
// // :下向き指差し:これを追加！
// export async function GET() {
//     const { data, error } = await supabase
//         .from("Questions")
//         .select("*");
//     if (error) {
//         console.error(error);
//         return NextResponse.json({ error: error.message }, { status: 500 });
//     }
//     return NextResponse.json({ success: true, data });
// }

