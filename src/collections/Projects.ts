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
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            label: 'Photos',
            required: true,
        },
        {
            name: 'featured',
            type: 'checkbox',
            label: 'Featured',
            required: true,
            defaultValue: false,
        },
        {
            name: 'featuredOrder',
            type: 'number',
            label: 'Featured Order',
            required: false,
            admin: {
                condition: (data) => data.featured === true,
            },
        },
    ]
}