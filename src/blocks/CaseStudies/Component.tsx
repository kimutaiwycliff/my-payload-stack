import Bounded from '@/components/Bounded'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import type { CaseStudiesBlock as CaseStudiesBlockProps } from '@/payload-types'
import clsx from 'clsx'
import React from 'react'

export const CaseStudiesBlock: React.FC<CaseStudiesBlockProps> = ({
  heading,
  subheading,
  caseStudy: caseStudies,
}) => {
  return (
    <Bounded>
      <h2 className="max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl">
        {heading && <RichText data={heading} enableGutter={false} />}
      </h2>
      <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
        {subheading && <RichText data={subheading} enableGutter={false} />}
      </div>
      <div className="mt-20 grid gap-16">
        {caseStudies &&
          caseStudies.map(
            (caseStudy, index) =>
              caseStudy && (
                <div
                  key={caseStudy.id}
                  className="relative grid gap-4 opacity-85 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
                >
                  <div className="col-span-1 flex flex-col justify-center gap-4">
                    <h3 className="text-4xl">
                      {caseStudy.company && (
                        <RichText data={caseStudy.company} enableGutter={false} />
                      )}
                    </h3>
                    <div className="max-w-md">
                      {caseStudy.description && (
                        <RichText data={caseStudy.description} enableGutter={false} />
                      )}
                    </div>

                    {/* <PrismicNextLink
                    document={caseStudy}
                    className="after:absolute after:inset-0 hover:underline"
                  >
                    Read <PrismicText field={caseStudy.data.company} /> case
                    study
                  </PrismicNextLink> */}
                  </div>
                  <Media
                    className={clsx('rounded-xl lg:col-span-2', index % 2 && 'md:-order-1')}
                    imgClassName={clsx('rounded-xl lg:col-span-2', index % 2 && 'md:-order-1')}
                    priority
                    resource={caseStudy.companyLogo}
                  />
                </div>
              ),
          )}
      </div>
    </Bounded>
  )
}
