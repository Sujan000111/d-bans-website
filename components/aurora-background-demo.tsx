"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { SignedIn, SignedOut, SignUpButton, UserButton } from "@clerk/nextjs";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function AuroraBackgroundDemo() {
  // Check if Clerk is available
  const hasClerk = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  return (
    <AuroraBackground>
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
            width={200}
            height={200}
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 object-contain mx-auto"
          />
        </div>
        <div className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold dark:text-white text-center leading-tight">
          D-BANS <br /> LAUNCHING SOON
        </div>
        <div className="font-extralight text-sm sm:text-lg md:text-2xl lg:text-4xl dark:text-neutral-200 py-2 md:py-4 text-center max-w-4xl">
          Join the waitlist for best offers
        </div>
        <div className="flex gap-4 mt-2 md:mt-4">
          {hasClerk ? (
            <>
              <SignedOut>
                <SignUpButton mode="modal">
                  <button className="border border-black dark:border-white rounded-full w-fit text-black dark:text-white px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base hover:scale-105 transition-transform">
                    Join Waitlist
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <div className="flex flex-col items-center gap-2">
                  <div className="text-green-500 font-semibold text-sm sm:text-base text-center">✅ You&apos;re on the waitlist!</div>
                  <UserButton />
                </div>
              </SignedIn>
            </>
          ) : (
            <button className="border border-black dark:border-white rounded-full w-fit text-black dark:text-white px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base hover:scale-105 transition-transform">
              Join Waitlist
            </button>
          )}
        </div>
      </motion.div>
    </AuroraBackground>
  );
} 