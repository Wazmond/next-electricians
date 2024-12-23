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
      <div className="hover:bg-mono-300">
        <div className='mx-auto px-16 py-2 flex flex-row justify-between max-w-[400px]'>
          <h2>{props.title}</h2>
          <p>{'>'}</p>
        </div>
      </div>
    </Link>
  )
}

export default NavButtons
