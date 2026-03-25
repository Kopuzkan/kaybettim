export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Space+Grotesk:wght@400;500;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #0a0a0a; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px #D85A3040; }
          50% { box-shadow: 0 0 60px #D85A3080; }
        }
        .fade1 { animation: fadeUp 0.8s ease forwards; opacity: 0; }
        .fade2 { animation: fadeUp 0.8s ease 0.2s forwards; opacity: 0; }
        .fade3 { animation: fadeUp 0.8s ease 0.4s forwards; opacity: 0; }
        .fade4 { animation: fadeUp 0.8s ease 0.6s forwards; opacity: 0; }
        .fade5 { animation: fadeUp 0.8s ease 0.8s forwards; opacity: 0; }
        .scroll-track { animation: scroll 20s linear infinite; display: flex; width: max-content; }
        .float { animation: float 3s ease-in-out infinite; }
        .glow-btn { animation: glow 2s ease-in-out infinite; }
      `}</style>

      <main style={{ background: '#0a0a0a', color: '#fff', fontFamily: "'Space Grotesk', sans-serif", overflowX: 'hidden' }}>

        {/* HERO */}
        <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '20%', left: '10%', width: '300px', height: '300px', background: '#D85A3020', borderRadius: '50%', filter: 'blur(80px)' }} />
          <div style={{ position: 'absolute', bottom: '20%', right: '10%', width: '400px', height: '400px', background: '#1D9E7520', borderRadius: '50%', filter: 'blur(100px)' }} />

          <div className="fade1" style={{ display: 'inline-block', background: '#D85A3020', border: '1px solid #D85A3060', color: '#F0997B', fontSize: '11px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '6px 18px', borderRadius: '100px', marginBottom: '2rem' }}>
            🚀 Çok Yakında
          </div>

          <h1 className="fade2" style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(4rem, 12vw, 9rem)', fontWeight: '400', lineHeight: '1', marginBottom: '1rem', background: 'linear-gradient(135deg, #F0997B, #D85A30, #993C1D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            KAYBETTİM
          </h1>

          <p className="fade3" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', color: '#888', maxWidth: '560px', lineHeight: '1.7', marginBottom: '2.5rem' }}>
            Türkiye'nin ilk <span style={{ color: '#F0997B', fontWeight: '600' }}>kimlik doğrulamalı</span> kayıp eşya ve evcil hayvan platformu. Mahalle bazlı bildirimler, canlı harita, güvenli ödül sistemi.
          </p>

          <div className="fade4" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
            <button className="glow-btn" style={{ background: '#D85A30', color: '#fff', border: 'none', padding: '14px 32px', borderRadius: '12px', fontSize: '15px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit' }}>
              Beni Haberdar Et
            </button>
            <button style={{ background: 'transparent', color: '#888', border: '1px solid #333', padding: '14px 32px', borderRadius: '12px', fontSize: '15px', cursor: 'pointer', fontFamily: 'inherit' }}>
              Nasıl Çalışır?
            </button>
          </div>

          <div className="fade5" style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[['2.4K+', 'Beklenen Kullanıcı'], ['%78', 'Çözüm Oranı Hedefi'], ['81', 'İl Kapsama']].map(([num, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: '700', color: '#D85A30' }}>{num}</div>
                <div style={{ fontSize: '12px', color: '#555', marginTop: '4px' }}>{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SCROLL BANNER */}
        <div style={{ background: '#D85A30', padding: '16px 0', overflow: 'hidden', borderTop: '1px solid #993C1D', borderBottom: '1px solid #993C1D' }}>
          <div className="scroll-track">
            {[...Array(2)].map((_, i) => (
              <span key={i} style={{ display: 'flex', gap: '3rem', paddingRight: '3rem', whiteSpace: 'nowrap', fontSize: '13px', fontWeight: '600', letterSpacing: '0.08em', color: '#fff' }}>
                {'🐾 EVCİL HAYVAN  ·  🎒 ÇANTA  ·  🔑 ANAHTARLIK  ·  📱 TELEFON  ·  💼 EVRAK  ·  🚗 ARAÇ  ·  🏠 EV EŞYASI  ·  '.repeat(3)}
              </span>
            ))}
          </div>
        </div>

        {/* ÖZELLIKLER */}
        <section style={{ padding: '6rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ color: '#D85A30', fontSize: '12px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Neden KAYBETTİM?</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '400', color: '#fff' }}>Güvenli. Hızlı. Etkili.</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: '🛡️', title: 'Kimlik Doğrulama', desc: 'Sadece kimliği doğrulanmış kullanıcılar ilan açabilir. Dolandırıcılık sıfır.', color: '#D85A30' },
              { icon: '📍', title: 'Mahalle Bazlı Bildirim', desc: '500m-2km çevrendeki doğrulanmış kullanıcılara anında bildirim gider.', color: '#1D9E75' },
              { icon: '🗺️', title: 'Canlı Harita', desc: 'Tüm ilanları harita üzerinde gerçek zamanlı takip et.', color: '#378ADD' },
              { icon: '🏆', title: 'Ödül Sistemi', desc: 'Güvenli ödeme altyapısıyla bulan kişiye ödülünü ilet.', color: '#BA7517' },
              { icon: '🤝', title: 'İki Taraf Onayı', desc: 'Eşleşme iki taraf onaylamadan kapanmaz. Şeffaf süreç.', color: '#D4537E' },
              { icon: '⚡', title: 'Anında Eşleşme', desc: 'AI destekli eşleşme algoritması ile kayıp ilanınız saniyeler içinde yayılır.', color: '#7F77DD' },
            ].map(({ icon, title, desc, color }) => (
              <div key={title} className="float" style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '16px', padding: '2rem', transition: 'border-color 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = color + '60'}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#1a1a1a'}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{icon}</div>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#fff', marginBottom: '0.5rem' }}>{title}</h3>
                <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.6' }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* NASIL ÇALIŞIR */}
        <section style={{ padding: '6rem 2rem', background: '#0d0d0d' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ color: '#1D9E75', fontSize: '12px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Süreç</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#fff', marginBottom: '4rem' }}>3 adımda çözüm</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { n: '01', title: 'Kimliğini Doğrula', desc: 'TC kimlik no ile saniyeler içinde hesap oluştur.' },
                { n: '02', title: 'İlanını Ver', desc: 'Fotoğraf yükle, konum belirt, kategori seç. 2 dakika.' },
                { n: '03', title: 'Mahalle Ağına Ulaş', desc: 'Çevrenizdeki kullanıcılara anında bildirim gider.' },
              ].map(({ n, title, desc }) => (
                <div key={n} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', background: '#111', border: '1px solid #1a1a1a', borderRadius: '16px', padding: '1.5rem 2rem', textAlign: 'left' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#D85A3040', minWidth: '60px' }}>{n}</div>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#fff', marginBottom: '4px' }}>{title}</h3>
                    <p style={{ fontSize: '14px', color: '#555' }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '6rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '600px', background: '#D85A3015', borderRadius: '50%', filter: 'blur(100px)' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: '#fff', marginBottom: '1rem' }}>
              Kaybetmek istemiyorsun.<br />
              <span style={{ color: '#D85A30', fontStyle: 'italic' }}>Biz buldurmak istiyoruz.</span>
            </h2>
            <p style={{ color: '#555', fontSize: '15px', marginBottom: '2rem' }}>Lansman bildirimini al, ilk kullananlardan ol.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <input type="email" placeholder="e-posta adresin" style={{ padding: '14px 20px', borderRadius: '12px', border: '1px solid #333', background: '#111', color: '#fff', fontSize: '15px', width: '280px', fontFamily: 'inherit', outline: 'none' }} />
              <button className="glow-btn" style={{ background: '#D85A30', color: '#fff', border: 'none', padding: '14px 28px', borderRadius: '12px', fontSize: '15px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit' }}>
                Beni Haberdar Et
              </button>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ borderTop: '1px solid #1a1a1a', padding: '2rem', textAlign: 'center', color: '#333', fontSize: '13px' }}>
          © 2026 KAYBETTİM · Türkiye'nin Kayıp Platformu
        </footer>

      </main>
    </>
  )
}
