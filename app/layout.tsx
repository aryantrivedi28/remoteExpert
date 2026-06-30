import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Remote Expert Jobs | Freelance Projects for Developers, Designers & Automation Experts',
  description: 'Apply for remote freelance projects across development, automation, design, marketing, no-code, CRM, AI, and virtual assistant roles. Join the Remote Expert Jobs talent network.',
  keywords: 'remote expert jobs, remote freelance jobs, remote developer jobs, remote marketing jobs, GoHighLevel jobs, remote jobs for skilled professionals, freelance projects, talent network',
  authors: [{ name: 'Remote Expert Jobs' }],
  creator: 'Remote Expert Jobs',
  publisher: 'Remote Expert Jobs',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.remoteexpertjobs.com',
    siteName: 'Remote Expert Jobs',
    title: 'Remote Expert Jobs | Freelance Projects for Developers, Designers & Automation Experts',
    description: 'Apply for remote freelance projects across development, automation, design, marketing, no-code, CRM, AI, and virtual assistant roles. Join the Remote Expert Jobs talent network.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Remote Expert Jobs - Find Remote Freelance Projects',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Remote Expert Jobs | Freelance Projects for Developers, Designers & Automation Experts',
    description: 'Apply for remote freelance projects across development, automation, design, marketing, no-code, CRM, AI, and virtual assistant roles.',
    images: ['/twitter-image.jpg'],
    creator: '@remoteexpertjobs',
    site: '@remoteexpertjobs',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-96x96.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'Technology',
  alternates: {
    canonical: 'https://www.remoteexpertjobs.com',
    languages: {
      'en-US': 'https://www.remoteexpertjobs.com',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags for better SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#624DE3" />
        <meta name="msapplication-TileColor" content="#624DE3" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Remote Expert Jobs',
              url: 'https://www.remoteexpertjobs.com',
              logo: 'https://www.remoteexpertjobs.com/remoteExpertLogo.png',
              description: 'Remote Expert Jobs helps skilled professionals find remote freelance jobs, remote developer jobs, remote marketing jobs, GoHighLevel jobs, virtual assistant jobs, and project-based opportunities with agencies and businesses.',
              sameAs: [
                'https://twitter.com/remoteexpertjobs',
                'https://linkedin.com/company/remoteexpertjobs',
                'https://github.com/remoteexpertjobs',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'hello@remoteexpertjobs.com',
                contactType: 'Customer Support',
                availableLanguage: ['English'],
              },
            }),
          }}
        />
      </head>
      <body className="bg-white text-navy antialiased">{children}</body>
    </html>
  )
}