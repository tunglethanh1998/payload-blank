/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React from 'react'
import { Table as PayloadTable } from '@payloadcms/ui'
import { ClientFieldProps, Column } from 'payload'

type ColumnDefinition = Column & {
  label: string
  accessorType: ClientFieldProps
}

type TableProps<T extends Record<string, any>> = {
  data: T[]
  columns: ColumnDefinition[]
}

export function Table<T extends Record<string, any>>(props: TableProps<T>) {
  const { data, columns } = props

  const payloadColumns = columns.map((col) => ({
    accessor: col.accessor,
    active: true,
    field: { name: col.accessor, type: col.accessorType },
    CustomLabel: col.label,
    Heading: <div className="font-bold">{col.label}</div>,
    renderedCells: data.map((row, i) => <div key={i}>{col.render(row)}</div>),
  }))

  return (
    <div className="p-6">
      <PayloadTable data={data} columns={payloadColumns} />
    </div>
  )
}
