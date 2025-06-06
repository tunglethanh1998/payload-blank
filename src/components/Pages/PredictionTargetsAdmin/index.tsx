import type { AdminViewServerProps } from 'payload'

import { DefaultTemplate } from '@payloadcms/next/templates'
import { Gutter } from '@payloadcms/ui'
import React from 'react'
import { PredictionTargetsAdminContainer } from './container'
import { StepNav } from '@/components/Common/StepNav'
import { ROUTE_NAVIGATE } from '@/libs/enums'
import { Header } from '@/components/Common/Header'

const PredictionTargetAdmin = ({ initPageResult, params, searchParams }: AdminViewServerProps) => {
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
      <StepNav
        nav={[
          {
            label: 'Prediction Targets Admin',
            url: ROUTE_NAVIGATE.PREDICTION_TARGET_ADMIN,
          },
        ]}
      />
      <Gutter>
        <Header title="Prediction Targets Admin" />
        <PredictionTargetsAdminContainer />
      </Gutter>
    </DefaultTemplate>
  )
}

export default PredictionTargetAdmin
