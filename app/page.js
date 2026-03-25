"use client";

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
        .scroll-track { animation: scroll 20s linear infinite; display: flex; width: max-content; }
        .float { animation: float 3s ease-in-out infinite; }
        .glow-btn { animation: glow 2s ease-in-out infinite; }
        .feature-card { background: #111; border: 1px solid #1a1a1a; border-radius: 16px; padding: 2rem; transition: border-color 0.3s; }
        .feature-card:hover { border-color: rgba(216,90,48,0.4); }
        input::placeholder { color: #444; }
        input:focus { border-color: #D85A30 !important; }
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

          <p className="fade3" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: '#777', maxWidth: '580px', lineHeight: '1.8', marginBottom: '2.5rem' }}>
            Senin için kıymetli bir şey mi kayboldu? Dert etme!{' '}
            <span style={{ color: '#F0997B', fontWeight: '600' }}>Biz buradayız!</span>
          </p>

          <div className="fade4" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button className="glow-btn" style={{ background: '#D85A30', color: '#fff', border: 'none', padding: '14px 32px', borderRadius: '12px', fontSize: '15px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit' }}>
              Beni Haberdar Et
            </button>
            <button style={{ background: 'transparent', color: '#888', border: '1px solid #2a2a2a', padding: '14px 32px', borderRadius: '12px', fontSize: '15px', cursor: 'pointer', fontFamily: 'inherit' }}>
              Nasıl Çalışır?
            </button>
          </div>
        </section>

        {/* SCROLL BANNER */}
        <div style={{ background: '#D85A30', padding: '14px 0', overflow: 'hidden', borderTop: '1px solid #993C1D', borderBottom: '1px solid #993C1D' }}>
          <div className="scroll-track">
            {[...Array(2)].map((_, i) => (
              <span key={i} style={{ display: 'flex', gap: '3rem', paddingRight: '3rem', whiteSpace: 'nowrap', fontSize: '12px', fontWeight: '700', letterSpacing: '0.1em', color: '#fff', textTransform: 'uppercase' }}>
                {'🐾 Evcil Hayvan  ·  🎒 Çanta & Valiz  ·  🔑 Anahtar  ·  📱 Telefon  ·  💼 Evrak & Belge  ·  🚗 Araç  ·  🏠 Ev Eşyası  ·  '.repeat(3)}
              </span>
            ))}
          </div>
        </div>

        {/* ÖZELLİKLER */}
        <section style={{ padding: '7rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ color: '#D85A30', fontSize: '11px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Platform Avantajları</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '400', color: '#fff' }}>Güvenli. Hızlı. Etkili.</h2>
            <p style={{ color: '#555', fontSize: '15px', marginTop: '1rem', maxWidth: '500px', margin: '1rem auto 0', lineHeight: '1.7' }}>
              Geleneksel yöntemlerin aksine KAYBETTİM, doğrulama tabanlı altyapısıyla güvenliği ön planda tutar.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: '🛡️', title: 'Kimlik Doğrulama', desc: 'Yalnızca kimliği doğrulanmış kullanıcılar ilan oluşturabilir. Sahte ilan ve dolandırıcılık riski sıfıra indirilir.' },
              { icon: '📍', title: 'Mahalle Bazlı Bildirim', desc: '500 m ile 2 km arasındaki doğrulanmış kullanıcılara anlık push bildirimi iletilir.' },
              { icon: '🗺️', title: 'Canlı İlan Haritası', desc: 'Tüm ilanlar gerçek zamanlı olarak harita üzerinde görüntülenir; konum bazlı filtreleme yapılabilir.' },
              { icon: '🏆', title: 'Güvenli Ödül Sistemi', desc: 'Ödül tutarı platform altyapısında emanete alınır; eşleşme onaylanmadan ödeme gerçekleşmez.' },
              { icon: '🤝', title: 'Çift Taraflı Onay', desc: 'İlan yalnızca her iki tarafın onayı alındıktan sonra kapatılır. Şeffaf ve izlenebilir bir süreç.' },
              { icon: '⚡', title: 'Akıllı Eşleşme', desc: 'Yapay zeka destekli algoritmamız, kayıp ilanınızı anlık olarak benzer bulgularla eşleştirir.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="feature-card float">
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{icon}</div>
                <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#fff', marginBottom: '0.5rem' }}>{title}</h3>
                <p style={{ fontSize: '13px', color: '#555', lineHeight: '1.7' }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* NASIL ÇALIŞIR */}
        <section style={{ padding: '7rem 2rem', background: '#0d0d0d' }}>
          <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ color: '#1D9E75', fontSize: '11px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Kullanım Süreci</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#fff', marginBottom: '4rem' }}>3 adımda sonuca ulaşın</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { n: '01', title: 'Kimliğinizi Doğrulayın', desc: 'T.C. kimlik numaranız ile güvenli hesap oluşturun. İşlem yalnızca birkaç saniye sürer.' },
                { n: '02', title: 'İlanınızı Oluşturun', desc: 'Fotoğraf ekleyin, konumu belirtin ve kategori seçin. Detaylı bir ilan, bulunma ihtimalini artırır.' },
                { n: '03', title: 'Topluluk Ağına Ulaşın', desc: 'İlanınız, çevrenizde kayıtlı doğrulanmış kullanıcılara anında iletilir ve haritada yayınlanır.' },
              ].map(({ n, title, desc }) => (
                <div key={n} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', background: '#111', border: '1px solid #1a1a1a', borderRadius: '16px', padding: '1.75rem 2rem', textAlign: 'left' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#D85A3030', minWidth: '60px', fontFamily: "'Instrument Serif', serif" }}>{n}</div>
                  <div>
                    <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#fff', marginBottom: '5px' }}>{title}</h3>
                    <p style={{ fontSize: '13px', color: '#555', lineHeight: '1.6' }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '7rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '600px', background: '#D85A3012', borderRadius: '50%', filter: 'blur(100px)' }} />
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '560px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: '#fff', marginBottom: '1rem', lineHeight: '1.15' }}>
              Siz kaybedin,<br />
              <span style={{ color: '#D85A30', fontStyle: 'italic' }}>biz buluruz!</span>
            </h2>
            <p style={{ color: '#555', fontSize: '14px', marginBottom: '2rem', lineHeight: '1.7' }}>
              Lansman bildirimi almak için e-posta adresinizi bırakın. Spam göndermiyoruz; yalnızca açılış duyurusunu iletiyoruz.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              <input
                type="email"
                placeholder="ornek@eposta.com"
                style={{ padding: '14px 20px', borderRadius: '12px', border: '1px solid #2a2a2a', background: '#111', color: '#fff', fontSize: '14px', width: '280px', fontFamily: 'inherit', outline: 'none' }}
              />
              <button className="glow-btn" style={{ background: '#D85A30', color: '#fff', border: 'none', padding: '14px 28px', borderRadius: '12px', fontSize: '14px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit' }}>
                Beni Haberdar Et
              </button>
            </div>
            <p style={{ fontSize: '11px', color: '#333', lineHeight: '1.7', maxWidth: '460px', margin: '0 auto' }}>
              Bu formu doldurarak e-posta adresinizin yalnızca lansman bildirimi amacıyla işleneceğini kabul etmiş olursunuz.
              Kişisel verileriniz üçüncü taraflarla paylaşılmaz ve 6698 sayılı{' '}
              <a href="/kvkk" style={{ color: '#444', textDecoration: 'underline' }}>KVKK kapsamında</a> korunmaktadır.
              İstediğiniz zaman aboneliğinizi iptal edebilirsiniz.
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ borderTop: '1px solid #111', padding: '2.5rem 2rem', textAlign: 'center' }}>
          <p style={{ color: '#D85A30', fontFamily: "'Instrument Serif', serif", fontSize: '1.5rem', marginBottom: '0.5rem' }}>KAYBETTİM</p>
          <p style={{ color: '#2a2a2a', fontSize: '12px' }}>
            © 2026 KAYBETTİM · Tüm hakları saklıdır ·{' '}
            <a href="/kvkk" style={{ color: '#333', textDecoration: 'underline' }}>Gizlilik Politikası</a>{' '}·{' '}
            <a href="/kvkk" style={{ color: '#333', textDecoration: 'underline' }}>KVKK Aydınlatma Metni</a>
          </p>
        </footer>

      </main>
    </>
  )
}
