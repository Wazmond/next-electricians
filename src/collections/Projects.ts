import { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
    slug: 'projects',
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'desciption',
            type: 'text',
            required: true,
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media'
        }
    ]
}