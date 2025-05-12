'use client'
import { Service } from '@/payload-types'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const MiddleColumn = ({ docs }: { docs: Service[] }) => {
  const searchParams = useSearchParams()
  const serviceId = Number(searchParams.get('service') ?? 1)
  return (
    <div className="flex flex-col h-auto w-8 bg-white">
      <span
        style={{ flex: `${serviceId === 1 ? '0' : `${serviceId - 1}`}  1 0%` }}
        className={`bg-light-blue rounded-br-2xl transition-all duration-150 ease-out`}
      />
      <span style={{}} className={`h-16 `} />
      <span
        style={{ flex: `${serviceId === docs.length ? '0' : `${docs.length - serviceId}`} 1 0%` }}
        className={`bg-light-blue rounded-tr-2xl transition-all duration-150 ease-out`}
      />
    </div>
  )
}

export default MiddleColumn
