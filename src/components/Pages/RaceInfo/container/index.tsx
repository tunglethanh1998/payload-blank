'use client'
import { renderCells } from '@/libs/utils'
import { Button, Dropzone, Table, TextareaInput, TextInput } from '@payloadcms/ui'

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
    title: 'GI第16回マスターズチャンピオン',
  },
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
    title: 'GI第16回マスターズチャンピオン',
  },
]

export function RaceInfoContainer() {
  return (
    <div className="pb-12">
      <h2 className="mt-6 text-[1.5rem] font-semibold">今節のみどころ</h2>

      <div className="mt-4 grid gap-y-6">
        <div className="grid md:grid-cols-[10rem,1fr] gap-x-6 items-center">
          <div className="text-[18px] md:text-right">画像</div>
          <div className="max-md:mt-4">
            <Dropzone onChange={() => {}}>
              <input type="file" />
            </Dropzone>
          </div>
        </div>
        <div className="grid md:grid-cols-[10rem,1fr] gap-x-6 items-center">
          <div className="text-[18px] md:text-right">タイトル</div>
          <div className="max-md:mt-4">
            <TextInput path="title" onChange={() => {}} />
          </div>
        </div>
        <div className="grid md:grid-cols-[10rem,1fr] gap-x-6 items-center">
          <div className="text-[18px] md:text-right">本文</div>
          <div className="max-md:mt-4">
            <TextareaInput rows={5} path="content" onChange={() => {}} />
          </div>
        </div>
      </div>

      <h2 className="mt-6 text-[1.5rem] font-semibold">AIレーダー</h2>

      <div className="mt-4 grid gap-y-6">
        <div className="grid md:grid-cols-[10rem,1fr] gap-x-6 items-center">
          <div className="text-[18px] md:text-right">画像</div>
          <div className="max-md:mt-4">
            <Dropzone onChange={() => {}}>
              <input type="file" />
            </Dropzone>
          </div>
        </div>
        <div className="grid md:grid-cols-[10rem,1fr] gap-x-6 items-center">
          <div className="text-[18px] md:text-right">勝率</div>
          <div className="max-md:mt-4">
            <TextInput path="title" onChange={() => {}} />
          </div>
        </div>
        <div className="grid md:grid-cols-[10rem,1fr] gap-x-6 items-center">
          <div className="text-[18px] md:text-right">レース期間</div>
          <div className="max-md:mt-4">
            <TextInput path="title" onChange={() => {}} />
          </div>
        </div>
        <div className="grid md:grid-cols-[10rem,1fr] gap-x-6 items-center">
          <div className="text-[18px] md:text-right">本文</div>
          <div className="max-md:mt-4">
            <TextareaInput rows={5} path="content" onChange={() => {}} />
          </div>
        </div>
      </div>

      <h2 className="mt-6 text-[1.5rem] font-semibold">モーター動向</h2>

      <div className="mt-4">
        <h3 className="text-[1.25rem] font-semibold">モーター2連対率ベスト5</h3>
        <div className="mt-4">
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
                  <div className="flex gap-3">{item.eventPeriod.startDate}</div>
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
      </div>

      <h2 className="mt-6 text-[1.5rem] font-semibold">モーター動向</h2>

      <div className="mt-4 grid gap-y-6">
        <div className="grid md:grid-cols-[10rem,1fr] gap-x-6 items-center">
          <div className="text-[18px] md:text-right">注目モーター</div>
          <div className="max-md:mt-4">
            <TextInput path="title" onChange={() => {}} />
          </div>
        </div>
        <div className="grid md:grid-cols-[10rem,1fr] gap-x-6 items-center">
          <div className="text-[18px] md:text-right">モーター情報</div>
          <div className="max-md:mt-4">
            <TextareaInput rows={5} path="content" onChange={() => {}} />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-[1.25rem] font-semibold">平均スタートタイミング ベスト5</h3>
        <div className="mt-4">
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
                  <div className="flex gap-3">{item.eventPeriod.startDate}</div>
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
      </div>

      <div className="mt-6">
        <h3 className="text-[1.25rem] font-semibold">コース別入着率</h3>
        <div className="mt-4">
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
                  <div className="flex gap-3">{item.eventPeriod.startDate}</div>
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
      </div>

      <div className="mt-6 grid gap-y-6">
        <div className="grid md:grid-cols-[10rem,1fr] gap-x-6 items-center">
          <div className="text-[18px] md:text-right">タイトル</div>
          <div className="max-md:mt-4">
            <TextInput path="title" onChange={() => {}} />
          </div>
        </div>
        <div className="grid md:grid-cols-[10rem,1fr] gap-x-6 items-center">
          <div className="text-[18px] md:text-right">タイトル</div>
          <div className="max-md:mt-4">
            <Dropzone onChange={() => {}}>
              <input type="file" />
            </Dropzone>
          </div>
        </div>
        <div className="grid md:grid-cols-[10rem,1fr] gap-x-6 items-center">
          <div className="text-[18px] md:text-right">特徴</div>
          <div className="max-md:mt-4">
            <TextareaInput rows={5} path="content" onChange={() => {}} />
          </div>
        </div>
        <div className="grid md:grid-cols-[10rem,1fr] gap-x-6 items-center">
          <div className="text-[18px] md:text-right">水面特性</div>
          <div className="max-md:mt-4">
            <TextareaInput rows={5} path="content" onChange={() => {}} />
          </div>
        </div>
      </div>

      <Button className="min-w-[10rem] mt-12" type="button">
        公開
      </Button>
    </div>
  )
}
