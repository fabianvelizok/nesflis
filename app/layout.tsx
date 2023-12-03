import type { Metadata } from 'next'
import { Roboto_Slab } from 'next/font/google'

import Header from '@/app/components/Header/Header'
import './globals.css'

const robotoFont = Roboto_Slab({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Youflix',
  description: 'Watch the best content on demand',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={robotoFont.className}>
        <Header username="fabianvelizok" />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
