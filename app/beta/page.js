"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Beta() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [betaCode, setBetaCode] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleLogin() {
    if (!username || !betaCode) {
      setError("Kullanıcı adı ve beta kodu zorunludur.");
      return;
    }
    setStatus("loading");
    setError("");

    const res = await fetch("/api/beta/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, betaCode }),
    });
    const data = await res.json();

    if (data.success) {
      localStorage.setItem("beta_user", username);
      router.push("/beta/panel");
    } else {
      setError(data.error || "Giriş başarısız.");
      setStatus("idle");
    }
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Space+Grotesk:wght@400;500;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #0a0a0a; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px #D85A3040; }
          50% { box-shadow: 0 0 60px #D85A3080; }
        }
        .card { animation: fadeUp 0.6s ease forwards; }
        .glow-btn { animation: glow 2s ease-in-out infinite; }
        input:focus { outline: none; border-color: #D85A30 !important; }
        input::placeholder { color: #333; }
      `}</style>

      <main style={{ background: '#0a0a0a', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', fontFamily: "'Space Grotesk', sans-serif" }}>

        <div style={{ position: 'absolute', top: '30%', left: '20%', width: '300px', height: '300px', background: '#D85A3015', borderRadius: '50%', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '30%', right: '20%', width: '300px', height: '300px', background: '#1D9E7515', borderRadius: '50%', filter: 'blur(80px)' }} />

        <div className="card" style={{ background: '#0f0f0f', border: '1px solid #1a1a1a', borderRadius: '24px', padding: '3rem', maxWidth: '440px', width: '100%', position: 'relative', zIndex: 1 }}>

          <a href="/" style={{ color: '#444', fontSize: '13px', textDecoration: 'none', display: 'block', marginBottom: '2rem' }}>← Ana Sayfa</a>

          <div style={{ display: 'inline-block', background: '#D85A3020', border: '1px solid #D85A3040', color: '#F0997B', fontSize: '10px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: '100px', marginBottom: '1.5rem' }}>
            Beta Erişimi
          </div>

          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: '2.2rem', color: '#fff', marginBottom: '0.5rem', fontWeight: '400' }}>
            Beta'ya Hoş Geldiniz
          </h1>
          <p style={{ color: '#444', fontSize: '14px', marginBottom: '2.5rem', lineHeight: '1.6' }}>
            Erişim için kullanıcı adınızı ve size özel beta kodunuzu girin.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <label style={{ fontSize: '12px', color: '#555', fontWeight: '600', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>KULLANICI ADI</label>
              <input
                type="text"
                placeholder="kullaniciadi"
                value={username}
                onChange={e => setUsername(e.target.value.toLowerCase().replace(/\s/g, ''))}
                style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid #1a1a1a', background: '#111', color: '#fff', fontSize: '14px', fontFamily: 'inherit' }}
              />
            </div>
            <div>
              <label style={{ fontSize: '12px', color: '#555', fontWeight: '600', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>BETA KODU</label>
              <input
                type="text"
                placeholder="BETA001"
                value={betaCode}
                onChange={e => setBetaCode(e.target.value.toUpperCase())}
                onKeyDown={e => e.key === 'Enter' && handleLogin()}
                style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid #1a1a1a', background: '#111', color: '#fff', fontSize: '14px', fontFamily: 'inherit', letterSpacing: '0.1em' }}
              />
            </div>
          </div>

          {error && (
            <div style={{ background: '#1a0a0a', border: '1px solid #D85A3040', borderRadius: '10px', padding: '12px 16px', marginBottom: '1rem', color: '#F0997B', fontSize: '13px' }}>
              {error}
            </div>
          )}

          <button
            onClick={handleLogin}
            disabled={status === 'loading'}
            className="glow-btn"
            style={{ width: '100%', background: '#D85A30', color: '#fff', border: 'none', padding: '14px', borderRadius: '12px', fontSize: '15px', fontWeight: '700', cursor: status === 'loading' ? 'wait' : 'pointer', fontFamily: 'inherit', opacity: status === 'loading' ? 0.7 : 1 }}
          >
            {status === 'loading' ? 'Giriş yapılıyor...' : 'Beta\'ya Gir →'}
          </button>

          <p style={{ fontSize: '12px', color: '#2a2a2a', textAlign: 'center', marginTop: '1.5rem' }}>
            Beta kodunuz mu yok?{' '}
            <a href="/" style={{ color: '#333', textDecoration: 'underline' }}>Listeye katılın</a>
          </p>
        </div>
      </main>
    </>
  );
}
