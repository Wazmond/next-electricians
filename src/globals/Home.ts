import { afterChangeHook } from '@/hooks/afterChange'
import { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'homePage',
  hooks: {
    afterChange: [afterChangeHook],
  },
  fields: [
    {
      name: 'bgImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      label: 'Home Title',
      required: true,
    },
    {
      name: 'subTitle',
      type: 'text',
      label: 'Home Sub Title',
      required: true,
    },
    {
      name: 'aboutTitle',
      type: 'text',
      label: 'About Title',
      required: true,
    },
    {
      name: 'aboutImage',
      type: 'upload',
      relationTo: 'media',
      label: 'About Image',
      required: true,
    },
    {
      name: 'aboutText',
      type: 'textarea',
      label: 'About text',
      required: true,
    },
    {
      name: 'servicesTitle',
      type: 'text',
      label: 'Services Title',
      required: true,
    },
    {
      name: 'servicesText',
      type: 'textarea',
      label: 'Services Text',
      required: true,
    },
    {
      name: 'projectsTitle',
      type: 'text',
      label: 'Projects Title',
      required: true,
    },
    {
      name: 'projectsText',
      type: 'textarea',
      label: 'Projects Text',
      required: true,
    },
    {
      name: 'enquiryTitle',
      type: 'text',
      label: 'Enquiry Title',
      required: true,
    },
    {
      name: 'testimonialsTitle',
      type: 'text',
      label: 'Testimonials Title',
      required: true,
    },
  ],
}
