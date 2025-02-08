import React, { ReactNode } from 'react'
import { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Header from './ui/header'
import Footer from './ui/footer'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = {
  title: {
    default: 'NextElectricians',
    template: '%s | NextElectricians',
  },
  description: 'NextElectricians website',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  viewportFit: 'cover',
}

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body className="flex flex-col overflow-y-scroll bg-mono-50 ">
        <SpeedInsights />
        <Analytics />
        <Header />
        <main className="flex flex-1 flex-col">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}

export default Layout
