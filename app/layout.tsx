import type { Metadata } from 'next'
import './globals.css'
import MetaPixel from './components/Metapixel'
import { Analytics } from "@vercel/analytics/next"

const SITE_URL = 'https://apply.aventiraadmissionsconsulting.com/' // ← replace with your real domain

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: 'Aventira Admissions Consulting',
    template: '%s | Aventira Admissions Consulting',
  },
  description:
    'From Who You Are to Where You Belong. We help students build clear, differentiated college applications that top schools understand and accept.',

  keywords: [
    'college admissions consulting',
    'admissions strategy',
    'college application help',
    'admissions counselor',
    'scholarship consulting',
  ],

  authors: [{ name: 'Aventira Admissions Consulting' }],
  creator: 'Aventira Admissions Consulting',
  publisher: 'Aventira Admissions Consulting',

  // ── Open Graph (Facebook, LinkedIn, WhatsApp previews) ──────────
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Aventira Admissions Consulting',
    title: 'Aventira Admissions Consulting',
    description: 'From Who You Are to Where You Belong.',
    images: [
      {
        url: '/aventira-logo.png', // ← add a 1200x630 image to /public
        width: 1200,
        height: 630,
        alt: 'Aventira Admissions Consulting',
      },
    ],
  },

  // ── Twitter/X card ────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Aventira Admissions Consulting',
    description: 'From Who You Are to Where You Belong.',
    images: ['/aventira-logo.png'],
  },

  // ── Search engine directives ─────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ── Icons ─────────────────────────────────────────────────────
  icons: {
    icon: '/favicon.ico',
    shortcut: '/aventira-logo.png',
    apple: '/aventira-logo.png',
  },

  // ── Canonical URL ─────────────────────────────────────────────
  alternates: {
    canonical: SITE_URL,
  },

  // ── Meta verification tags (add if/when you get these) ────────
  // verification: {
  //   google: 'your-google-search-console-code',
  // },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <MetaPixel />
        {children}
        <Analytics />
      </body>
    </html>
  )
}