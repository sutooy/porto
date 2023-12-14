import type { Metadata } from 'next'
import { Inter, Pacifico, Poppins } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin']
})

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',

})

export const metadata: Metadata = {
  title: 'Aulia Sutowijoyo',
  description: 'Portofolio',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  )
}
