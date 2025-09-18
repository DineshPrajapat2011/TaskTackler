import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Task Tackler — Freelance made easy',
  description: 'Post tasks, find talent, and get work done with Task Tackler.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container-responsive py-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
