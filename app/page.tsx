import AuroraBackgroundDemo from '@/components/aurora-background-demo'
import { WobbleCardDemo } from '@/components/wobble-card-demo'
import { DraggableCardDemo } from '@/components/draggable-card-demo'
import { FloatingDock } from '@/components/ui/floating-dock'
import {
  IconBrandInstagram,
  IconBrandX,
  IconBrandYoutube,
  IconMail,
} from "@tabler/icons-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <AuroraBackgroundDemo />
      
      <div className="px-4 sm:px-6 md:px-8 pb-12 md:pb-16">
        <WobbleCardDemo />
      </div>
      
      {/* Interactive Collections Section */}
      <div className="pb-16 md:pb-20">
        <DraggableCardDemo />
      </div>
      
      {/* Fixed floating dock at bottom */}
      <div className="fixed bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <FloatingDock
          items={[
            {
              title: "D-BANS",
              icon: <div className="h-full w-full flex items-center justify-center text-purple-500 font-bold text-lg">DB</div>,
              href: "#",
              external: false,
            },
            {
              title: "Instagram",
              icon: <IconBrandInstagram className="h-full w-full text-pink-500" />,
              href: "https://www.instagram.com/dbansofficial?igsh=MW4wOWthM29iM3czdQ==",
              external: true,
            },
            {
              title: "YouTube",
              icon: <IconBrandYoutube className="h-full w-full text-red-500" />,
              href: "https://www.youtube.com/@D-BANS",
              external: true,
            },
            {
              title: "X (Twitter)",
              icon: <IconBrandX className="h-full w-full text-slate-800 dark:text-white" />,
              href: "https://x.com/DbansOfficial?t=uTXk1lL7veHjsR4OMXNezg&s=09",
              external: true,
            },
            {
              title: "Contact",
              icon: <IconMail className="h-full w-full text-orange-500" />,
              href: "#",
              external: false,
            },
          ]}
        />
      </div>
    </main>
  )
} 