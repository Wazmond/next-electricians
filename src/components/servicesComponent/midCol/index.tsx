import { Service } from '@/payload-types'
import React from 'react'

interface Props {
  param: number
  docs: Service[]
}
const MiddleColumn = ({ param, docs }: Props) => {
  return (
    <div className="flex flex-col h-auto w-8 bg-white">
      <span
        style={{ flex: `${param === 1 ? '0' : `${param - 1}`}  1 0%` }}
        className={`bg-light-blue rounded-br-2xl transition-all duration-150 ease-out`}
      />
      <span style={{}} className={`h-16 `} />
      <span
        style={{ flex: `${param === docs.length ? '0' : `${docs.length - param}`} 1 0%` }}
        className={`bg-light-blue rounded-tr-2xl transition-all duration-150 ease-out`}
      />
    </div>
  )
}

export default MiddleColumn
