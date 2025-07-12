"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyBanner = ({
  children,
  className,
  onDismiss,
}: {
  children: React.ReactNode;
  className?: string;
  onDismiss?: () => void;
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    if (onDismiss) {
      onDismiss();
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cn(
            "sticky top-0 z-50 flex w-full items-center justify-center px-4 py-3 text-sm font-medium",
            className
          )}
        >
          <div className="flex items-center justify-between w-full max-w-7xl">
            <div className="flex-1 text-center">
              {children}
            </div>
            <button
              onClick={handleDismiss}
              className="ml-4 flex-shrink-0 rounded-full p-1 hover:bg-white/20 transition-colors"
              aria-label="Dismiss banner"
            >
              <svg
                className="h-4 w-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 