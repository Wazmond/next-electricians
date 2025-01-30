import React from 'react'

import { IconType } from 'react-icons'

interface Props {
  title: string
  icon: IconType
}

const ServicesCard = (props: Props) => {
  return (
    <div className="bg-white flex flex-col items-center py-4 rounded-lg">
      <div className="border border-sky-600 rounded-full p-2 mb-4">
        <props.icon size={30} className="text-sky-600" />
      </div>
      <p className="text-black">{props.title}</p>
      {/* A description required? Will have to ask */}
    </div>
  )
}

export default ServicesCard
