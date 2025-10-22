// ユーザー情報取得するAPI
import { NextResponse } from "next/server";
import supabase from "@/lib/supabaseClient";

// Supabaseから全ユーザーのメールアドレスを取得する
export async function GET() {
  const { data, error } = await supabase.from("Users").select("email");
  if (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ success: true, data });
}
