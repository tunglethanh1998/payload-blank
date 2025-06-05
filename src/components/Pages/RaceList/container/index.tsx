'use client'
import { Button, CheckboxInput, Table } from '@payloadcms/ui'
import { SquarePen } from 'lucide-react'

import styles from './raceList.module.css'

const data = [
  {
    eventPeriod: {
      startDate: '2015-04-14',
      endDate: '2015-04-19',
    },
    forecastTarget: '〇',
    racetrack: '児島',
    grade: 'GI',
    title: 'GI第16回マスターズチャンピオン',
    forecasterSettings: '',
    forecasterEditing: '',
  },
  {
    eventPeriod: {
      startDate: '2015-04-14',
      endDate: '2015-04-19',
    },
    forecastTarget: '-',
    racetrack: '児島',
    grade: 'GI',
    title: '開設62周年記念競走GIトコタンキング決定戦',
    forecasterSettings: '',
    forecasterEditing: '',
  },
  {
    eventPeriod: {
      startDate: '2015-04-14',
      endDate: '2015-04-19',
    },
    forecastTarget: '-',
    racetrack: '常滑',
    grade: 'GI',
    title: 'GIつつじ賞王座決定戦 開設63周年記念競走',
    forecasterSettings: '',
    forecasterEditing: '',
  },
]

export function RaceListContainer() {
  const renderSelectCells = () => {
    return data.map((_, idx) => (
      <CheckboxInput key={`select-${idx}`} checked={idx === 0} onToggle={() => {}} />
    ))
  }

  const renderEventPeriodCells = () => {
    return data.map((item, idx) => (
      <div className="flex gap-3" key={`period-${idx}`}>
        <span className="px-3 py-2 rounded-xl bg-gray-400 text-gray-800 font-bold min-w-[8rem]">
          {item.eventPeriod.startDate}
        </span>
        <span className="px-3 py-2 rounded-xl bg-gray-600 text-gray-300 font-bold min-w-[8rem]">
          {item.eventPeriod.endDate}
        </span>
      </div>
    ))
  }

  const renderForecastTargetCells = () => {
    return data.map((item, idx) => <div key={`forecast-target-${idx}`}>{item.forecastTarget}</div>)
  }

  const renderRaceTrackCells = () => {
    return data.map((item, idx) => <div key={`racetrack-${idx}`}>{item.racetrack}</div>)
  }

  const renderGradeCells = () => {
    return data.map((item, idx) => <div key={`grade-${idx}`}>{item.grade}</div>)
  }

  const renderTitleCells = () => {
    return data.map((item, idx) => <div key={`title-${idx}`}>{item.title}</div>)
  }

  const renderForecasterSettingsCells = () => {
    return data.map((_, idx) => (
      <div key={`forecaster-setting-${idx}`}>
        <Button type="button" className="m-0">
          <SquarePen size={14} />
          <span className="font-semibold ml-[0.5rem]">編集</span>
        </Button>
      </div>
    ))
  }

  const renderForecasterEditingCells = () => {
    return data.map((_, idx) => (
      <div key={`forecaster-editing-${idx}`}>
        <Button type="button" className="m-0">
          <SquarePen size={14} />
          <span className="font-semibold ml-[0.5rem]">編集</span>
        </Button>
      </div>
    ))
  }

  return (
    <div className={styles.raceListContainer}>
      <Table
        data={data}
        columns={[
          {
            active: true,
            accessor: 'select',
            field: { name: 'select', type: 'text' },
            Heading: <div>選択</div>,
            renderedCells: renderSelectCells(),
          },
          {
            active: true,
            accessor: 'eventPeriod',
            field: { name: 'eventPeriod', type: 'text' },
            Heading: <div>開催期間</div>,
            renderedCells: renderEventPeriodCells(),
          },
          {
            active: true,
            accessor: 'forecastTarget',
            field: { name: 'forecastTarget', type: 'text' },
            Heading: <div>予想対象</div>,
            renderedCells: renderForecastTargetCells(),
          },
          {
            active: true,
            accessor: 'racetrack',
            field: { name: 'racetrack', type: 'text' },
            Heading: <div>レース場</div>,
            renderedCells: renderRaceTrackCells(),
          },
          {
            active: true,
            accessor: 'grade',
            field: { name: 'grade', type: 'text' },
            Heading: <div>グレード</div>,
            renderedCells: renderGradeCells(),
          },
          {
            active: true,
            accessor: 'title',
            field: { name: 'title', type: 'text' },
            Heading: <div>タイトル</div>,
            renderedCells: renderTitleCells(),
          },
          {
            active: true,
            accessor: 'forecasterSettings',
            field: { name: 'forecasterSettings', type: 'text' },
            Heading: <div>予想者設定</div>,
            renderedCells: renderForecasterSettingsCells(),
          },
          {
            active: true,
            accessor: 'forecasterEditing',
            field: { name: 'forecasterEditing', type: 'text' },
            Heading: <div>プレミアデータ編集</div>,
            renderedCells: renderForecasterEditingCells(),
          },
        ]}
      />
    </div>
  )
}
