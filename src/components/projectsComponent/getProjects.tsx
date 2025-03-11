
import { payload } from '@/hooks/getPayload'
import React from 'react'

const GetProjects = async () => {
    const posts = await payload.find({
        collection: 'projects'
    })
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4">

    </div>
  )
}

export default GetProjects