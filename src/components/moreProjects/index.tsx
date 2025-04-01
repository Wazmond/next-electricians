import React from 'react'

interface Props {
  modalStatus: boolean
  setModalStatus: React.Dispatch<React.SetStateAction<boolean>>
}

const MoreProjects = (props: Props) => {
  const { modalStatus, setModalStatus } = props

  return (
    <div className={`${modalStatus ? 'flex' : 'hidden'}`}>
      <button onClick={() => setModalStatus(false)}>{/* Create Close button */}</button>
    </div>
  )
}

export default MoreProjects
