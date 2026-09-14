"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ScrollProgressBar() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(
    scrollYProgress,
    reduceMotion ? { stiffness: 1000, damping: 100, restDelta: 0.001 } : { stiffness: 220, damping: 30, restDelta: 0.001 },
  );

  return <motion.div className="scroll-progress-bar" style={{ scaleX }} aria-hidden="true" />;
}
