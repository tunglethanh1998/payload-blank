'use client'

import { useState } from 'react'
import { Button, CheckboxInput, Pagination, Table } from '@payloadcms/ui'
import { SquarePen } from 'lucide-react'
import { Badge } from '@/components/Common/Badge'

const data = [
  {
    eventPeriod: { startDate: '2015-04-14', endDate: '2015-04-19' },
    racetrack: '児島',
    grade: 'GI',
    title: 'GI第16回マスターズチャンピオン',
  },
  {
    eventPeriod: { startDate: '2015-04-14', endDate: '2015-04-19' },
    racetrack: '児島',
    grade: 'GI',
    title: '開設62周年記念競走GIトコタンキング決定戦',
  },
  {
    eventPeriod: { startDate: '2015-04-14', endDate: '2015-04-19' },
    racetrack: '常滑',
    grade: 'GI',
    title: 'GIつつじ賞王座決定戦 開設63周年記念競走',
  },
]

export function RaceListContainer() {
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([])

  const toggleCheckbox = (index: number) => {
    setSelectedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    )
  }

  const renderCells = <T,>(data: T[], getContent: (item: T, idx: number) => React.ReactNode) =>
    data.map((item, idx) => <div key={idx}>{getContent(item, idx)}</div>)

  return (
    <div className="raceList">
      <Table
        data={data}
        columns={[
          {
            active: true,
            accessor: 'select',
            field: { name: 'select', type: 'text' },
            Heading: <div className="font-bold w-[2rem]">選択</div>,
            renderedCells: renderCells(data, (_, idx) => (
              <CheckboxInput
                checked={selectedIndexes.includes(idx)}
                onToggle={() => toggleCheckbox(idx)}
              />
            )),
          },
          {
            active: true,
            accessor: 'eventPeriod',
            field: { name: 'eventPeriod', type: 'text' },
            Heading: <div className="font-bold">開催期間</div>,
            renderedCells: renderCells(data, (item) => (
              <div className="flex gap-3">
                <Badge size="md">{item.eventPeriod.startDate}</Badge>
                <Badge variant="destructive" size="md">
                  {item.eventPeriod.endDate}
                </Badge>
              </div>
            )),
          },
          {
            active: true,
            accessor: 'forecastTarget',
            field: { name: 'forecastTarget', type: 'text' },
            Heading: <div className="font-bold">予想対象</div>,
            renderedCells: renderCells(data, (_, idx) => (
              <>{selectedIndexes.includes(idx) ? '〇' : '-'}</>
            )),
          },
          {
            active: true,
            accessor: 'racetrack',
            field: { name: 'racetrack', type: 'text' },
            Heading: <div className="font-bold">レース場</div>,
            renderedCells: renderCells(data, (item) => <>{item.racetrack}</>),
          },
          {
            active: true,
            accessor: 'grade',
            field: { name: 'grade', type: 'text' },
            Heading: <div className="font-bold">グレード</div>,
            renderedCells: renderCells(data, (item) => <>{item.grade}</>),
          },
          {
            active: true,
            accessor: 'title',
            field: { name: 'title', type: 'text' },
            Heading: <div className="font-bold">タイトル</div>,
            renderedCells: renderCells(data, (item) => <>{item.title}</>),
          },
          {
            active: true,
            accessor: 'forecasterSettings',
            field: { name: 'forecasterSettings', type: 'text' },
            Heading: <div className="font-bold">予想者設定</div>,
            renderedCells: renderCells(data, () => (
              <Button type="button" className="m-0">
                <SquarePen size={14} />
                <span className="font-semibold ml-2">編集</span>
              </Button>
            )),
          },
          {
            active: true,
            accessor: 'forecasterEditing',
            field: { name: 'forecasterEditing', type: 'text' },
            Heading: <div className="font-bold">プレミアデータ編集</div>,
            renderedCells: renderCells(data, () => (
              <Button type="button" className="m-0">
                <SquarePen size={14} />
                <span className="font-semibold ml-2">編集</span>
              </Button>
            )),
          },
        ]}
      />
      <div className="flex gap-8 mt-4">
        <Button
          size="large"
          type="button"
          className="min-w-[18rem] font-bold"
          buttonStyle="primary"
        >
          選択レースを予想対象に変更
        </Button>
        <Button
          size="large"
          type="button"
          className="min-w-[18rem] font-bold"
          buttonStyle="secondary"
        >
          選択レースを予想対象外に変更
        </Button>
      </div>
      <Pagination hasNextPage hasPrevPage page={4} totalPages={10} />
    </div>
  )
}
