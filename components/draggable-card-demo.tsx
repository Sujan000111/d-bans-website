import React from "react";
import Image from "next/image";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export function DraggableCardDemo() {
  const items = [
    {
      title: "D-BANS Collection 1",
      image: "/images/collection1.jpg", // Replace with your actual image filename
      className: "absolute top-32 left-[10%] sm:left-[20%] md:left-[25%] rotate-[-5deg]",
    },
    {
      title: "D-BANS Collection 2", 
      image: "/images/collection2.jpg", // Replace with your actual image filename
      className: "absolute top-32 right-[10%] sm:right-[20%] md:right-[25%] rotate-[5deg]",
    },
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip px-4">
      <div className="absolute top-1/2 mx-auto -translate-y-3/4 text-center z-0">
        <Image 
          src="/images/d-bans-logo.png" 
          alt="D-BANS Logo" 
          width={256}
          height={256}
          className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 object-contain mx-auto"
        />
      </div>
      {items.map((item, index) => (
        <DraggableCardBody key={index} className={item.className}>
          <Image
            src={item.image}
            alt={item.title}
            width={320}
            height={320}
            className="pointer-events-none relative z-10 h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 object-cover rounded-lg"
          />
          <h3 className="mt-2 sm:mt-4 text-center text-sm sm:text-lg md:text-xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
} 