import React from 'react'
import getProject from './getProject'
import ProjectUi from './projectUi'

interface Props {
  id: number
  isModal: boolean
}

const ProjectDetails = async ({ id, isModal }: Props) => {
  const data = await getProject({ id })
  return <ProjectUi data={data} isModal={isModal} />
}

export default ProjectDetails
