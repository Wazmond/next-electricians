import { ReactNode } from 'react'
import { Metadata, Viewport } from 'next'
import './globals.css'
import Header from './ui/header'
import Footer from './ui/footer'

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
      <body className="overflow-y-scroll">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default Layout
