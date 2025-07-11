"use client";

import React from "react";
import Image from "next/image";
import { WobbleCard } from "./ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto w-full px-4 sm:px-0">
      <WobbleCard
        containerClassName="col-span-1 sm:col-span-2 lg:col-span-2 h-full bg-pink-800 min-h-[400px] sm:min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs sm:max-w-sm">
          <h2 className="text-left text-balance text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            D-BANS revolutionizes modern fashion
          </h2>
          <p className="mt-3 sm:mt-4 text-left text-sm sm:text-base text-neutral-200 leading-relaxed">
            With cutting-edge designs and premium quality materials, D-BANS is setting new standards in contemporary fashion.
          </p>
        </div>
        <Image
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=500&fit=crop&crop=center"
          width={500}
          height={500}
          alt="D-BANS fashion collection"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] sm:min-h-[350px] bg-emerald-800">
        <h2 className="max-w-80 text-left text-balance text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Style meets sustainability.
        </h2>
        <p className="mt-3 sm:mt-4 max-w-[26rem] text-left text-sm sm:text-base text-neutral-200 leading-relaxed">
          Every D-BANS piece is crafted with eco-conscious materials and ethical production practices.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 sm:col-span-2 lg:col-span-3 bg-blue-900 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm sm:max-w-md">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Join the D-BANS revolution - where innovation meets timeless style
          </h2>
          <p className="mt-3 sm:mt-4 max-w-[26rem] text-left text-sm sm:text-base text-neutral-200 leading-relaxed">
            Be among the first to experience our exclusive collections. Premium fashion that defines the future of style.
          </p>
        </div>
        <Image
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&h=500&fit=crop&crop=center"
          width={500}
          height={500}
          alt="D-BANS premium collection"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
} 