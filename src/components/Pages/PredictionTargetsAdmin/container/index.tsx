'use client'

import StatusField from '@/components/Common/StatusField'
import { Pagination, Table } from '@payloadcms/ui'
import React from 'react'

export const PredictionTargetsAdminContainer = () => {
  const renderCells = <T,>(data: T[], getContent: (item: T, idx: number) => React.ReactNode) =>
    data.map((item, idx) => <div key={idx}>{getContent(item, idx)}</div>)

  return (
    <div className="align-middle">
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
            renderedCells: renderCells(races, (item) => (
              <>
                {item.raceTitle} {item.dayNumber}
              </>
            )),
          },
          {
            active: true,
            accessor: 'talent1',
            field: { name: 'talent1', type: 'text' },
            Heading: <div>タレント 1</div>,
            renderedCells: renderCells(races, (item) => (
              <StatusField name={item.talent1.name} status={item.talent1.status} />
            )),
          },
          {
            active: true,
            accessor: 'talent2',
            field: { name: 'talent2', type: 'text' },
            Heading: <div>タレント 1</div>,
            renderedCells: renderCells(races, (item) => (
              <StatusField name={item.talent2.name} status={item.talent2.status} />
            )),
          },
          {
            active: true,
            accessor: 'reporter1',
            field: { name: 'reporter1', type: 'text' },
            Heading: <div>タスポーツ紙 1</div>,
            renderedCells: renderCells(races, (item) => (
              <StatusField name={item.reporter1.name} status={item.reporter1.status} />
            )),
          },
          {
            active: true,
            accessor: 'reporter2',
            field: { name: 'reporter2', type: 'text' },
            Heading: <div>タスポーツ紙 2</div>,
            renderedCells: renderCells(races, (item) => (
              <StatusField name={item.reporter2.name} status={item.reporter2.status} />
            )),
          },
        ]}
      />
      <Pagination hasNextPage hasPrevPage page={4} totalPages={10} />
    </div>
  )
}

// example data
const races = [
  {
    date: '2025/5/19',
    raceTitle: '第26回チャンピオン',
    dayNumber: '6日目',
    talent1: { name: '棒戸玲須', status: '未入力', link: '#' },
    talent2: { name: 'ボートタロウ', status: '未入力', link: '#' },
    reporter1: { name: '日刊スポーツ', status: '未入力', link: '#' },
    reporter2: { name: 'サンケイスポーツ', status: '未入力', link: '#' },
  },
  {
    date: '2025/5/18',
    raceTitle: '第26回チャンピオン',
    dayNumber: '5日目',
    talent1: { name: 'タレントC', status: '未入力', link: '#' },
    talent2: { name: 'ボートタロウ', status: '未入力', link: '#' },
    reporter1: { name: '日刊スポーツ', status: '未入力', link: '#' },
    reporter2: { name: 'サンケイスポーツ', status: '未入力', link: '#' },
  },
  {
    date: '2025/5/17',
    raceTitle: '第26回チャンピオン',
    dayNumber: '4日目',
    talent1: { name: 'タレントC', status: '入力済', link: '#' },
    talent2: { name: 'ボートタロウ', status: '入力済', link: '#' },
    reporter1: { name: '日刊スポーツ', status: '入力中', link: '#' },
    reporter2: { name: 'サンケイスポーツ', status: '未入力', link: '#' },
  },
  {
    date: '2025/5/18',
    raceTitle: '第26回チャンピオン',
    dayNumber: '3日目',
    talent1: { name: '棒戸玲須', status: '入力済', link: '#' },
    talent2: { name: 'ボートタロウ', status: '入力済', link: '#' },
    reporter1: { name: '日刊スポーツ', status: '入力済', link: '#' },
    reporter2: { name: 'サンケイスポーツ', status: '入力済', link: '#' },
  },
]
