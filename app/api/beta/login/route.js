import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function POST(request) {
  const { username, betaCode } = await request.json();

  if (!username || !betaCode) {
    return Response.json({ error: 'Kullanıcı adı ve beta kodu zorunludur.' }, { status: 400 });
  }

  try {
    // Beta kodunu kontrol et
    const { data: code, error: codeError } = await supabase
      .from('beta_codes')
      .select('*')
      .eq('code', betaCode)
      .single();

    if (codeError || !code) {
      return Response.json({ error: 'Geçersiz beta kodu.' }, { status: 400 });
    }

    if (code.used && code.used_by !== username) {
      return Response.json({ error: 'Bu beta kodu zaten kullanılmış.' }, { status: 400 });
    }

    // Kullanıcı var mı kontrol et
    const { data: existingUser } = await supabase
      .from('beta_users')
      .select('*')
      .eq('username', username)
      .single();

    if (existingUser && existingUser.beta_code !== betaCode) {
      return Response.json({ error: 'Bu kullanıcı adı başka bir kodla kayıtlı.' }, { status: 400 });
    }

    // Kullanıcı yoksa oluştur
    if (!existingUser) {
      await supabase.from('beta_users').insert({ username, beta_code: betaCode });
      await supabase.from('beta_codes').update({ used: true, used_by: username }).eq('code', betaCode);
    }

    return Response.json({ success: true, username });
  } catch {
    return Response.json({ error: 'Bir hata oluştu.' }, { status: 500 });
  }
}
