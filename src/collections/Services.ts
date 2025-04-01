import { CollectionConfig } from "payload";

export const Services: CollectionConfig = {
    access: {read: () => true},
    slug: 'services',
    defaultSort: ['-title'],
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
            required: true,
            label: 'Description',
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            label: 'Photos',
            required: true,
        },
    ]
}