"use client";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const steps = [
    { n: '01', icon: '🛡️', title: 'Kimliğinizi Doğrulayın', desc: 'T.C. kimlik numaranız ile güvenli hesap oluşturun. İşlem yalnızca birkaç saniye sürer. Verileriniz şifreli olarak saklanır.' },
    { n: '02', icon: '📸', title: 'İlanınızı Oluşturun', desc: 'Fotoğraf ekleyin, konumu belirtin ve kategori seçin. Detaylı bir ilan, bulunma ihtimalini önemli ölçüde artırır.' },
    { n: '03', icon: '📍', title: 'Topluluk Ağına Ulaşın', desc: 'İlanınız, çevrenizde kayıtlı doğrulanmış kullanıcılara anında iletilir ve canlı haritada yayınlanır.' },
  ];

  async function handleSubscribe() {
    if (!email || !email.includes('@')) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

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
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.92) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes overlayIn {
          from { opacity: 0; }
          to { opacity: 1; }
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
        .modal-overlay { animation: overlayIn 0.3s ease forwards; }
        .modal-box { animation: modalIn 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        .step-btn { background: transparent; border: 1px solid #222; color: #555; padding: 10px 20px; border-radius: 100px; font-size: 13px; cursor: pointer; font-family: inherit; transition: all 0.2s; }
        .step-btn.active { background: #D85A30; border-color: #D85A30; color: #fff; }
        .step-btn:hover { border-color: #D85A30; color: #D85A30; }
        input::placeholder { color: #444; }
        input:focus { outline: none; border-color: #D85A30 !important; }
      `}</style>

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', backdropFilter: 'blur(8px)' }}>
          <div className="modal-box" onClick={e => e.stopPropagation()} style={{ background: '#0f0f0f', border: '1px solid #222', borderRadius: '24px', padding: '3rem', maxWidth: '560px', width: '100%', position: 'relative' }}>
            <button onClick={() => setShowModal(false)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: '#1a1a1a', border: 'none', color: '#555', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>

            <p style={{ color: '#D85A30', fontSize: '11px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Kullanım Süreci</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: '2rem', color: '#fff', marginBottom: '2rem' }}>3 adımda sonuca ulaşın</h2>

            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              {steps.map((s, i) => (
                <button key={i} className={`step-btn ${activeStep === i ? 'active' : ''}`} onClick={() => setActiveStep(i)}>
                  {s.n} {s.title.split(' ')[0]}
                </button>
              ))}
            </div>

            <div style={{ background: '#151515', border: '1px solid #1a1a1a', borderRadius: '16px', padding: '2rem', minHeight: '160px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{steps[activeStep].icon}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#D85A3080', letterSpacing: '0.1em' }}>{steps[activeStep].n}</span>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#fff' }}>{steps[activeStep].title}</h3>
              </div>
              <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.8' }}>{steps[activeStep].desc}</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem' }}>
              <button onClick={() => setActiveStep(Math.max(0, activeStep - 1))} style={{ background: 'transparent', border: '1px solid #222', color: activeStep === 0 ? '#333' : '#888', padding: '10px 20px', borderRadius: '10px', cursor: activeStep === 0 ? 'default' : 'pointer', fontFamily: 'inherit', fontSize: '13px' }}>← Önceki</button>
              <div style={{ display: 'flex', gap: '6px' }}>
                {steps.map((_, i) => (
                  <div key={i} onClick={() => setActiveStep(i)} style={{ width: activeStep === i ? '20px' : '6px', height: '6px', borderRadius: '100px', background: activeStep === i ? '#D85A30' : '#2a2a2a', cursor: 'pointer', transition: 'all 0.3s' }} />
                ))}
              </div>
              {activeStep < steps.length - 1 ? (
                <button onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))} style={{ background: '#D85A30', border: 'none', color: '#fff', padding: '10px 20px', borderRadius: '10px', cursor: 'pointer', fontFamily: 'inherit', fontSize: '13px', fontWeight: '600' }}>Sonraki →</button>
              ) : (
                <button onClick={() => setShowModal(false)} style={{ background: '#1D9E75', border: 'none', color: '#fff', padding: '10px 20px', borderRadius: '10px', cursor: 'pointer', fontFamily: 'inherit', fontSize: '13px', fontWeight: '600' }}>Harika! ✓</button>
              )}
            </div>
          </div>
        </div>
      )}

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
            <button className="glow-btn" onClick={() => document.getElementById('cta').scrollIntoView({ behavior: 'smooth' })} style={{ background: '#D85A30', color: '#fff', border: 'none', padding: '14px 32px', borderRadius: '12px', fontSize: '15px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit' }}>
              Beni Haberdar Et
            </button>
            <button onClick={() => { setShowModal(true); setActiveStep(0); }} style={{ background: 'transparent', color: '#888', border: '1px solid #2a2a2a', padding: '14px 32px', borderRadius: '12px', fontSize: '15px', cursor: 'pointer', fontFamily: 'inherit' }}>
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

        {/* CTA */}
        <section id="cta" style={{ padding: '7rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '600px', background: '#D85A3012', borderRadius: '50%', filter: 'blur(100px)' }} />
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '560px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: '#fff', marginBottom: '1rem', lineHeight: '1.15' }}>
              Siz kaybedin,<br />
              <span style={{ color: '#D85A30', fontStyle: 'italic' }}>biz buluruz!</span>
            </h2>
            <p style={{ color: '#555', fontSize: '14px', marginBottom: '2rem', lineHeight: '1.7' }}>
              Lansman bildirimi almak için e-posta adresinizi bırakın. Spam göndermiyoruz; yalnızca açılış duyurusunu iletiyoruz.
            </p>

            {status === 'success' ? (
              <div style={{ background: '#0F2E1E', border: '1px solid #1D9E7540', borderRadius: '16px', padding: '2rem', color: '#5DCAA5' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎉</div>
                <p style={{ fontWeight: '700', fontSize: '16px' }}>Harika! Listeye eklendiniz.</p>
                <p style={{ fontSize: '13px', marginTop: '0.5rem', color: '#1D9E75' }}>Lansman duyurusunu e-postanızla ileteceğiz.</p>
              </div>
            ) : (
              <>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1rem' }}>
                  <input
                    type="email"
                    placeholder="ornek@eposta.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSubscribe()}
                    style={{ padding: '14px 20px', borderRadius: '12px', border: `1px solid ${status === 'error' ? '#D85A30' : '#2a2a2a'}`, background: '#111', color: '#fff', fontSize: '14px', width: '280px', fontFamily: 'inherit' }}
                  />
                  <button
                    onClick={handleSubscribe}
                    disabled={status === 'loading'}
                    className="glow-btn"
                    style={{ background: '#D85A30', color: '#fff', border: 'none', padding: '14px 28px', borderRadius: '12px', fontSize: '14px', fontWeight: '700', cursor: status === 'loading' ? 'wait' : 'pointer', fontFamily: 'inherit', opacity: status === 'loading' ? 0.7 : 1 }}
                  >
                    {status === 'loading' ? 'Gönderiliyor...' : 'Beni Haberdar Et'}
                  </button>
                </div>
                {status === 'error' && <p style={{ color: '#D85A30', fontSize: '13px', marginBottom: '1rem' }}>Geçerli bir e-posta adresi girin.</p>}
                <p style={{ fontSize: '11px', color: '#333', lineHeight: '1.7', maxWidth: '460px', margin: '0 auto' }}>
                  Bu formu doldurarak e-posta adresinizin yalnızca lansman bildirimi amacıyla işleneceğini kabul etmiş olursunuz.
                  Kişisel verileriniz üçüncü taraflarla paylaşılmaz ve 6698 sayılı{' '}
                  <a href="/kvkk" style={{ color: '#444', textDecoration: 'underline' }}>KVKK kapsamında</a> korunmaktadır.
                </p>
              </>
            )}
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ borderTop: '1px solid #111', padding: '2.5rem 2rem', textAlign: 'center' }}>
          <p style={{ color: '#D85A30', fontFamily: "'Instrument Serif', serif", fontSize: '1.5rem', marginBottom: '0.5rem' }}>KAYBETTİM</p>
          <p style={{ color: '#2a2a2a', fontSize: '12px' }}>
            © 2026 KAYBETTİM · Tüm hakları ANAKRON DİGİTAL adına saklıdır ·{' '}
            <a href="/kvkk" style={{ color: '#333', textDecoration: 'underline' }}>Gizlilik Politikası</a>{' '}·{' '}
            <a href="/kvkk" style={{ color: '#333', textDecoration: 'underline' }}>KVKK Aydınlatma Metni</a>
          </p>
        </footer>

      </main>
    </>
  )
}
