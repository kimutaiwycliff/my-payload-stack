import React from 'react'
import RichText from '@/components/RichText'
import type { ShowcaseBlock as ShowcaseBlockProps } from '@/payload-types'
import Bounded from '@/components/Bounded'
import { Cog, PaintRoller } from 'lucide-react'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import clsx from 'clsx'
import AnimatedContent from './AnimatedContent'

export const ShowcaseBlock: React.FC<ShowcaseBlockProps> = ({
  heading,
  image,
  icon,
  subheading,
  body,
  links,
}) => {
  return (
    <Bounded>
      <div className="glow absolute -z-10 aspect-square w-full max-w-xl rounded-full bg-blue-400/20 blur-3xl filter" />
      <AnimatedContent>
        {heading && (
          <RichText
            className="text-balance text-center text-5xl font-medium md:text-7xl"
            data={heading}
            enableGutter={false}
          />
        )}
      </AnimatedContent>
      <div className="mt-16 grid items-center gap-8 rounded-xl border border-blue-50/20 bg-gradient-to-b from-slate-50/15 to-slate-50/5 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:gap-0 lg:py-12">
        <div>
          <div className="w-fit rounded-lg bg-blue-500/35 p-4 text-3xl">
            {icon && (icon === 'gear' ? <Cog /> : <PaintRoller />)}
          </div>
          <div className="mt-6 text-2xl font-normal">
            {subheading && <RichText data={subheading} enableGutter={false} />}
          </div>
          <div className="prose prose-invert mt-4 max-w-xl">
            {body && <RichText data={body} enableGutter={false} />}
          </div>
          <div className="flex flex-col gap-8 mt-6">
            {(links || []).map(({ link }, i) => {
              return <CMSLink key={i} appearance={'glow'} {...link} />
            })}
          </div>
        </div>
        <Media
          className={clsx('opacity-90 shadow-2xl lg:col-span-2 lg:pt-0')}
          imgClassName={clsx(
            'opacity-90 shadow-2xl lg:col-span-2 lg:pt-0 lg:order-1 lg:translate-x-[15%]',
          )}
          priority
          resource={image}
        />
      </div>
    </Bounded>
  )
}
