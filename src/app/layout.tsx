import type { Metadata } from 'next'
import './globals.css'
import NextTopLoader from 'nextjs-toploader';
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'devTemilorun | Full-Stack Web Developer',
    template: '%s | Olawuni Israel – Full-Stack Developer',
  },
  description:
    'Olawuni Israel Oluwatemilorun – Full-Stack Web Developer specializing in modern React & Next.js frontends and scalable Laravel & PHP backends. Building clean, fast, user-focused digital experiences.',

  keywords: [
    'full stack developer',
    'react developer',
    'next.js developer',
    'laravel developer',
    'web developer nigeria',
    'frontend developer',
    'tailwind css',
    'typescript',
    'modern web applications',
    'portfolio',
  ],

  authors: [
    {
      name: 'Olawuni Israel Oluwatemilorun',
      url: 'https://github.com/devTemilorun',
    },
  ],

  creator: 'Olawuni Israel Oluwatemilorun',

  openGraph: {
    title: 'Olawuni Israel Oluwatemilorun | Full-Stack Web Developer',
    description:
      'Crafting seamless front-end experiences & robust back-end systems with React • Next.js • Tailwind • Laravel • PHP',
    url: 'https://devtemilorun.netlify.app', 
    siteName: 'Olawuni Israel Portfolio',
    images: [
      {
        url: '/temilorun.jpg', 
        width: 1200,
        height: 630,
        alt: 'Olawuni Israel – Full-Stack Developer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Olawuni Israel | Full-Stack Developer',
    description:
      'Building modern web applications with React, Next.js, Tailwind CSS, Laravel & PHP.',
    creator: '@dev_Temilorun',
    images: ['/temilorun.jpg'],
  },

  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },

  alternates: {
    canonical: 'https://devtemilorun.netlify.app',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo.png" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="theme-color" content="#4f46e5" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#111827" media="(prefers-color-scheme: dark)" />
      </head>

      <body className="antialiased min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <NextTopLoader
          color="#2563eb"           
          initialPosition={0}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={300}
          shadow="0 0 10px #2563eb,0 0 5px #2563eb"
        />
        
        {children}
        <Footer />
      </body>
    </html>
  )
}