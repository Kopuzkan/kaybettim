import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function GET() {
  const { data, error } = await supabase
    .from('ilanlar')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ ilanlar: data });
}

export async function POST(request) {
  const { baslik, aciklama, kategori, konum, durum, username } = await request.json();

  if (!baslik || !konum || !username) {
    return Response.json({ error: 'Başlık, konum ve kullanıcı adı zorunludur.' }, { status: 400 });
  }

  const { error } = await supabase
    .from('ilanlar')
    .insert({ baslik, aciklama, kategori, konum, durum, username });

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ success: true });
}
