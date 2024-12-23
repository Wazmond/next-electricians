import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'

interface Props {
  redir: string
  title: string
  setMenuState: React.Dispatch<SetStateAction<boolean>>
}
const NavButtons: React.FC<Props> = (props) => {
  return (
    <Link href={`/${props.redir}`} onClick={() => props.setMenuState(false)}>
      <div className='px-16 py-2 flex flex-row justify-between hover:bg-mono-300'>
        <h2>{props.title}</h2>
        <p>{'>'}</p>
      </div>
    </Link>
  )
}

export default NavButtons
