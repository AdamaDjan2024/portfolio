import './globals.css'
import { Manrope } from 'next/font/google'
import { generateMetadata } from '@/utils/seo'

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

export const metadata = generateMetadata('', '', '/')

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${manrope.className} bg-[#0b1224] text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  )
}
