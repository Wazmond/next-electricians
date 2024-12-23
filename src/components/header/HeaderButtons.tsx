import Link from 'next/link'
import React from 'react'

interface Props {
  title: string
  page: string
}

const HeaderButtons: React.FC<Props> = ({ title, page }) => {
  return (
    <Link href={`/${page}`}>
      <div
        id="button"
        className="flex flex-col h-full justify-center group hover:cursor-pointer"
      >
        <h2 className="text-sm group-hover:text-mono-500 text-white">{title}</h2>
        <span
          className={`h-px w-full scale-x-0 transform bg-white transition-transform duration-200 ease-in-out origin-center group-hover:scale-x-100`}
        />
      </div>
    </Link>
  )
}

export default HeaderButtons
