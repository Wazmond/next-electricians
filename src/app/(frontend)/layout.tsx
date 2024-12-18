import { ReactNode } from 'react'
import { Metadata } from 'next'
import '../globals.css'

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
      <body>{children}</body>
    </html>
  )
}

export default Layout
