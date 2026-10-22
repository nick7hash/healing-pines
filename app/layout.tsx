import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Healing Pines Ayurveda | Return to your natural rhythm',
  description: 'Personalized Ayurvedic care that heals the body, calms the mind, and restores balance.',
  generator: 'v0.app',
  icons: {
    icon: '/images/logo_pines.png',
    shortcut: '/images/logo_pines.png',
    apple: '/images/logo_pines.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/images/logo_pines.png" />
        <link rel="apple-touch-icon" href="/images/logo_pines.png" />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
