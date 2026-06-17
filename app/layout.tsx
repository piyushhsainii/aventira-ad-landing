import type { Metadata } from 'next'
import './globals.css'
import MetaPixel from './components/Metapixel'

export const metadata: Metadata = {
  title: 'Aventira Admissions Consulting',
  description: 'From Who You Are to Where You Belong.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
      <MetaPixel />
    </html>
  )
}
