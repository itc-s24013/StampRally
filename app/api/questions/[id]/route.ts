// typescript
import { NextResponse, NextRequest } from 'next/server';
import supabaseAdmin from '@/lib/supabaseAdmin';

export async function GET(request: NextRequest, { params }: { params: { id: string } | Promise<{ id: string }> }) {
    const { id } = await params;
    const idNum = Number(id);

    if (Number.isNaN(idNum)) {
        return NextResponse.json({ error: 'Invalid id parameter' }, { status: 400 });
    }

    try {
        const { data, error } = await supabaseAdmin
            .from('Questions')
            .select('*')
            .eq('id', idNum)
            .single();

        if (error) {
            console.error('Supabase query error:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        if (!data) {
            return NextResponse.json({ error: 'Not found' }, { status: 404 });
        }

        return NextResponse.json(data);
    } catch (e) {
        console.error('Unexpected API error:', e);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
