import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function POST(request) {
  const { username, password } = await request.json();

  if (!username || !password) {
    return Response.json({ error: 'Kullanıcı adı ve şifre zorunludur.' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('admins')
    .select('*')
    .eq('username', username)
    .eq('password', password)
    .single();

  if (error || !data) {
    return Response.json({ error: 'Kullanıcı adı veya şifre hatalı.' }, { status: 401 });
  }

  return Response.json({ success: true, username });
}
