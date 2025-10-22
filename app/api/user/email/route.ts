// Supabaseからメールアドレスで特定のユーザーの情報を取得する
import { NextResponse } from "next/server";
import supabase from "@/lib/supabaseClient";

export async function GET_SELECT_BY_EMAIL(
  request: Request,
  { params }: { params: { email: string } }
) {
  const userEmail = params.email;
  const { data, error } = await supabase
    .from("Users")
    .select("id, email, created_at")
    .eq("email", userEmail)
    .single();
  if (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ success: true, data });
}
