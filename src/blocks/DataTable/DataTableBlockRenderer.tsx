'use client'

import * as React from 'react'
import { buildColumnsFromData } from '@/utilities/buildColumnsFromData'
import { DataTable } from '@/components/DataTable/components/data-table'

type Props = {
  data: any[]
  defaultPageSize: number
}

export default function DataTableBlockRenderer({ data, defaultPageSize }: Props) {
  const columns = React.useMemo(() => buildColumnsFromData(data), [data])

  return (
    <DataTable
      columns={columns}
      data={data}
      defaultPageSize={defaultPageSize}
      searchColumns={columns.map((col) => col.id as string)}
      searchPlaceholder="Search..."
      filterConfigs={[]}
    />
  )
}
