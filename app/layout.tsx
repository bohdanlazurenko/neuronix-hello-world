import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Neuronix Hello World',
  description: 'A simple Next.js 14 application with TypeScript and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}