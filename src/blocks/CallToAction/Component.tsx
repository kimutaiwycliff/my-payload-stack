import React from 'react'

import type { CallToActionBlock as CTABlockProps } from '@/payload-types'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import Bounded from '@/components/Bounded'

export const CallToActionBlock: React.FC<CTABlockProps> = ({ links, richText }) => {
  return (
    <Bounded className="relative py-32 text-center font-medium md:py-40">
      <div className="glow absolute -z-10 aspect-square w-full max-w-sm rounded-full bg-blue-500/50 blur-[160px] filter" />
      <div className="mt-8 max-w-xl text-balance text-5xl">
        {richText && <RichText className="mb-0" data={richText} enableGutter={false} />}
      </div>

      <div className="flex flex-col gap-8 mt-6">
        {(links || []).map(({ link }, i) => {
          return <CMSLink key={i} size="lg" {...link} />
        })}
      </div>
    </Bounded>
  )
}
