import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true, // Payload auto handles password field.
  fields: [
    {
      name: 'username',
      label: '名前',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      label: '現在のID',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'role',
      label: '権限',
      type: 'select',
      required: true,
      options: [
        { label: 'システム管理者', value: 'system_administrator' },
        { label: '予想者', value: 'predictor' },
      ],
      admin: {
        width: '50%',
      },
    },
  ],
}
