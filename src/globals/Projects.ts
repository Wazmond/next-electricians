import { afterChangeHook } from '@/hooks/afterChange'
import { GlobalConfig } from 'payload'

export const ProjectsPage: GlobalConfig = {
  slug: 'projectsPage',
  hooks: {
    afterChange: [afterChangeHook],
  },
  fields: [
    {
      name: 'title',
      label: 'Projects Title',
      type: 'text',
      required: true,
    },
    {
      name: 'text',
      label: 'Projects Text',
      type: 'textarea',
      required: true,
    },
  ],
}
