export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#fff',
      fontFamily: 'system-ui, sans-serif',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '600px' }}>
        <div style={{
          display: 'inline-block',
          background: '#FAECE7',
          color: '#993C1D',
          fontSize: '11px',
          fontWeight: '700',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          padding: '5px 16px',
          borderRadius: '100px',
          marginBottom: '1.5rem'
        }}>
          Çok Yakında
        </div>

        <h1 style={{
          fontSize: 'clamp(3rem, 8vw, 5rem)',
          fontWeight: '800',
          color: '#D85A30',
          margin: '0 0 1rem',
          lineHeight: '1'
        }}>
          KAYBETTİM
        </h1>

        <p style={{
          fontSize: '1.2rem',
          color: '#444',
          lineHeight: '1.7',
          marginBottom: '2rem'
        }}>
          Evcil hayvanınızı mı kaybettiniz? Çantanız mı çalındı? Anahtarlarınızı mı unuttunuz?
          <br /><br />
          <strong>KAYBETTİM</strong>, Türkiye'nin ilk <strong>kimlik doğrulamalı</strong> kayıp eşya ve evcil hayvan platformu.
          Güvenli, hızlı ve mahalle bazlı bildirim sistemiyle kayıplarınızı buluyoruz.
        </p>

        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}>
          {['🐾 Evcil Hayvan', '🎒 Eşya', '🔑 Anahtarlık', '📱 Telefon'].map(item => (
            <span key={item} style={{
              background: '#f5f5f5',
              padding: '8px 16px',
              borderRadius: '100px',
              fontSize: '14px',
              color: '#555'
            }}>{item}</span>
          ))}
        </div>

        <div style={{
          background: '#FAECE7',
          borderRadius: '16px',
          padding: '2rem',
          marginBottom: '2rem'
        }}>
          <p style={{ fontSize: '15px', color: '#712B13', margin: 0, lineHeight: '1.8' }}>
            ✓ Doğrulanmış kullanıcılar ile güvenli ilanlar<br />
            ✓ Mahalle bazlı anlık bildirimler<br />
            ✓ Canlı harita ile ilan takibi<br />
            ✓ Ödül sistemi ile teşvik
          </p>
        </div>

        <p style={{ fontSize: '13px', color: '#999' }}>
          Lansman için hazırlanıyoruz — yakında buradayız.
        </p>
      </div>
    </main>
  )
}
