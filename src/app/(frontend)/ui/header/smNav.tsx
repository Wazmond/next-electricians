import Link from 'next/link'
import React, { SetStateAction } from 'react'

interface Props {
  redir: string
  title: string
  setMenuState: React.Dispatch<SetStateAction<boolean>>
}
const NavButtons: React.FC<Props> = (props) => {
  return (
    <Link href={`/${props.redir}`} onClick={() => props.setMenuState(false)}>
      <div className="active:bg-mono-300 mx-auto py-4 text-center max-w-[400px]">
        <h2>{props.title}</h2>
      </div>
    </Link>
  )
}

export default NavButtons
