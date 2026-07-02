"use client";

import { motion, useReducedMotion } from "framer-motion";

type ActiveSide = "shijimi" | "youkai" | null;

type Props = {
  activeSide: ActiveSide;
};

const boundaryPath: Record<Exclude<ActiveSide, null> | "neutral", string> = {
  neutral: "M500 58 C494 214 508 376 500 532 C492 690 508 820 500 942",
  shijimi: "M680 58 C670 210 696 374 680 532 C666 694 692 820 680 942",
  youkai: "M320 58 C306 214 334 374 320 532 C304 692 332 822 320 942",
};

const particlePositions = {
  neutral: [
    { cx: 493, cy: 206 },
    { cx: 510, cy: 420 },
    { cx: 489, cy: 646 },
    { cx: 507, cy: 804 },
  ],
  shijimi: [
    { cx: 668, cy: 206 },
    { cx: 692, cy: 420 },
    { cx: 665, cy: 646 },
    { cx: 686, cy: 804 },
  ],
  youkai: [
    { cx: 308, cy: 206 },
    { cx: 334, cy: 420 },
    { cx: 305, cy: 646 },
    { cx: 326, cy: 804 },
  ],
};

export function BoundaryLight({ activeSide }: Props) {
  const reduceMotion = useReducedMotion();
  const state = activeSide ?? "neutral";
  const isShijimi = activeSide === "shijimi";
  const isYoukai = activeSide === "youkai";
  const accent = isShijimi ? "#dff7ff" : isYoukai ? "#ffd27a" : "#fff1b8";
  const glowOpacity = isShijimi ? 0.7 : isYoukai ? 0.76 : 0.56;

  return (
    <motion.svg
      className="boundary-light-svg"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
      aria-hidden="true"
      initial={false}
    >
      <defs>
        <linearGradient id="boundary-main-gradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="18%" stopColor="#fff8d6" stopOpacity="0.9" />
          <stop offset="48%" stopColor={accent} stopOpacity="1" />
          <stop offset="72%" stopColor="#f2a93b" stopOpacity="0.82" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <filter id="boundary-soft-glow" x="-80%" y="-12%" width="260%" height="124%">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feColorMatrix
            in="blur"
            result="warmGlow"
            type="matrix"
            values="1 0 0 0 0.95  0 0.72 0 0 0.46  0 0 0.35 0 0.12  0 0 0 0.78 0"
          />
          <feMerge>
            <feMergeNode in="warmGlow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <motion.path
        d={boundaryPath[state]}
        fill="none"
        stroke="url(#boundary-main-gradient)"
        strokeLinecap="round"
        strokeWidth="2.2"
        filter="url(#boundary-soft-glow)"
        animate={
          reduceMotion
            ? { d: boundaryPath[state], opacity: glowOpacity }
            : {
                d: boundaryPath[state],
                opacity: glowOpacity,
                pathLength: [0.96, 1, 0.97],
              }
        }
        transition={{
          d: { duration: 0.78, ease: [0.22, 1, 0.36, 1] },
          opacity: { duration: 0.42 },
          pathLength: { duration: 5.6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
        }}
      />

      <motion.path
        d={boundaryPath[state]}
        fill="none"
        stroke={isShijimi ? "#9ee8ff" : "#f4b348"}
        strokeLinecap="round"
        strokeWidth="18"
        opacity="0.18"
        filter="url(#boundary-soft-glow)"
        animate={{ d: boundaryPath[state], opacity: isShijimi || isYoukai ? 0.22 : 0.14 }}
        transition={{ d: { duration: 0.78, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.4 } }}
      />

      {particlePositions[state].map((particle, index) => (
        <motion.circle
          key={index}
          r={index === 1 ? 2.2 : 1.6}
          fill={index % 2 === 0 ? "#fff8dd" : accent}
          filter="url(#boundary-soft-glow)"
          animate={
            reduceMotion
              ? { cx: particle.cx, cy: particle.cy, opacity: 0.48 }
              : {
                  cx: particle.cx,
                  cy: [particle.cy - 8, particle.cy + 8, particle.cy - 5],
                  opacity: [0.18, 0.68, 0.28],
                }
          }
          transition={{
            cx: { duration: 0.78, ease: [0.22, 1, 0.36, 1] },
            cy: { duration: 5.2 + index * 0.45, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
            opacity: { duration: 4.8 + index * 0.3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
          }}
        />
      ))}
    </motion.svg>
  );
}
