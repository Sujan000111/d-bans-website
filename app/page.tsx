import AuroraBackgroundDemo from '@/components/aurora-background-demo'
import { PinContainer } from '@/components/ui/3d-pin'
import { AuroraBackground } from '@/components/ui/aurora-background'
import { Button } from '@/components/ui/moving-border'
import { StickyBanner } from '@/components/ui/sticky-banner'
import {
  IconBrandInstagram,
  IconBrandX,
  IconBrandYoutube,
  IconMail,
} from "@tabler/icons-react"

export default function Home() {
  return (
    <>
      <StickyBanner className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
        <p className="mx-0 max-w-[90%] text-white drop-shadow-md text-xs sm:text-sm md:text-base">
          🚀 Get the fastest notifications on updates and exclusive offers! Join our waitlist today.
        </p>
      </StickyBanner>
      <main className="min-h-screen">
        {/* Hero Section with Aurora Background */}
        <AuroraBackground>
          <AuroraBackgroundDemo />
        </AuroraBackground>
        
        {/* Follow Us On Section and 3D Pin Components with Single Aurora Background */}
        <AuroraBackground>
          <div className="text-center py-10 sm:py-16 md:py-20 px-4">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-sm sm:text-lg md:text-xl lg:text-2xl font-bold px-4 py-2 sm:px-6 sm:py-3"
              borderClassName="h-16 w-16 sm:h-20 sm:w-20 opacity-[0.8] bg-[radial-gradient(#991b1b_40%,transparent_60%)]"
            >
              FOLLOW US ON
            </Button>
          </div>
          
          <div className="min-h-[20rem] sm:min-h-[25rem] md:min-h-[30rem] w-full flex items-start justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap pt-4 px-4 pb-8">
            <PinContainer
              title="Instagram"
              href="https://www.instagram.com/dbansofficial?igsh=MW4wOWthM29iM3czdQ=="
            >
              <div className="flex basis-full flex-col p-3 sm:p-4 tracking-tight text-slate-100/50 w-[16rem] h-[16rem] sm:w-[18rem] sm:h-[18rem] md:w-[20rem] md:h-[20rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-sm sm:text-base text-slate-100">
                  D-BANS Instagram
                </h3>
                <div className="text-xs sm:text-sm md:text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500">
                    Follow us for the latest fashion trends and exclusive content.
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-3 sm:mt-4 bg-gradient-to-br from-pink-500 via-purple-500 to-violet-500 items-center justify-center">
                  <IconBrandInstagram className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-white" />
                </div>
              </div>
            </PinContainer>

            <PinContainer
              title="YouTube"
              href="https://www.youtube.com/@D-BANS"
            >
              <div className="flex basis-full flex-col p-3 sm:p-4 tracking-tight text-slate-100/50 w-[16rem] h-[16rem] sm:w-[18rem] sm:h-[18rem] md:w-[20rem] md:h-[20rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-sm sm:text-base text-slate-100">
                  D-BANS YouTube
                </h3>
                <div className="text-xs sm:text-sm md:text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500">
                    Subscribe for fashion videos, tutorials, and behind-the-scenes content.
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-3 sm:mt-4 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 items-center justify-center">
                  <IconBrandYoutube className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-white" />
                </div>
              </div>
            </PinContainer>

            <PinContainer
              title="X (Twitter)"
              href="https://x.com/DbansOfficial?t=uTXk1lL7veHjsR4OMXNezg&s=09"
            >
              <div className="flex basis-full flex-col p-3 sm:p-4 tracking-tight text-slate-100/50 w-[16rem] h-[16rem] sm:w-[18rem] sm:h-[18rem] md:w-[20rem] md:h-[20rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-sm sm:text-base text-slate-100">
                  D-BANS X (Twitter)
                </h3>
                <div className="text-xs sm:text-sm md:text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500">
                    Follow us for quick updates, announcements, and fashion tips.
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-3 sm:mt-4 bg-gradient-to-br from-slate-500 via-gray-500 to-zinc-500 items-center justify-center">
                  <IconBrandX className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-white" />
                </div>
              </div>
            </PinContainer>
          </div>
        </AuroraBackground>
      </main>
    </>
  )
} 