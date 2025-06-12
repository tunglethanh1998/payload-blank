import { CollectionConfig } from 'payload'

const TalentReporter: CollectionConfig = {
  slug: 'talent-reporter',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      label: '名前',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      label: '種別',
      type: 'select',
      defaultValue: 'talent',
      required: true,
      options: [
        { label: 'タレント', value: 'talent' },
        { label: 'スポーツ紙', value: 'reporter' },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'sns',
          label: 'SNSポスト',
          type: 'text',
          admin: {
            width: '50%',
          },
        },
        {
          name: 'order',
          label: 'TOPページに表示する',
          type: 'checkbox',
          admin: {
            className: 'pl-0 pt-[2rem] lg:pt-[2.5rem] lg:pl-[2rem]',
            width: '50%',
          },
        },
      ],
    },

    {
      name: 'introduction',
      label: '紹介文',
      type: 'text',
    },
    {
      name: 'iconImage',
      label: 'アイコン画像',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'sportsLogo',
      label: 'スポーツ紙ロゴ',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'specImage',
      label: 'スペック画像',
      type: 'upload',
      relationTo: 'media',
    },
  ],
  timestamps: true,
}

export { TalentReporter }
