'use client'

import { useTranslations } from 'next-intl'
import { useRouter } from '../../../../navigation'
import { cn } from '@/lib/utils'

export default function NewLpWhatWeDo({
  maxWidth = 'max-w-7xl',
}: {
  maxWidth?: string
}) {
  const t = useTranslations('NewLP.whatWeDo')
  const router = useRouter()

  const services = [
    {
      key: 'sap-transformation',
      title: 'SAP Transformation (ECC - S/4HANA & rollouts):',
      description:
        "Full lifecycle rollout, greenfield/brownfield, regional and global rollout. Let's elevate your business together!",
    },
    {
      key: 'global-trade',
      title: 'OneSource Global Trade:',
      description:
        "Implementing and Support the Global Trade for Americas. Let's elevate your strategies together!",
    },
    {
      key: 'tax-compliance',
      title: 'Brazil-USA Tax Compliance:',
      description:
        "Brazil fiscal module, and crossborder processes. Let's transform your business vision together!",
    },
    {
      key: 'nearshore-support',
      title: 'Nearshore AMS & Support:',
      description:
        "English/Portuguese support model, cost-efficient coverage for US and Latin American customers. Let's code your success story together!",
    },
  ]

  const handleServiceClick = (serviceKey: string) => {
    router.push(`/services?service=${serviceKey}`)
  }

  return (
    <section className="w-full bg-white px-4 pb-12 py-16 pt-10">
      <div className={cn('mx-auto', maxWidth)}>
        {/* Title */}
        <h2 className="mb-4 text-center font-impact text-4xl font-bold tracking-tight text-black md:text-6xl">
          {t('title')}
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mb-12 max-w-4xl text-balance text-center text-lg text-zinc-500 lg:text-xl">
          {t('description')}
        </p>

        {/* Services List */}
        <div className="flex flex-col gap-2">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => handleServiceClick(service.key)}
              className="flex min-h-[200px] cursor-pointer  items-center border-l-4 border-cyan-400 bg-sky-50 p-6 transition-all duration-200 hover:bg-sky-100 hover:shadow-md"
            >
              <div className="flex w-full flex-col justify-between gap-4 lg:flex-row lg:items-center">
                <h3 className="max-w-[300px] text-xl font-semibold text-black lg:max-w-[400px] lg:text-3xl">
                  {service.title}
                </h3>
                <p className="max-w-[600px] text-balance leading-relaxed text-zinc-500 lg:self-end lg:text-xl">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
