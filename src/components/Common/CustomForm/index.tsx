'use client'
import { Button, Pagination } from '@payloadcms/ui'

export default function MyCustomForm() {
  return (
    <div className="field-type">
      <Button onClick={() => alert('Submitted')}>Click me</Button>
      <Pagination hasNextPage limit={10} onChange={() => {}} page={10} totalPages={20} />
    </div>
  )
}
