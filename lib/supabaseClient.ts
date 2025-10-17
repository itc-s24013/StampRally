// supabaseとの通信を担当する層
// この処理でsupabase.from('users').select('*') のようにデータを取得できる

import { createClient } from "@supabase/supabase-js";

const supabse = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default supabse