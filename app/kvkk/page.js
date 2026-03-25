export default function KVKK() {
  return (
    <main style={{ background: '#0a0a0a', color: '#fff', fontFamily: 'system-ui, sans-serif', minHeight: '100vh', padding: '5rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
      <a href="/" style={{ color: '#D85A30', fontSize: '14px', textDecoration: 'none', display: 'block', marginBottom: '3rem' }}>← Ana Sayfa</a>
      <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>Gizlilik Politikası</h1>
      <h2 style={{ fontSize: '1rem', color: '#555', fontWeight: '400', marginBottom: '3rem' }}>KVKK Aydınlatma Metni</h2>

      {[
        { title: '1. Veri Sorumlusu', text: 'KAYBETTİM platformu, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında veri sorumlusu sıfatıyla hareket etmektedir.' },
        { title: '2. Toplanan Veriler', text: 'Lansman bildirimi kaydı sırasında yalnızca e-posta adresiniz toplanmaktadır. Platform açıldığında; ad-soyad, T.C. kimlik numarası ve konum bilgisi de işlenebilecektir.' },
        { title: '3. Verilerin İşlenme Amacı', text: 'Toplanan e-posta adresi yalnızca lansman duyurusu göndermek amacıyla kullanılmaktadır. Pazarlama, profilleme veya üçüncü taraf paylaşımı yapılmamaktadır.' },
        { title: '4. Verilerin Aktarılması', text: 'Kişisel verileriniz; e-posta gönderim altyapısı dışında hiçbir üçüncü tarafla paylaşılmamakta, yurt dışına aktarılmamaktadır.' },
        { title: '5. Saklama Süresi', text: 'E-posta adresiniz, aboneliğinizi iptal ettiğiniz anda sistemden kalıcı olarak silinmektedir.' },
        { title: '6. Haklarınız', text: 'KVKK\'nın 11. maddesi uyarınca; verilerinize erişme, düzeltme, silme, işlemeyi kısıtlama ve itiraz etme haklarına sahipsiniz. Talepleriniz için iletişim@kaybettim.org adresine yazabilirsiniz.' },
        { title: '7. İletişim', text: 'Gizlilik politikamıza ilişkin sorularınız için: iletisim@kaybettim.org' },
      ].map(({ title, text }) => (
        <div key={title} style={{ marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#D85A30', marginBottom: '0.75rem' }}>{title}</h3>
          <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.8' }}>{text}</p>
        </div>
      ))}

      <p style={{ fontSize: '12px', color: '#333', marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #1a1a1a' }}>
        Son güncelleme: Mart 2026 · © 2026 KAYBETTİM
      </p>
    </main>
  )
}
