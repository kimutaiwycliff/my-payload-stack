import type { DataTableBlock as DataTableBlockProps } from '@/payload-types'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Bounded from '@/components/Bounded'
import dynamic from 'next/dynamic'

const DataTableBlockRenderer = dynamic(() => import('./DataTableBlockRenderer'), {
  ssr: true, // optional, keeps it purely client-side
})

export const DataTableBlock: React.FC<DataTableBlockProps> = async ({
  collection,
  defaultPageSize,
}) => {
  const payload = await getPayload({ config: configPromise })
  const pageSize = defaultPageSize || 10
  const maxPages = 5
  const result = await payload.find({
    collection: collection,
    limit: pageSize * maxPages,
    pagination: false,
    overrideAccess: false,
  })

  return (
    <Bounded>
      <DataTableBlockRenderer
        data={result.docs || []}
        defaultPageSize={pageSize}
      />
    </Bounded>
  )
}
