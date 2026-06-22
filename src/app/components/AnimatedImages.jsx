"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const SIZE = 300;
const RADIUS = 145;
const CENTER = SIZE / 2;

const orbitPath = `M ${CENTER},${CENTER - RADIUS} A ${RADIUS},${RADIUS} 0 1,1 ${CENTER - 0.1},${CENTER - RADIUS} Z`;

const dotAngles = [0, 45, 90, 135, 180, 225, 270, 315];

const icons = [
  "/icons/icon (1).svg",
  "/icons/icon (2).svg",
  "/icons/icon (3).svg",
  "/icons/icon (4).svg",
  "/icons/icon (5).svg",
];

export default function AnimatedImages() {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: SIZE, height: SIZE }}
    >
      <svg
        className="absolute inset-0 pointer-events-none"
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        overflow="visible"
      >
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          stroke="#cac9c9"
          strokeWidth={1}
        />

        {dotAngles.map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x = CENTER + RADIUS * Math.sin(rad);
          const y = CENTER - RADIUS * Math.cos(rad);
          return (
            <circle
              key={angle}
              cx={x}
              cy={y}
              r={angle % 90 === 0 ? 4 : 3}
              fill="#cac9c9"
            />
          );
        })}
      </svg>

      <div className="relative z-10 flex items-center justify-center">
        <Image
          src="/images/Vector 17.png"
          width={150}
          height={150}
          alt="center graphic"
        />
      </div>

      {icons.map((icon, index) => {
        const startOffset = (index / icons.length) * 100;

        return (
          <motion.div
            key={index}
            className="absolute flex items-center justify-center w-11 h-11 rounded-full "
            style={{
              offsetPath: `path("${orbitPath}")`,
              left: 0,
              top: 0,
              offsetRotate: "0deg",
            }}
            animate={{
              offsetDistance: [`${startOffset}%`, `${startOffset + 100}%`],
              // keep icons upright
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Image
              src={icon}
              alt={`icon ${index + 1}`}
              width={48}
              height={48}
              className="object-contain"
            />
          </motion.div>
        );
      })}
    </div>
  );
}
