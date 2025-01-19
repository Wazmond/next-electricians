import React from 'react'

interface Props {
  title: string
}

const ServicesCard = (props: Props) => {
  return  (
  <div className="">
    {/* An icon for the services? possibly... */}
    <h3>{props.title}</h3>
    {/* A description required? Will have to ask */}
  </div>
)
}

export default ServicesCard
