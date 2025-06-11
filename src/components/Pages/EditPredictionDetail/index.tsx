import { Header } from '@/components/Common/Header'
import { StepNav } from '@/components/Common/StepNav'
import { ROUTE_NAVIGATE } from '@/libs/enums'
import { DefaultTemplate } from '@payloadcms/next/templates'
import { Gutter } from '@payloadcms/ui'
import { AdminViewServerProps } from 'payload'
import React from 'react'
import EditPredictionDetailContainer from './container'

const EditPredictionDetail = ({ initPageResult, params, searchParams }: AdminViewServerProps) => {
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
            label: 'Prediction Targets',
            url: ROUTE_NAVIGATE.PREDICTION_TARGET,
          },
          {
            label: 'Prediction Detail',
            url: ROUTE_NAVIGATE.PREDICTION_DETAIL,
          },
          {
            label: 'Edit Prediction Detail',
            url: ROUTE_NAVIGATE.EDIT_PREDICTION_DETAIL,
          },
        ]}
      />
      <Gutter>
        <Header title="Edit Prediction Detail" />
        <EditPredictionDetailContainer />
      </Gutter>
    </DefaultTemplate>
  )
}

export default EditPredictionDetail
