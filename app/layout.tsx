import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Remote Expert Jobs | Freelance Projects for Developers, Designers & Automation Experts',
  description: 'Apply for remote freelance projects across development, automation, design, marketing, no-code, CRM, AI, and virtual assistant roles. Join the Remote Expert Jobs talent network.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-navy antialiased">{children}</body>
    </html>
  )
}