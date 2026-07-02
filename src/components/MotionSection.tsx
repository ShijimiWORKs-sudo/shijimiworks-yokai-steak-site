"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function MotionSection({ children, className = "", delay = 0 }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`motion-fade-up ${className}`}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.58, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
