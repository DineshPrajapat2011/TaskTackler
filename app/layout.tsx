import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Task Tackler — Freelance made easy',
  description: 'Post tasks, find talent, and get work done with Task Tackler.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1Z495KXXSZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1Z495KXXSZ');
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container-responsive py-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}