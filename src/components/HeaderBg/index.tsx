'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

const HeaderBg = () => {
  const pathname = usePathname()
  return <>{pathname == '/' ? null : <span className="fixed w-full h-20 bg-[rgba(46,46,46)]" />}</>
}

export default HeaderBg
