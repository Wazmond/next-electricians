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
}

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default Layout
