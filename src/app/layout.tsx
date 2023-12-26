import type { Metadata } from 'next'
import { Inter, Pacifico, Poppins } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
import { noticia } from './font'

export const metadata: Metadata = {
  title: 'Aulia Sutowijoyo',
  description: 'Portofolio',
}
// ${noticia.className}
export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={`${noticia.className} h-screen`}>
        {children}
      </body>
    </html>
  )
}
