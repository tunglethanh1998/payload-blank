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
    {
      name: 'title',
      label: 'タイトル',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      label: '種別',
      type: 'select',
      defaultValue: 'notice',
      required: true,
      options: [
        { label: '重要なお知らせ', value: 'notice' },
        { label: 'コラム', value: 'column' },
        { label: 'キャンペーン情報', value: 'campaign' },
        { label: 'その他の新着情報', value: 'other' },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'startDateTime',
          label: 'TOP掲載開始日',
          type: 'date',
          admin: {
            width: '25%',
            date: {
              pickerAppearance: 'dayAndTime',
            },
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'endDateTime',
          label: 'TOP掲載終了日',
          type: 'date',
          admin: {
            width: '25%',
            date: {
              pickerAppearance: 'dayAndTime',
            },
          },
        },
      ],
    },
    { name: 'thumbnail', label: 'サムネ画像', type: 'upload', relationTo: 'media' },
    { name: 'content', label: '内容', type: 'richText' },
    {
      name: 'link',
      label: 'リンク',
      type: 'text',
    },
    {
      name: 'linkBlank',
      label: 'リンク 空白',
      type: 'checkbox',
    },
    {
      name: 'isNew',
      type: 'checkbox',
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
      hooks: {
        // News Tag will be display 7 day from publish day
        afterRead: [
          ({ value, siblingData }) => {
            const start = new Date(siblingData.startDateTime)
            const now = new Date()
            const diffDays = (now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
            return diffDays <= 7
          },
        ],
      },
    },
  ],
  timestamps: true,
}

export { News }
