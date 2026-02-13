"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, Transition } from "motion/react";
import { cn } from "@/lib/utils";

interface TextLoopProps {
  staticText?: string;
  rotatingTexts?: string[];
  className?: string;
  interval?: number;
  transition?: Transition;
  staticTextClassName?: string;
  rotatingTextClassName?: string;
  backgroundClassName?: string;
  cursorClassName?: string;
}

export default function TextLoop({
  staticText = "Simple",
  rotatingTexts = ["Bayar", "Aman", "Cepat"],
  className,
  interval = 3000,
  transition = { duration: 0.8, ease: "easeInOut" },
  staticTextClassName,
  rotatingTextClassName,
  backgroundClassName,
  cursorClassName,
}: TextLoopProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, interval);
    return () => clearInterval(timer);
  }, [rotatingTexts.length, interval]);

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-start w-fit gap-x-2 md:gap-x-3 gap-y-1 text-3xl md:text-7xl font-medium tracking-tight",
        className,
      )}
    >
      <span className={cn("whitespace-nowrap", staticTextClassName)}>
        {staticText}
      </span>
      <div className="relative flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={rotatingTexts[index]}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={transition}
            className="overflow-hidden whitespace-nowrap relative"
          >
            {/* Background gradient box */}
            <div
              className={cn(
                "absolute inset-0",
                "bg-linear-to-r from-transparent via-amber-200/30 to-amber-200",
                "dark:from-transparent dark:via-yellow-950/30 dark:to-yellow-950/60",
                backgroundClassName,
              )}
            />

            <span
              className={cn(
                "relative bg-clip-text text-transparent",
                "bg-linear-to-r from-yellow-400 to-yellow-800",
                "dark:bg-linear-to-r from-yellow-400 to-yellow-600 pr-1",
                rotatingTextClassName,
              )}
            >
              {rotatingTexts[index]}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Cursor Line */}
        <motion.div
          className={cn(
            "w-0.75 md:w-1 bg-yellow-500 h-[1.10em] sm:h-[1em]",
            cursorClassName,
          )}
          animate={{ opacity: [1, 0.5] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
    </div>
  );
}
