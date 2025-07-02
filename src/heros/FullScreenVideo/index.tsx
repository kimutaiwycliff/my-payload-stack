'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import type { Page } from '@/payload-types'
import clsx from 'clsx'


export const FullscreenVideoHero:React.FC<Page['hero']> = ({
  video,
  fallbackImage,
  overlayOpacity = 0.5,
  textAlignment = 'center',
  parallaxIntensity = 0,
  richText,
}) => {
  const { setHeaderTheme } = useHeaderTheme()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setHeaderTheme('dark')
  }, [setHeaderTheme])

  // Parallax effect on scroll
  useEffect(() => {
    if (parallaxIntensity! <= 0) return

    const handleScroll = () => {
      const offset = window.scrollY * (parallaxIntensity! / 100)
      if (overlayRef.current) {
        overlayRef.current.style.transform = `translateY(${offset}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [parallaxIntensity])

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <div
      className="relative  w-full h-screen overflow-hidden text-white"
      data-theme="dark"
    >
      {/* Video */}
      {video && typeof video === 'object' && (
       <Media fill imgClassName="-z-10 object-cover" priority resource={video} />
      )}

      {/* Fallback image only if video is missing */}
      {!video && fallbackImage && typeof fallbackImage === 'object' && (
        <Media
          resource={fallbackImage}
          fill
          imgClassName="absolute top-0 left-0 w-full h-full object-cover"
          priority
        />
      )}

      {/* Overlay with parallax */}
      <div
        ref={overlayRef}
        className="absolute inset-0 flex items-center justify-center"
        style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity})` }}
      >
        <div
          className={clsx(
            'container z-10 relative',
            textAlignment === 'center' && 'flex justify-center text-center',
            textAlignment === 'left' && 'flex justify-start text-left',
            textAlignment === 'right' && 'flex justify-end text-right'
          )}
        >
          <div className="max-w-3xl">
            {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
          </div>
        </div>
      </div>


    </div>
  )
}
