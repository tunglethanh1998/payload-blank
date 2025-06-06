import type { AdminViewServerProps } from 'payload'

import { DefaultTemplate } from '@payloadcms/next/templates'
import { Gutter } from '@payloadcms/ui'
import React from 'react'
import { RaceSettingContainer } from './container'
import { StepNav } from '@/components/Common/StepNav'
import { ROUTE_NAVIGATE } from '@/libs/enums'
import { Header } from '@/components/Common/Header'

const RaceList = ({ initPageResult, params, searchParams }: AdminViewServerProps) => {
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
            label: 'Race list',
            url: ROUTE_NAVIGATE.RACE_LIST,
          },
          {
            label: 'Race settings',
            url: ROUTE_NAVIGATE.RACE_SETTINGS,
          },
        ]}
      />
      <Gutter>
        <Header title="Race settings" />
        <RaceSettingContainer />
      </Gutter>
    </DefaultTemplate>
  )
}

export default RaceList
