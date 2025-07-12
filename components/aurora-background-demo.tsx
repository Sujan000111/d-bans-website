"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { SignedIn, SignedOut, SignUpButton, UserButton } from "@clerk/nextjs";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export default function AuroraBackgroundDemo() {
  // Check if Clerk is available
  const hasClerk = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 sm:px-6 md:px-8"
      >
        <div className="mb-4 sm:mb-6">
          <Image 
            src="/images/d-bans-logo.png" 
            alt="D-BANS Logo" 
            width={300}
            height={300}
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 object-contain mx-auto"
          />
        </div>

        <div className="flex flex-col items-center justify-center mt-2 mb-4 md:mb-6">
          <TypewriterEffectSmooth 
            words={[
              {
                text: "LAUNCHING",
              },
              {
                text: "SOON",
                className: "text-red-800 dark:text-red-800",
              },
            ]}
          />
        </div>
        <div className="font-extralight text-sm sm:text-lg md:text-2xl lg:text-4xl dark:text-neutral-200 py-2 md:py-4 text-center max-w-4xl">
          Join the waitlist for best offers
        </div>
        <div className="flex gap-4 mt-2 md:mt-4 mb-12 sm:mb-16 md:mb-20 lg:mb-24 px-4">
          {hasClerk ? (
            <>
              <SignedOut>
                <SignUpButton mode="modal">
                  <button className="border border-black dark:border-white rounded-full w-fit text-black dark:text-white px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 text-xs sm:text-sm md:text-base hover:scale-105 transition-transform">
                    Join Waitlist
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <div className="flex flex-col items-center gap-2">
                  <div className="text-green-500 font-semibold text-xs sm:text-sm md:text-base text-center">✅ You&apos;re on the waitlist!</div>
                  <UserButton />
                </div>
              </SignedIn>
            </>
          ) : (
            <button className="border border-black dark:border-white rounded-full w-fit text-black dark:text-white px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 text-xs sm:text-sm md:text-base hover:scale-105 transition-transform">
              Join Waitlist
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
} 