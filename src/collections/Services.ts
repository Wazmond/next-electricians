import { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  access: { read: () => true },
  slug: 'services',
  defaultSort: ['id'],
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
    },
    {
      name: 'description',
      type: 'textarea',
      required: false,
      label: 'Description',
    },
    {
      name: 'services',
      type: 'array',
      label: 'Services',
      fields: [
        {
          name: 'service',
          type: 'text',
          label: 'Service',
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Photos',
      required: true,
    },
  ],
}
