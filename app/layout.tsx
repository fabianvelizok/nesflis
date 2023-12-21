import type { Metadata } from 'next'
import { Roboto_Slab } from 'next/font/google'

import Providers from './providers/Providers'
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
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
