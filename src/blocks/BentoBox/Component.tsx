import Bounded from '@/components/Bounded'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { GlowingEffect } from '@/components/ui/glowing-effect'
import type { BentoBoxBlock as BentoBoxProps } from '@/payload-types'
import clsx from 'clsx'

export const BentoBoxBlock: React.FC<BentoBoxProps> = ({ Heading, Cards }) => {
  return (
    <Bounded>
      {Heading && (
        <RichText className=" text-balance text-center " data={Heading} enableGutter={false} />
      )}

      <div className="mt-16 grid max-w-4xl grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 md:gap-10">
        {Cards?.map((card, index) => {
          const isWide = index % 3 === 0 // Randomly make every third card wide
          return (
            <div
              className={clsx(
                'relative row-span-3 grid grid-rows-subgrid gap-4 rounded-lg bg-gradient-to-b from-gray-900 to-gray-950 p-4',
                isWide ? 'md:col-span-2' : 'md:col-span-1',
              )}
              key={index}
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <h3 className="text-2xl">
                <RichText data={card?.Title} enableGutter={false} />
              </h3>
              <div className="max-w-md text-balance text-slate-300">
                <RichText data={card.Description!} enableGutter={false} />
              </div>
              <Media
                className={clsx('max-h-36 w-auto rounded-xl', isWide && 'md:w-full')}
                imgClassName={clsx('max-h-36 w-auto rounded-xl', isWide && 'md:w-full')}
                priority
                resource={card?.Image}
              />
            </div>
          )
        })}
      </div>
    </Bounded>
  )
}
