import './globals.css'
import { Inter } from 'next/font/google'
import { generateMetadata } from '@/utils/seo'

const inter = Inter({ subsets: ['latin'] })

export const metadata = generateMetadata('', '', '/')

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-[#0b1224] text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  )
}
