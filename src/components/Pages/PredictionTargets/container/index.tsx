'use client'

import StatusField from '@/components/Common/StatusField'
import { renderCells } from '@/libs/utils'
import { Pagination, Table } from '@payloadcms/ui'
import React from 'react'

export const PredictionTargetsContainer = () => {
  const renderNoticeBoard = () => {
    return (
      <div className="my-10 border-2 border-orange-400 border-r-4">
        <h2 className="text-orange-400 text-lg font-bold mb-2">予想入力の期限について</h2>
        <div className="text-gray-800 dark:text-white">
          <p className="mb-1">【入力可能開始時間】</p>
          <p className="ml-4">
            デイレースは{' '}
            <span className="bg-green-500 text-white px-2 py-1 rounded font-bold">前日18時頃</span>{' '}
            から入力が可能になります。
          </p>
          <p className="ml-4">
            ナイターレースは{' '}
            <span className="bg-green-500 text-white px-2 py-1 rounded font-bold">前日22時頃</span>{' '}
            から入力が可能になります。
          </p>
          <p className="mt-3 mb-1">【入力締切時間】</p>
          <p className="ml-4">
            デイレースは{' '}
            <span className="bg-red-500 text-white px-2 py-1 rounded font-bold">前日24時</span>{' '}
            が締切となります。
          </p>
          <p className="ml-4">
            ナイターレースは{' '}
            <span className="bg-red-500 text-white px-2 py-1 rounded font-bold">当日10時</span>{' '}
            が締切となります。
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="align-baseline">
      {renderNoticeBoard()}
      <div className="w-full">
        <Table
          data={races}
          columns={[
            {
              active: true,
              accessor: 'date',
              field: { name: 'date', type: 'text' },
              Heading: <div>開催日</div>,
              renderedCells: renderCells(races, (item) => <>{item.date}</>),
            },
            {
              active: true,
              accessor: 'title',
              field: { name: 'title', type: 'text' },
              Heading: <div>レース名</div>,
              renderedCells: renderCells(races, (item) => <>{item.raceTitle}</>),
            },
            {
              active: true,
              accessor: 'status',
              field: { name: 'status', type: 'text' },
              Heading: <div>タレント 1</div>,
              renderedCells: renderCells(races, (item) => <StatusField status={item.status} />),
            },
          ]}
        />
      </div>
      <Pagination hasNextPage hasPrevPage page={4} totalPages={10} />
    </div>
  )
}

const races = [
  {
    date: '2025/5/19',
    raceTitle: '第26回チャンピオン 最終日',
    link: '#',
    status: '未入力',
  },
  {
    date: '2025/5/19',
    raceTitle: '第26回チャンピオン 最終日',
    link: '#',
    status: '未入力',
  },
  {
    date: '2025/5/19',
    raceTitle: '第26回チャンピオン 最終日',
    link: '#',
    status: '未入力',
  },
]
