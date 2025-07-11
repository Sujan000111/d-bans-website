"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DraggableCardContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function DraggableCardContainer({
  children,
  className,
}: DraggableCardContainerProps) {
  return (
    <div className={cn("relative", className)}>
      {children}
    </div>
  );
}

interface DraggableCardBodyProps {
  children: React.ReactNode;
  className?: string;
}

export function DraggableCardBody({
  children,
  className,
}: DraggableCardBodyProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      className={cn(
        "group cursor-grab rounded-xl border border-neutral-200 bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-xl active:cursor-grabbing dark:border-neutral-700 dark:bg-neutral-900",
        className
      )}
      drag
      dragElastic={0.05}
      dragConstraints={{
        top: -200,
        left: -250,
        right: 250,
        bottom: 200,
      }}
      dragMomentum={false}
      whileDrag={{
        scale: 1.05,
        rotate: 5,
        zIndex: 10,
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      initial={{
        scale: 0.8,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.6,
          delay: Math.random() * 0.5,
          ease: "easeOut",
        },
      }}
    >
      {children}
    </motion.div>
  );
} 