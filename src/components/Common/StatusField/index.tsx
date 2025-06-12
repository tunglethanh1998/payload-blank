import { Button } from '@payloadcms/ui'
import { SquarePen } from 'lucide-react'
import React from 'react'

const StatusField = ({
  name,
  status,
  onEdit,
}: {
  name?: string
  status: string
  onEdit: () => void
}) => {
  const getStatusButtonColor = (status: string) => {
    switch (status) {
      case '未入力':
        return '#E74C3C'
      case '入力済':
        return '#3498DB'
      case '入力中':
        return '#F39C12'
      default:
        return '#d9d9d9'
    }
  }

  return (
    <>
      {name && <div className="truncate">{name}</div>}
      <div className="flex gap-1">
        <div
          className="rounded text-white text-s font-extrabold px-2 py-1 truncate"
          style={{ backgroundColor: getStatusButtonColor(status) }}
        >
          {status}
        </div>
        <Button
          onClick={onEdit}
          className="no-underline bg-[#18BC9C] px-1.5 py-0 rounded m-0 items-center"
        >
          <SquarePen size={14} color="white" />
        </Button>
      </div>
    </>
  )
}

export default StatusField
