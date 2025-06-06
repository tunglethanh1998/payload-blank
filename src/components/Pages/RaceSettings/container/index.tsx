import { Badge } from '@/components/Common/Badge'
import { renderCells } from '@/libs/utils'
import { Table } from '@payloadcms/ui'

const data = [
  {
    eventPeriod: { startDate: '2015-04-14', endDate: '2015-04-19' },
    racetrack: '児島',
    grade: 'GI',
    title: 'GI第16回マスターズチャンピオン',
  },
]

export function RaceSettingContainer() {
  return (
    <div className="raceSettings">
      <Table
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
  )
}
