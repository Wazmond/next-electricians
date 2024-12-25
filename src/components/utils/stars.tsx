import React from 'react'
import { FaStar } from 'react-icons/fa'

interface Props {
    gap: string,
    size: number,
    color: string,
}
const Stars: React.FC<Props> = (props) => {
  return (
    <div className={`flex flex-row gap-${props.gap}`}>
      <FaStar size={props.size} color={props.color} />
      <FaStar size={props.size} color={props.color} />
      <FaStar size={props.size} color={props.color} />
      <FaStar size={props.size} color={props.color} />
      <FaStar size={props.size} color={props.color} />
    </div>
  )
}

export default Stars
