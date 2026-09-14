"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Props = { href: string; children: ReactNode; variant?: "primary" | "outline" | "dark" };

const MotionLink = motion.create(Link);

export function Button({ href, children, variant = "primary" }: Props) {
  const reduceMotion = useReducedMotion();
  const styles = {
    primary: "bg-sky-700 text-white shadow-sm hover:bg-sky-800 hover:shadow-md",
    outline: "border border-current bg-white/70 hover:bg-white",
    dark: "bg-stone-100 text-stone-950 shadow-sm hover:bg-white hover:shadow-md",
  }[variant];

  return (
    <MotionLink
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition duration-200 active:translate-y-0 ${styles}`}
      whileHover={reduceMotion ? undefined : { y: -3, scale: 1.02 }}
      whileTap={reduceMotion ? undefined : { scale: 0.96 }}
      transition={{ type: "spring", stiffness: 420, damping: 24 }}
    >
      {children}
    </MotionLink>
  );
}
