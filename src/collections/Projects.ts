import { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
    access: {read: () => true},
    slug: 'projects',
    defaultSort: ['-date'],
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
            name: 'date',
            type: 'date',
            admin: {
                date: {
                    pickerAppearance: "dayOnly",
                    displayFormat: "dd/MM/yyy"
                },
            },
            required: true,
            label: 'Project Date',
        },
        {
            name: 'images',
            type: 'array',
            fields: [{
                name: 'image',
                type: 'upload',
                relationTo: 'media'
            }
            ],
            label: 'Photos',
            required: true,
        },
    ]
}