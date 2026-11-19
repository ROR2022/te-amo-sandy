import { Analytics } from '@vercel/analytics/next'
import { Bebas_Neue, Inter } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import { MusicaFondo } from '@/components/MusicaFondo'
import './globals.css'
import { serie } from '@/data/serie'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400', variable: '--font-bebas' })

export const metadata: Metadata = {
  title: `${serie.title} — Una serie Original`,
  description: 'Una historia Original sobre encontrarse, elegirse y volver a verse en cada temporada.',
  generator: 'v0.app',
  icons: {
    icon: '/loveLogo.png',
    apple: '/loveLogo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#141414',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${bebas.variable} antialiased`}>
        {children}
        <MusicaFondo />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
