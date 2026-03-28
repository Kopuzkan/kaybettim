"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleLogin() {
    if (!username || !password) {
      setError("Kullanıcı adı ve şifre zorunludur.");
      return;
    }
    setStatus("loading");
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();

    if (data.success) {
      localStorage.setItem("admin_user", username);
      router.push("/admin/panel");
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
        input:focus { outline: none; border-color: #7F77DD !important; }
        input::placeholder { color: #333; }
      `}</style>

      <main style={{ background: '#0a0a0a', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', fontFamily: "'Space Grotesk', sans-serif" }}>
        <div style={{ position: 'absolute', top: '30%', left: '20%', width: '300px', height: '300px', background: '#7F77DD15', borderRadius: '50%', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '30%', right: '20%', width: '300px', height: '300px', background: '#534AB715', borderRadius: '50%', filter: 'blur(80px)' }} />

        <div style={{ background: '#0f0f0f', border: '1px solid #1a1a1a', borderRadius: '24px', padding: '3rem', maxWidth: '440px', width: '100%', position: 'relative', zIndex: 1 }}>
          <a href="/" style={{ color: '#444', fontSize: '13px', textDecoration: 'none', display: 'block', marginBottom: '2rem' }}>← Ana Sayfa</a>

          <div style={{ display: 'inline-block', background: '#7F77DD20', border: '1px solid #7F77DD40', color: '#AFA9EC', fontSize: '10px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: '100px', marginBottom: '1.5rem' }}>
            Admin Paneli
          </div>

          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: '2.2rem', color: '#fff', marginBottom: '0.5rem', fontWeight: '400' }}>Yönetici Girişi</h1>
          <p style={{ color: '#444', fontSize: '14px', marginBottom: '2.5rem' }}>Bu alan yalnızca yetkili yöneticilere açıktır.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <label style={{ fontSize: '11px', color: '#555', fontWeight: '700', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>KULLANICI ADI</label>
              <input type="text" placeholder="admin" value={username} onChange={e => setUsername(e.target.value)} style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid #1a1a1a', background: '#111', color: '#fff', fontSize: '14px', fontFamily: 'inherit' }} />
            </div>
            <div>
              <label style={{ fontSize: '11px', color: '#555', fontWeight: '700', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>ŞİFRE</label>
              <input type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleLogin()} style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid #1a1a1a', background: '#111', color: '#fff', fontSize: '14px', fontFamily: 'inherit' }} />
            </div>
          </div>

          {error && (
            <div style={{ background: '#0f0a1a', border: '1px solid #7F77DD40', borderRadius: '10px', padding: '12px 16px', marginBottom: '1rem', color: '#AFA9EC', fontSize: '13px' }}>
              {error}
            </div>
          )}

          <button onClick={handleLogin} disabled={status === 'loading'} style={{ width: '100%', background: '#534AB7', color: '#fff', border: 'none', padding: '14px', borderRadius: '12px', fontSize: '15px', fontWeight: '700', cursor: status === 'loading' ? 'wait' : 'pointer', fontFamily: 'inherit', opacity: status === 'loading' ? 0.7 : 1 }}>
            {status === 'loading' ? 'Giriş yapılıyor...' : 'Panele Gir →'}
          </button>
        </div>
      </main>
    </>
  );
}
