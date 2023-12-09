import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Poppins({
  weight: '400',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Aulia Sutowijoyo',
  description: 'Portofolio',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
