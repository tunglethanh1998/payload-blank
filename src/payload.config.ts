// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Posts } from './collections/Posts'
import { ROUTE_CONFIG } from './libs/enums'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    theme: 'dark',
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      views: {
        RaceList: {
          Component: '@/components/Pages/RaceList',
          path: ROUTE_CONFIG.RACE_LIST,
        },
        RaceSettings: {
          Component: '@/components/Pages/RaceSettings',
          path: ROUTE_CONFIG.RACE_SETTINGS,
        },
        RaceInfo: {
          Component: '@/components/Pages/RaceInfo',
          path: ROUTE_CONFIG.RACE_INFO,
        },
        predictionTargets: {
          Component: '@/components/Pages/PredictionTargets',
          path: ROUTE_CONFIG.PREDICTION_TARGET,
        },
      },
      afterNavLinks: ['@/components/AfterNavLinks'],
    },
  },
  collections: [Users, Media, Posts],
  globals: [],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
