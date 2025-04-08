import { GlobalConfig } from 'payload'

export const Pages: GlobalConfig = {
  slug: 'pages',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Home Page',
          fields: [
            {
              name: 'home_bgImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Background Image',
              required: true,
            },
            {
              name: 'home_title',
              type: 'text',
              label: 'Home Title',
              required: true,
            },
            {
              name: 'home_subTitle',
              type: 'text',
              label: 'Home Sub Title',
              required: true,
            },
            {
              name: 'home_aboutTitle',
              type: 'text',
              label: 'About Title',
              required: true,
            },
            {
              name: 'home_aboutImage',
              type: 'upload',
              relationTo: 'media',
              label: 'About Image',
              required: true,
            },
            {
              name: 'home_aboutText',
              type: 'textarea',
              label: 'About text',
              required: true,
            },
            {
              name: 'home_servicesTitle',
              type: 'text',
              label: 'Services Title',
              required: true,
            },
            {
              name: 'home_servicesText',
              type: 'textarea',
              label: 'Services Text',
              required: true,
            },
            {
              name: 'home_projectsTitle',
              type: 'text',
              label: 'Projects Title',
              required: true,
            },
            {
              name: 'home_projectsText',
              type: 'textarea',
              label: 'Projects Text',
              required: true,
            },
            {
              name: 'home_enquiryTitle',
              type: 'text',
              label: 'Enquiry Title',
              required: true,
            },
            {
              name: 'home_testimonialsTitle',
              type: 'text',
              label: 'Testimonials Title',
              required: true,
            },
          ],
        },
        {
          label: 'About Page',
          fields: [
            {
              name: 'about_title',
              type: 'text',
              label: 'About Page Title',
              required: true,
            },
            {
              name: 'about_text',
              type: 'textarea',
              label: 'About Page Text',
              required: true,
            },
          ],
        },
        {
          label: 'Services Page',
          fields: [
            {
              name: 'services_title',
              label: 'Services Title',
              type: 'text',
              required: true,
            },
            {
              name: 'services_text',
              label: 'Services Text',
              type: 'textarea',
              required: true,
            },
            {
              name: 'services_enquiryTitle',
              label: 'Enquiry Text',
              type: 'textarea',
              required: true,
            },
          ],
        },
        {
          label: 'Projects Page',
          fields: [
            {
              name: 'projects_title',
              label: 'Projects Title',
              type: 'text',
              required: true,
            },
            {
              name: 'projects_text',
              label: 'Projects Text',
              type: 'textarea',
              required: true,
            },
          ],
        },
        {
          label: 'Contacts Page',
          fields: [
            {
              name: 'contacts_title',
              label: 'Contacts Title',
              type: 'text',
              required: true,
            },
            {
              name: 'contacts_text',
              label: 'Contacts Text',
              type: 'textarea',
            },
          ],
        },
      ],
    },
  ],
}
