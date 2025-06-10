'use client'
import { Badge } from '@/components/Common/Badge'
import { SelectField } from '@/components/Common/SelectField'
import { renderCells } from '@/libs/utils'
import { Button, CheckboxInput, Table } from '@payloadcms/ui'
import { CheckCheck, Plus, XCircle } from 'lucide-react'
import { useState } from 'react'
import { ReporterSettingsState, TalentSettingsState } from './type'

const data = [
  {
    eventPeriod: { startDate: '2015-04-14', endDate: '2015-04-19' },
    racetrack: '児島',
    grade: 'GI',
    title: 'GI第16回マスターズチャンピオン',
  },
]

const listTalent = [
  {
    id: 1,
    label: 'タレントA',
  },
  {
    id: 2,
    label: 'タレントB',
  },
  {
    id: 3,
    label: 'タレントC',
  },
]

const listReporter = [
  {
    id: 1,
    label: 'タレントA',
  },
  {
    id: 2,
    label: 'タレントB',
  },
  {
    id: 3,
    label: 'タレントC',
  },
]

export function RaceSettingContainer() {
  const [talentSettings, setTalentSettings] = useState<TalentSettingsState[]>([
    {
      talent: {
        value: 1,
        label: 'タレントA',
      },
      days: [true, false, true, false, false, false],
    },
    {
      talent: {
        value: 2,
        label: 'タレントB',
      },
      days: [false, true, true, false, true, false],
    },
  ])

  const [reporterSettings, setReporterSettings] = useState<ReporterSettingsState[]>([
    {
      reporter: {
        value: 1,
        label: 'タレントA',
      },
      days: [true, false, true, false, false, false],
    },
    {
      reporter: {
        label: 'タレントC',
        value: 3,
      },
      days: [true, true, false, false, true, false],
    },
  ])

  const toggleAllDays = (index: number, checked: boolean, type: 'talent' | 'reporter') => {
    if (type === 'talent') {
      setTalentSettings((prev) =>
        prev.map((item, i) => (i === index ? { ...item, days: Array(6).fill(checked) } : item)),
      )
    } else {
      setReporterSettings((prev) =>
        prev.map((item, i) => (i === index ? { ...item, days: Array(6).fill(checked) } : item)),
      )
    }
  }

  const toggleSingleDay = (rowIdx: number, dayIndex: number, type: 'talent' | 'reporter') => {
    if (type === 'talent') {
      setTalentSettings((prevTalentSettings) =>
        prevTalentSettings.map((row, i) =>
          i === rowIdx
            ? {
                ...row,
                days: row.days.map((day, dayIdx) => (dayIdx === dayIndex ? !day : day)),
              }
            : row,
        ),
      )
    } else {
      setReporterSettings((prevReporterSettings) =>
        prevReporterSettings.map((row, i) =>
          i === rowIdx
            ? {
                ...row,
                days: row.days.map((day, dayIdx) => (dayIdx === dayIndex ? !day : day)),
              }
            : row,
        ),
      )
    }
  }

  const addTalentRow = () => {
    setTalentSettings((prev) => [
      ...prev,
      {
        talent: undefined,
        days: [false, false, false, false, false, false],
      },
    ])
  }

  const addReporterRow = () => {
    setReporterSettings((prev) => [
      ...prev,
      {
        reporter: undefined,
        days: [false, false, false, false, false, false],
      },
    ])
  }

  return (
    <>
      <div className="mt-6">
        <Table
          appearance="condensed"
          data={data}
          columns={[
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
          ]}
        />
      </div>

      <div className="raceSettingTable">
        <div className="text-3xl font-bold">予想者設定</div>
        <div className="text-2xl font-semibold mt-4">タレント</div>

        <div className="raceSettingTable1 mt-4">
          <Table
            appearance="condensed"
            data={talentSettings}
            columns={[
              {
                active: true,
                accessor: 'talent',
                field: { name: 'talent', type: 'text' },
                Heading: <></>,
                renderedCells: renderCells(talentSettings, (cell) => {
                  return (
                    <SelectField
                      defaultValue={cell.talent}
                      options={listTalent}
                      isClearable={false}
                      placeholder="Select talent"
                    />
                  )
                }),
              },
              {
                active: true,
                accessor: 'day1',
                field: { name: 'day1', type: 'text' },
                Heading: <div className="font-bold">1日目</div>,
                renderedCells: renderCells(talentSettings, (cell, rowIdx) => (
                  <CheckboxInput
                    checked={cell.days[0]}
                    onToggle={() => toggleSingleDay(rowIdx, 0, 'talent')}
                  />
                )),
              },
              {
                active: true,
                accessor: 'day2',
                field: { name: 'day2', type: 'text' },
                Heading: <div className="font-bold">2日目</div>,
                renderedCells: renderCells(talentSettings, (cell, rowIdx) => (
                  <CheckboxInput
                    checked={cell.days[1]}
                    onToggle={() => toggleSingleDay(rowIdx, 1, 'talent')}
                  />
                )),
              },
              {
                active: true,
                accessor: 'day3',
                field: { name: 'day3', type: 'text' },
                Heading: <div className="font-bold">3日目</div>,
                renderedCells: renderCells(talentSettings, (cell, rowIdx) => (
                  <CheckboxInput
                    checked={cell.days[2]}
                    onToggle={() => toggleSingleDay(rowIdx, 2, 'talent')}
                  />
                )),
              },
              {
                active: true,
                accessor: 'day4',
                field: { name: 'day4', type: 'text' },
                Heading: <div className="font-bold">4日目</div>,
                renderedCells: renderCells(talentSettings, (cell, rowIdx) => (
                  <CheckboxInput
                    checked={cell.days[3]}
                    onToggle={() => toggleSingleDay(rowIdx, 3, 'talent')}
                  />
                )),
              },
              {
                active: true,
                accessor: 'day5',
                field: { name: 'day5', type: 'text' },
                Heading: <div className="font-bold">5日目</div>,
                renderedCells: renderCells(talentSettings, (cell, rowIdx) => (
                  <CheckboxInput
                    checked={cell.days[4]}
                    onToggle={() => toggleSingleDay(rowIdx, 4, 'talent')}
                  />
                )),
              },
              {
                active: true,
                accessor: 'day6',
                field: { name: 'day6', type: 'text' },
                Heading: <div className="font-bold">6日目</div>,
                renderedCells: renderCells(talentSettings, (cell, rowIdx) => (
                  <CheckboxInput
                    checked={cell.days[5]}
                    onToggle={() => toggleSingleDay(rowIdx, 5, 'talent')}
                  />
                )),
              },
              {
                active: true,
                accessor: 'selectAll',
                field: { name: 'selectAll', type: 'text' },
                Heading: <></>,
                renderedCells: renderCells(talentSettings, (_, rowIdx) => (
                  <Button
                    type="button"
                    className="m-0"
                    onClick={() => toggleAllDays(rowIdx, true, 'talent')}
                  >
                    <CheckCheck size={16} className="mr-2" />
                    <span className="font-semibold">全て選択</span>
                  </Button>
                )),
              },
              {
                active: true,
                accessor: 'cancelAll',
                field: { name: 'cancelAll', type: 'text' },
                Heading: <></>,
                renderedCells: renderCells(talentSettings, (_, rowIdx) => (
                  <Button
                    type="button"
                    className="m-0"
                    onClick={() => toggleAllDays(rowIdx, false, 'talent')}
                  >
                    <XCircle size={16} className="mr-2 text-red-500" />
                    <span className="font-semibold">全て解除</span>
                  </Button>
                )),
              },
            ]}
          />
          <Button type="button" className="m-0" onClick={addTalentRow}>
            <Plus />
          </Button>
        </div>

        <div className="text-2xl font-semibold mt-4">スポーツ紙</div>

        <div className="raceSettingTable2 mt-4">
          <Table
            appearance="condensed"
            data={reporterSettings}
            columns={[
              {
                active: true,
                accessor: 'talent',
                field: { name: 'talent', type: 'text' },
                Heading: <></>,
                renderedCells: renderCells(reporterSettings, (cell) => (
                  <SelectField
                    defaultValue={cell.reporter}
                    options={listReporter}
                    isClearable={false}
                    placeholder="Select reporter"
                  />
                )),
              },
              {
                active: true,
                accessor: 'day1',
                field: { name: 'day1', type: 'text' },
                Heading: <div className="font-bold">1日目</div>,
                renderedCells: renderCells(reporterSettings, (cell, rowIdx) => (
                  <CheckboxInput
                    checked={cell.days[0]}
                    onToggle={() => toggleSingleDay(rowIdx, 0, 'reporter')}
                  />
                )),
              },
              {
                active: true,
                accessor: 'day2',
                field: { name: 'day2', type: 'text' },
                Heading: <div className="font-bold">2日目</div>,
                renderedCells: renderCells(reporterSettings, (cell, rowIdx) => (
                  <CheckboxInput
                    checked={cell.days[1]}
                    onToggle={() => toggleSingleDay(rowIdx, 1, 'reporter')}
                  />
                )),
              },
              {
                active: true,
                accessor: 'day3',
                field: { name: 'day3', type: 'text' },
                Heading: <div className="font-bold">3日目</div>,
                renderedCells: renderCells(reporterSettings, (cell, rowIdx) => (
                  <CheckboxInput
                    checked={cell.days[2]}
                    onToggle={() => toggleSingleDay(rowIdx, 2, 'reporter')}
                  />
                )),
              },
              {
                active: true,
                accessor: 'day4',
                field: { name: 'day4', type: 'text' },
                Heading: <div className="font-bold">4日目</div>,
                renderedCells: renderCells(reporterSettings, (cell, rowIdx) => (
                  <CheckboxInput
                    checked={cell.days[3]}
                    onToggle={() => toggleSingleDay(rowIdx, 3, 'reporter')}
                  />
                )),
              },
              {
                active: true,
                accessor: 'day5',
                field: { name: 'day5', type: 'text' },
                Heading: <div className="font-bold">5日目</div>,
                renderedCells: renderCells(reporterSettings, (cell, rowIdx) => (
                  <CheckboxInput
                    checked={cell.days[4]}
                    onToggle={() => toggleSingleDay(rowIdx, 4, 'reporter')}
                  />
                )),
              },
              {
                active: true,
                accessor: 'day6',
                field: { name: 'day6', type: 'text' },
                Heading: <div className="font-bold">6日目</div>,
                renderedCells: renderCells(reporterSettings, (cell, rowIdx) => (
                  <CheckboxInput
                    checked={cell.days[5]}
                    onToggle={() => toggleSingleDay(rowIdx, 5, 'reporter')}
                  />
                )),
              },
              {
                active: true,
                accessor: 'selectAll1',
                field: { name: 'selectAll1', type: 'text' },
                Heading: <></>,
                renderedCells: renderCells(reporterSettings, (_, rowIdx) => (
                  <Button
                    type="button"
                    className="m-0"
                    onClick={() => toggleAllDays(rowIdx, true, 'reporter')}
                  >
                    <CheckCheck size={16} className="mr-2" />
                    <span className="font-semibold">全て選択</span>
                  </Button>
                )),
              },
              {
                active: true,
                accessor: 'cancelAll',
                field: { name: 'cancelAll', type: 'text' },
                Heading: <></>,
                renderedCells: renderCells(reporterSettings, (_, rowIdx) => (
                  <Button
                    type="button"
                    className="m-0"
                    onClick={() => toggleAllDays(rowIdx, false, 'reporter')}
                  >
                    <XCircle size={16} className="mr-2 text-red-500" />
                    <span className="font-semibold">全て解除</span>
                  </Button>
                )),
              },
            ]}
          />
          <Button type="button" className="m-0" onClick={addReporterRow}>
            <Plus />
          </Button>
        </div>
        <Button type="button" className="m-0 min-w-[10rem] mt-6">
          保存
        </Button>
      </div>
    </>
  )
}
