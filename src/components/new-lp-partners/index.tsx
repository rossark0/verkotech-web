// This template requires the Embla Auto Scroll plugin to be installed:
//
// npm install embla-carousel-auto-scroll

"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface NewLpPartnersProps {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const NewLpPartners = ({
  heading = "Trusted by these companies",
  logos = [
    {
      id: "logo-1",
      description: "Logo 1",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-2",
      description: "Logo 2",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-wordmark.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-3",
      description: "Logo 3",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-wordmark.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-4",
      description: "Logo 4",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-wordmark.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-5",
      description: "Logo 5",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-6",
      description: "Logo 6",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-7",
      description: "Logo 7",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark.svg",
      className: "h-4 w-auto",
    },
    {
      id: "logo-8",
      description: "Logo 8",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-wordmark.svg",
      className: "h-7 w-auto",
    },
  ],
}: NewLpPartnersProps) => {

  const t = useTranslations('partners')

  return (
    <section className="overflow-hidden mt-3 lg:mt-0 lg:flex-row flex-col-reverse px-4 flex items-center justify-center max-w-7xl mx-auto">
      <div className="flex flex-col">
        <h2 className="lg:mb-6 mb-3 text-center lg:text-left text-balance text-black text-3xl font-bold lg:text-4xl">
          {t('title')}
        </h2>
        <div className="relative mb-3 mx-auto lg:hidden block w-[300px] h-[100px]">
           <Image src="/assets/thhhh.png" alt="Partners" fill className="object-cover" />
        </div>
        <p className="text-balance text-center lg:text-left text-base text-zinc-500 lg:text-xl">
          {t('description')}
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className="relative hidden lg:block lg:w-[400px] lg:h-[400px] w-[132px] h-[132px]">
           <Image src="/assets/thhhh.png" alt="Partners" fill className="object-contain" />
        </div>
      </div>
      {/* <div>
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <div>
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className={logo.className}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-12 to-transparent"></div>
          <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-12 to-transparent"></div>
        </div>
      </div> */}
    </section>
  );
};

export { NewLpPartners };
