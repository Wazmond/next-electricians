import { afterChangeHook } from '@/hooks/afterChange'
import { GlobalConfig } from 'payload'

export const AboutPage: GlobalConfig = {
  slug: 'aboutPage',
  hooks: {
    afterChange: [afterChangeHook],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'About Page Title',
      required: true,
    },
    {
      name: 'text',
      type: 'textarea',
      label: 'About Page Text',
      required: true,
    },
  ],
}
