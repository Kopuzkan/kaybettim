export async function POST(request) {
  const { email } = await request.json();

  if (!email || !email.includes('@')) {
    return Response.json({ error: 'Geçerli bir e-posta girin.' }, { status: 400 });
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'KAYBETTİM <iletisim@kaybettim.org>',
        to: email,
        subject: 'Listeye eklendiniz! 🎉',
        html: `
          <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:2rem;background:#0a0a0a;color:#fff;border-radius:16px;">
            <h1 style="color:#D85A30;font-size:2rem;margin-bottom:0.5rem;">KAYBETTİM</h1>
            <p style="color:#888;font-size:14px;margin-bottom:2rem;">Türkiye'nin kayıp platformu</p>
            <h2 style="color:#fff;font-size:1.2rem;margin-bottom:1rem;">Listeye eklendiniz! 🎉</h2>
            <p style="color:#666;font-size:14px;line-height:1.8;">
              Merhaba,<br/><br/>
              <strong style="color:#F0997B;">${email}</strong> adresiyle lansman listemize başarıyla eklendiniz.
              Platform açıldığında sizi ilk haberdar edeceğiz.<br/><br/>
              Siz kaybedin, biz buluruz! 🔍
            </p>
            <p style="color:#333;font-size:12px;margin-top:2rem;border-top:1px solid #1a1a1a;padding-top:1rem;">
              Bu e-postayı almak istemiyorsanız: iletisim@kaybettim.org
            </p>
          </div>
        `,
      }),
    });

    if (res.ok) {
      return Response.json({ success: true });
    } else {
      return Response.json({ error: 'E-posta gönderilemedi.' }, { status: 500 });
    }
  } catch {
    return Response.json({ error: 'Bir hata oluştu.' }, { status: 500 });
  }
}
