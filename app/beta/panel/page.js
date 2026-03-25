"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BetaPanel() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [ilanlar, setIlanlar] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    baslik: "",
    aciklama: "",
    kategori: "evcil-hayvan",
    konum: "",
    durum: "kayip"
  });
  const [formStatus, setFormStatus] = useState("idle");

  useEffect(() => {
    const user = localStorage.getItem("beta_user");
    if (!user) {
      router.push("/beta");
      return;
    }
    setUsername(user);
    fetchIlanlar();
  }, []);

  async function fetchIlanlar() {
    const res = await fetch("/api/beta/ilanlar");
    const data = await res.json();
    setIlanlar(data.ilanlar || []);
    setLoading(false);
  }

  async function handleSubmit() {
    if (!form.baslik || !form.konum) {
      alert("Başlık ve konum zorunludur.");
      return;
    }
    setFormStatus("loading");
    const res = await fetch("/api/beta/ilanlar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, username }),
    });
    const data = await res.json();
    if (data.success) {
      setFormStatus("idle");
      setShowForm(false);
      setForm({ baslik: "", aciklama: "", kategori: "evcil-hayvan", konum: "", durum: "kayip" });
      fetchIlanlar();
    } else {
      setFormStatus("idle");
      alert("Hata oluştu.");
    }
  }

  const kategoriler = {
    "evcil-hayvan": "🐾 Evcil Hayvan",
    "canta": "🎒 Çanta",
    "anahtar": "🔑 Anahtar",
    "telefon": "📱 Telefon",
    "evrak": "💼 Evrak",
    "diger": "📦 Diğer"
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Space+Grotesk:wght@400;500;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #0a0a0a; }
        input, textarea, select { outline: none; }
        input:focus, textarea:focus, select:focus { border-color: #D85A30 !important; }
        input::placeholder, textarea::placeholder { color: #333; }
      `}</style>

      <main style={{ background: '#0a0a0a', minHeight: '100vh', fontFamily: "'Space Grotesk', sans-serif", color: '#fff' }}>

        {/* NAVBAR */}
        <nav style={{ borderBottom: '1px solid #111', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: '1.5rem', color: '#D85A30' }}>KAYBETTİM</span>
            <span style={{ background: '#D85A3020', border: '1px solid #D85A3040', color: '#F0997B', fontSize: '10px', fontWeight: '700', letterSpacing: '0.1em', padding: '3px 10px', borderRadius: '100px' }}>BETA</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '13px', color: '#555' }}>@{username}</span>
            <button onClick={() => { localStorage.removeItem("beta_user"); router.push("/beta"); }} style={{ background: 'transparent', border: '1px solid #1a1a1a', color: '#444', padding: '6px 14px', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', fontFamily: 'inherit' }}>
              Çıkış
            </button>
          </div>
        </nav>

        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '3rem 2rem' }}>

          {/* BAŞLIK */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: '2rem', color: '#fff', fontWeight: '400' }}>Hoş geldiniz, <span style={{ color: '#D85A30' }}>{username}</span></h1>
              <p style={{ color: '#444', fontSize: '14px', marginTop: '4px' }}>Beta paneline erişiyorsunuz. İlan oluşturabilir ve tüm ilanları görebilirsiniz.</p>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              style={{ background: '#D85A30', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: '12px', fontSize: '14px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit' }}
            >
              {showForm ? '✕ İptal' : '+ Yeni İlan'}
            </button>
          </div>

          {/* İLAN FORMU */}
          {showForm && (
            <div style={{ background: '#0f0f0f', border: '1px solid #1a1a1a', borderRadius: '20px', padding: '2rem', marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '1.5rem', color: '#fff' }}>Yeni İlan Oluştur</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{ fontSize: '11px', color: '#555', fontWeight: '700', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>BAŞLIK *</label>
                  <input type="text" placeholder="Örn: Turuncu kedi kaybettim" value={form.baslik} onChange={e => setForm({ ...form, baslik: e.target.value })} style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #1a1a1a', background: '#111', color: '#fff', fontSize: '14px', fontFamily: 'inherit' }} />
                </div>
                <div>
                  <label style={{ fontSize: '11px', color: '#555', fontWeight: '700', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>KATEGORİ</label>
                  <select value={form.kategori} onChange={e => setForm({ ...form, kategori: e.target.value })} style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #1a1a1a', background: '#111', color: '#fff', fontSize: '14px', fontFamily: 'inherit' }}>
                    {Object.entries(kategoriler).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: '11px', color: '#555', fontWeight: '700', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>DURUM</label>
                  <select value={form.durum} onChange={e => setForm({ ...form, durum: e.target.value })} style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #1a1a1a', background: '#111', color: '#fff', fontSize: '14px', fontFamily: 'inherit' }}>
                    <option value="kayip">Kayıp</option>
                    <option value="bulundu">Bulundu</option>
                  </select>
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{ fontSize: '11px', color: '#555', fontWeight: '700', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>KONUM *</label>
                  <input type="text" placeholder="Örn: Çankaya, Ankara" value={form.konum} onChange={e => setForm({ ...form, konum: e.target.value })} style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #1a1a1a', background: '#111', color: '#fff', fontSize: '14px', fontFamily: 'inherit' }} />
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{ fontSize: '11px', color: '#555', fontWeight: '700', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>AÇIKLAMA</label>
                  <textarea placeholder="Detayları buraya yazın..." value={form.aciklama} onChange={e => setForm({ ...form, aciklama: e.target.value })} rows={3} style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #1a1a1a', background: '#111', color: '#fff', fontSize: '14px', fontFamily: 'inherit', resize: 'vertical' }} />
                </div>
              </div>
              <button onClick={handleSubmit} disabled={formStatus === 'loading'} style={{ marginTop: '1.5rem', background: '#D85A30', color: '#fff', border: 'none', padding: '12px 28px', borderRadius: '10px', fontSize: '14px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit', opacity: formStatus === 'loading' ? 0.7 : 1 }}>
                {formStatus === 'loading' ? 'Yayınlanıyor...' : 'İlanı Yayınla →'}
              </button>
            </div>
          )}

          {/* İLANLAR */}
          <div>
            <h2 style={{ fontSize: '14px', fontWeight: '700', color: '#444', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              Tüm İlanlar {!loading && `(${ilanlar.length})`}
            </h2>
            {loading ? (
              <p style={{ color: '#333', fontSize: '14px' }}>Yükleniyor...</p>
            ) : ilanlar.length === 0 ? (
              <div style={{ background: '#0f0f0f', border: '1px solid #111', borderRadius: '16px', padding: '3rem', textAlign: 'center' }}>
                <p style={{ color: '#333', fontSize: '14px' }}>Henüz ilan yok. İlk ilanı sen oluştur!</p>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
                {ilanlar.map(ilan => (
                  <div key={ilan.id} style={{ background: '#0f0f0f', border: '1px solid #1a1a1a', borderRadius: '16px', padding: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                      <span style={{ fontSize: '1.5rem' }}>{kategoriler[ilan.kategori]?.split(' ')[0] || '📦'}</span>
                      <span style={{ background: ilan.durum === 'kayip' ? '#D85A3020' : '#1D9E7520', color: ilan.durum === 'kayip' ? '#F0997B' : '#5DCAA5', fontSize: '10px', fontWeight: '700', padding: '3px 10px', borderRadius: '100px', textTransform: 'uppercase' }}>
                        {ilan.durum === 'kayip' ? 'Kayıp' : 'Bulundu'}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#fff', marginBottom: '0.5rem' }}>{ilan.baslik}</h3>
                    {ilan.aciklama && <p style={{ fontSize: '13px', color: '#555', lineHeight: '1.6', marginBottom: '0.75rem' }}>{ilan.aciklama}</p>}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #111' }}>
                      <span style={{ fontSize: '12px', color: '#444' }}>📍 {ilan.konum}</span>
                      <span style={{ fontSize: '11px', color: '#333' }}>@{ilan.username}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
