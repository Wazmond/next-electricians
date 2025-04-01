import { CollectionConfig } from "payload";

export const Featured: CollectionConfig = {
    access: {read: () => true},
    slug: 'featured',
    fields: [
        {
            name: 'featuredImages',
            type: 'array',
            fields: [{
                name: 'image',
                type: 'upload',
                relationTo: 'media'
            }
            ],
            label: 'Featured Images',
            required: true,
        }
    ]
}