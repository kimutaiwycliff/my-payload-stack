// lib/buildColumnsFromData.ts
import { ColumnDef } from '@tanstack/react-table'

export function buildColumnsFromData<T extends object>(data: T[]): ColumnDef<T>[] {
  if (!data.length) return []

  const hiddenFields = ['_id', 'createdAt', 'updatedAt', '__v']

  const firstRow = data[0]
  return Object.keys(firstRow)
    .filter((key) => !hiddenFields.includes(key))
    .map((key) => ({
      accessorKey: key,
      header: key,
      cell: (info: any) => {
        const value = info.getValue()
        if (typeof value === 'object' && value !== null) return JSON.stringify(value)
        return String(value)
      },
    }))
}
