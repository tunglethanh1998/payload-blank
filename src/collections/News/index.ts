import { CollectionConfig } from 'payload'

const News: CollectionConfig = {
  slug: 'news',
  access: {
    read: () => true,
  },
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
    },
    { name: 'title', type: 'text', required: true },
    { name: 'startDate', type: 'date', required: true },
    { name: 'endDate', type: 'date', required: true },
    { name: 'releaseDate', type: 'date', required: true },
    { name: 'content', type: 'richText', required: true },
  ],
  timestamps: true,
}

export { News }
