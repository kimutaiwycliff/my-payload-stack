import React from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import Bounded from '@/components/Bounded'
import StarGrid from '@/components/StarGrid'
import { BackgroundGradient } from '@/components/ui/background-gradient'

export const MediumImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  return (
    <Bounded>
      <div className="relative">
        <StarGrid />
        <div className=" mb-8 mx-auto backdrop-blur-sm/70">

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
               
              <BackgroundGradient className="rounded-3xl  bg-white dark:bg-zinc-900 ">
              <Media
                className=""
                imgClassName="rounded-3xl "
                priority
                resource={media}
              />
              </BackgroundGradient>
            </div>
          )}
        </div>
      </div>
    </Bounded>
  )
}
