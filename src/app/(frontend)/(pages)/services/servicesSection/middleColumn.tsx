'use client'
import { Service } from '@/payload-types'
import { useSearchParams } from 'next/navigation'
import React from 'react'

interface Props {
  docs: Service[]
  serviceParam: number
}
const MiddleColumn = ({ docs, serviceParam }: Props) => {
  return (
    <div className="flex flex-col h-auto w-8 bg-white">
      <span
        style={{ flex: `${serviceParam === 1 ? '0' : `${serviceParam - 1}`}  1 0%` }}
        className={`bg-light-blue rounded-br-2xl transition-all duration-150 ease-out`}
      />
      <span style={{}} className={`h-16 `} />
      <span
        style={{
          flex: `${serviceParam === docs.length ? '0' : `${docs.length - serviceParam}`} 1 0%`,
        }}
        className={`bg-light-blue rounded-tr-2xl transition-all duration-150 ease-out`}
      />
    </div>
  )
}

export default MiddleColumn
