export default function KVKK() {
  return (
    <main style={{ background: '#0a0a0a', color: '#fff', fontFamily: 'system-ui, sans-serif', minHeight: '100vh', padding: '5rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
      <a href="/" style={{ color: '#D85A30', fontSize: '14px', textDecoration: 'none', display: 'block', marginBottom: '3rem' }}>← Ana Sayfa</a>

      <h1 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '0.5rem', lineHeight: '1.3' }}>KAYBETTİM Platformu Gizlilik Politikası ve KVKK Aydınlatma Metni</h1>
      <p style={{ fontSize: '13px', color: '#444', marginBottom: '3rem' }}>Son güncelleme: Mart 2026</p>

      <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.9', marginBottom: '3rem' }}>
        İşbu Aydınlatma Metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, <strong style={{ color: '#fff' }}>KAYBETTİM</strong> (bundan sonra "Platform" olarak anılacaktır) tarafından veri sorumlusu sıfatıyla, kullanıcıların kişisel verilerinin işlenme amaçları, hukuki sebepleri, toplanma yöntemleri ve veri sahiplerinin hakları konusunda şeffaflık sağlamak amacıyla hazırlanmıştır.
      </p>

      {[
        {
          title: '1. Veri Sorumlusunun Kimliği',
          content: 'Veri Sorumlusu sıfatıyla hareket eden Platform, kişisel verilerinizin güvenliğini sağlamak amacıyla gerekli teknik ve idari tedbirleri en üst düzeyde almaktadır. İletişim: iletisim@kaybettim.org'
        },
        {
          title: '2. İşlenen Kişisel Veri Kategorileri ve Toplanma Yöntemleri',
          content: null,
          list: [
            { label: 'İletişim Verileri:', text: 'E-posta adresi.' },
            { label: 'Kimlik Verileri (Platform Açıldığında):', text: 'Ad-soyad, T.C. Kimlik Numarası (doğrulama amaçlı).' },
            { label: 'Lokasyon Verileri:', text: 'Kayıp/buluntu eşya bildirimleri kapsamında alınan konum bilgisi.' },
            { label: 'İşlem Güvenliği Verileri:', text: 'IP adresi, log kayıtları, cihaz bilgileri ve çerez (cookie) kayıtları.' },
          ],
          intro: 'Platformumuzla kurduğunuz ilişki kapsamında aşağıdaki veriler tam veya kısmi otomatik yöntemlerle, dijital formlar aracılığıyla toplanmaktadır:'
        },
        {
          title: '3. Kişisel Verilerin İşlenme Amaçları ve Hukuki Sebepler',
          content: null,
          intro: "Verileriniz, KVKK'nın 5. ve 6. maddelerinde belirtilen şartlar dahilinde şu amaçlarla işlenmektedir:",
          list: [
            { label: 'Lansman ve Duyuru Süreçleri:', text: 'Platformun açılış sürecine dair bilgilendirme yapılması.' },
            { label: 'Hizmetin İfası:', text: 'Kayıp eşya ilanlarının oluşturulması ve eşleşmelerin sağlanması.' },
            { label: 'Hukuki Yükümlülüklerin Yerine Getirilmesi:', text: '5651 sayılı Kanun kapsamında trafik bilgilerinin tutulması.' },
            { label: 'Meşru Menfaat:', text: 'Platformun güvenliğinin sağlanması, suistimallerin önlenmesi ve hizmet kalitesinin artırılması.' },
          ]
        },
        {
          title: '4. Kişisel Verilerin Aktarılması ve Paylaşım İlkeleri',
          content: null,
          intro: 'Kişisel verileriniz "bilme gereği" ve "amaçla sınırlılık" ilkeleri çerçevesinde;',
          list: [
            { label: '', text: 'Yalnızca e-posta gönderim altyapısı sağlayan yerli hizmet sağlayıcılarına (teknik zorunluluk gereği),' },
            { label: '', text: 'Yetkili kamu kurum ve kuruluşlarına (talep halinde ve hukuki zorunluluk sınırları içerisinde) aktarılabilir.' },
            { label: 'Önemli Not:', text: 'Verileriniz reklam, profilleme veya ticari kazanç amacıyla üçüncü taraf veri borsalarıyla kesinlikle paylaşılmamaktadır.' },
          ]
        },
        {
          title: '5. Veri Saklama ve İmha Politikası',
          content: 'Kişisel verileriniz, işlenme amacının gerektirdiği süre boyunca veya ilgili mevzuatta öngörülen kanuni zamanaşımı süreleri uyarınca saklanır. E-posta aboneliğinden ayrılmanız veya üyeliğinizi silmeniz durumunda, verileriniz KVKK ve Kişisel Verilerin Silinmesi, Yok Edilmesi veya Anonim Hale Getirilmesi Hakkında Yönetmelik uyarınca ilk imha periyodunda sistemden kalıcı olarak silinir.'
        },
        {
          title: '6. Çerezler (Cookies) ve İzleme Teknolojileri',
          content: 'Platform, kullanıcı deneyimini iyileştirmek ve site trafiğini analiz etmek amacıyla teknik çerezler kullanmaktadır. Tarayıcı ayarlarınız üzerinden çerezleri yönetme hakkına sahipsiniz.'
        },
        {
          title: '7. Veri Sahibinin Hakları (KVKK Madde 11)',
          content: null,
          intro: 'KVKK uyarınca herkes, veri sorumlusuna başvurarak kendisiyle ilgili;',
          list: [
            { label: '', text: 'Kişisel veri işlenip işlenmediğini öğrenme,' },
            { label: '', text: 'İşlenmişse buna ilişkin bilgi talep etme,' },
            { label: '', text: 'İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,' },
            { label: '', text: 'Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,' },
            { label: '', text: 'Eksik veya yanlış işlenmişse düzeltilmesini isteme,' },
            { label: '', text: "Kanunun 7. maddesinde öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme haklarına sahiptir." },
          ]
        },
        {
          title: '8. Başvuru ve İletişim',
          content: 'Yukarıda belirtilen haklarınızı kullanmak için, kimliğinizi teyit edici belgelerle birlikte talebinizi iletisim@kaybettim.org adresine güvenli elektronik imza veya platformumuza daha önce bildirdiğiniz e-posta adresiniz üzerinden iletebilirsiniz. Başvurularınız en geç 30 gün içinde ücretsiz olarak sonuçlandırılacaktır.'
        },
      ].map(({ title, content, list, intro }) => (
        <div key={title} style={{ marginBottom: '3rem', paddingBottom: '3rem', borderBottom: '1px solid #111' }}>
          <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#D85A30', marginBottom: '1rem' }}>{title}</h2>
          {intro && <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.8', marginBottom: '1rem' }}>{intro}</p>}
          {content && <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.8' }}>{content}</p>}
          {list && (
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {list.map(({ label, text }, i) => (
                <li key={i} style={{ fontSize: '14px', color: '#666', lineHeight: '1.8', paddingLeft: '1rem', borderLeft: '2px solid #D85A3030' }}>
                  {label && <strong style={{ color: '#aaa' }}>{label} </strong>}{text}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <div style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '12px', padding: '1.5rem', marginTop: '2rem' }}>
        <p style={{ fontSize: '12px', color: '#444', lineHeight: '1.8' }}>
          <strong style={{ color: '#555' }}>Not:</strong> Platformun operasyonel süreçleri değiştikçe (ödeme sistemi eklenmesi, farklı veri türlerinin toplanması vb.) metnin bir hukuk müşaviri tarafından güncellenecektir.
        </p>
      </div>

      <footer style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #111', textAlign: 'center' }}>
        <p style={{ color: '#D85A30', fontFamily: 'Georgia, serif', fontSize: '1.2rem', marginBottom: '0.5rem' }}>KAYBETTİM</p>
        <p style={{ color: '#222', fontSize: '12px' }}>2026 KAYBETTİM · Tüm hakları ANAKRON DİGİTAL adına saklıdır</p>
      </footer>
    </main>
  )
}
