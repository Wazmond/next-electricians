import { afterChangeHook } from '@/hooks/afterChange'
import { GlobalConfig } from 'payload'

export const ServicesPage: GlobalConfig = {
  slug: 'servicesPage',
  hooks: {
    afterChange: [afterChangeHook],
  },
  fields: [
    {
      name: 'title',
      label: 'Services Title',
      type: 'text',
      required: true,
    },
    {
      name: 'text',
      label: 'Services Text',
      type: 'textarea',
      required: true,
    },
    {
      name: 'enquiryTitle',
      label: 'Enquiry Text',
      type: 'textarea',
      required: true,
    },
  ],
}
