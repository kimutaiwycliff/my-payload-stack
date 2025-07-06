import React from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import Bounded from '@/components/Bounded'
import StarGrid from '@/components/StarGrid'
import { GlowingEffect } from '@/components/ui/glowing-effect'

export const MediumImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  return (
    <Bounded>
      <div className="relative">
        <StarGrid />
        <div className=" mb-8 mx-auto">
          {richText && (
            <RichText
              className="mb-6 text-balance text-center"
              data={richText}
              enableGutter={false}
            />
          )}

          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex gap-4 mx-auto items-center justify-center">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
        <div>
          {media && typeof media === 'object' && (
            <div className="relative">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                className='absolute -mx-4 md:-mx-8 2xl:-mx-16 rounded-xl'
              />
              <Media
                className="-mx-4 md:-mx-8 2xl:-mx-16"
                imgClassName="rounded-xl"
                priority
                resource={media}
              />
            </div>
          )}
        </div>
      </div>
    </Bounded>
  )
}
