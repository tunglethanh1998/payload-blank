import type { AdminViewServerProps } from 'payload'

import { DefaultTemplate } from '@payloadcms/next/templates'
import { Gutter } from '@payloadcms/ui'
import React from 'react'
import { PredictionTargetsAdminContent } from './container/PredictionTargetsAdminContent'
import { PredictionTargetsPredictorContent } from './container/PredictionTargetsPredictorContent'
import { User } from '@/payload-types'

interface UserWithRoles extends User {
  roles?: string[]
}

const PredictionTarget = ({ initPageResult, params, searchParams }: AdminViewServerProps) => {
  const isAdmin = (initPageResult.req.user as UserWithRoles)?.roles?.includes('admin')

  return (
    <DefaultTemplate
      i18n={initPageResult.req.i18n}
      locale={initPageResult.locale}
      params={params}
      payload={initPageResult.req.payload}
      permissions={initPageResult.permissions}
      searchParams={searchParams}
      user={initPageResult.req.user || undefined}
      visibleEntities={initPageResult.visibleEntities}
    >
      <Gutter>
        {!isAdmin ? <PredictionTargetsAdminContent /> : <PredictionTargetsPredictorContent />}
      </Gutter>
    </DefaultTemplate>
  )
}

export default PredictionTarget
