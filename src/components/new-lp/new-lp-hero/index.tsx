'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function NewLpHero() {
  const t = useTranslations('NewLP.hero')
  return (
    <section className="relative flex h-[30vh] w-full items-center justify-center lg:h-[80vh]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/herobg.jpg"
          alt="Hero Background"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 z-10 bg-blue-950/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl overflow-hidden px-4 text-center text-white">
        {/* Brand Title with Brain Icon */}
        <div className="flex w-full items-center justify-center gap-2 lg:gap-4">
          <h3 className="font-canter text-5xl lg:!text-9xl font-bold">
            {t('weAre')}
          </h3>
          <div className="relative h-14 w-14 sm:h-20 sm:w-20 -translate-y-1 md:h-24 md:w-24 lg:h-44 lg:w-44">
            <Image
              src="/brainn.svg"
              alt="Brain Icon"
              fill
              className="text-cyan-400"
            />
          </div>
          <h3 className="-translate-y-1.5 font-glacial text-4xl lg:!text-9xl md:!text-5xl font-bold lg:-translate-y-3">
            {t('verkotech')}
          </h3>
        </div>

        {/* Main Heading */}
        <h2 className="mb-0 font-impact text-2xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-6xl">
          {t('mainTitle1')}
        </h2>
        <h2 className="mb-2 font-impact text-2xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-6xl lg:mb-6">
          {t('mainTitle2')}
        </h2>

        {/* Description */}
        {/* <p className="mx-auto max-w-[300px] text-sm font-medium opacity-90 md:max-w-[500px] md:text-xl lg:text-2xl">
          {t('description')}
        </p> */}
      </div>
    </section>
  )
}
