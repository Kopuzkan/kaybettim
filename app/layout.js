export const metadata = {
  title: 'Kaybettim',
  description: 'Kayıp eşya ve evcil hayvan platformu',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}
