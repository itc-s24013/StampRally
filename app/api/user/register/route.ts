// Googleアカウントを登録する
import { NextResponse } from "next/server";
import supabase from "@/lib/supabaseClient";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    const { data, error } = await supabase.from("").upsert([{ email }]);

    if (error) throw error;
    return NextResponse.json({ success: true, data });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Unknown error occurred";
    console.error("Register error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
