import { CollectionConfig } from 'payload'

const News: CollectionConfig = {
  slug: 'news',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      type: 'row',
      fields: [
        {
          name: 'category',
          type: 'select',
          required: true,
          options: [
            { label: '重要なお知らせ', value: 'notice' },
            { label: 'コラム', value: 'column' },
            { label: 'キャンペーン情報', value: 'campaign' },
            { label: 'その他の新着情報', value: 'other' },
          ],
          admin: {
            width: '50%',
          },
        },
        {
          name: 'startDate',
          type: 'date',
          required: true,
          admin: {
            width: '50%',
          },
        },
      ],
    },
    {
      name: 'Url',
      type: 'text',
    },
    { name: 'content', type: 'textarea' },
    { name: 'media', type: 'upload', relationTo: 'media' },
    {
      type: 'row',
      fields: [
        {
          name: 'new',
          type: 'checkbox',
          admin: {
            width: '15%',
          },
        },
        {
          name: 'externalLink',
          type: 'checkbox',
          admin: {
            width: '15%',
          },
        },
      ],
    },
  ],
  timestamps: true,
}

export { News }
