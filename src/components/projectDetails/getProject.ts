import { payload } from '@/hooks/payload'
import { Project } from '@/payload-types'

interface Props {
  id: number
}

const getProject: ({ id }: Props) => Promise<Project> = async ({ id }: Props) => {
  const res = await payload.findByID({
    collection: 'projects',
    id,
  })
  return res
}

export default getProject
