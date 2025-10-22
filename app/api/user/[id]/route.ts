// Supabaseから特定のユーザーの情報を取得する
import { NextResponse } from "next/server";
import supabase from "@/lib/supabaseClient";

export async function GET_SELECT_BY_ID(
  request: Request,
  { params }: { params: { id: string } }
) {
  const userId = params.id;
  const { data, error } = await supabase
    .from("Users")
    .select("id, email, created_at")
    .eq("id", userId)
    .single();
  if (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ success: true, data });
}
