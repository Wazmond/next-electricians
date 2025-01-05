import { ReactNode } from 'react'
import { Metadata } from 'next'
import '../globals.css'
import { Header } from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: {
    default: 'NextElectricians',
    template: '%s | NextElectricians',
  },
  description: 'NextElectricians website',
  viewport: {
    width: 'device-width',
    initialScale: 1.0,
    viewportFit: 'cover', // For iOS devices with notches
  },
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
