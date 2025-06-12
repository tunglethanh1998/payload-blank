// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { ROUTE_CONFIG, S3_PREFIX } from './libs/enums'
import { s3Storage } from '@payloadcms/storage-s3'

// Collections
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { News } from './collections/News'

// Globals

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
        predictionTargetsAdmin: {
          Component: '@/components/Pages/PredictionTargetsAdmin',
          path: ROUTE_CONFIG.PREDICTION_TARGET_ADMIN,
        },
        predictionDetail: {
          Component: '@/components/Pages/PredictionDetail',
          path: ROUTE_CONFIG.PREDICTION_DETAIL,
        },
        editPredictionDetail: {
          Component: '@/components/Pages/EditPredictionDetail',
          path: ROUTE_CONFIG.EDIT_PREDICTION_DETAIL,
        },
      },
      afterNavLinks: ['@/components/AfterNavLinks'],
    },
  },
  collections: [Users, News, Media],
  globals: [],
  // onInit: async (payload) => {
  // await payload.create({
  //   collection: 'users',
  //   data: {
  //     email: 'thanhtung1998@gmail.com',
  //     password: '123123dAA@',
  //   },
  // })
  // },
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
    s3Storage({
      bucket: process.env.AWS_S3_BUCKET_NAME || '',
      config: {
        region: process.env.AWS_S3_BUCKET_REGION,
        credentials: {
          accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY || '',
        },
      },
      collections: {
        media: {
          prefix: S3_PREFIX.PUBLIC_ASSETS,
          generateFileURL: async ({ filename }) => {
            return `${process.env.AWS_CLOUDFRONT_PREFIX}/${S3_PREFIX.PUBLIC_ASSETS}/${filename}`
          },
        },
      },
    }),
  ],
})
