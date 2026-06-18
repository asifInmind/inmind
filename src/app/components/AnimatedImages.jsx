"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedImages() {
  // PERFECT CENTER MATH:
  // Center is 150. Radius is 145.
  // Start point must be X = 150, Y = 5 (150 - 145) to stay perfectly centered!
  const orbitPath = "M 150, 5 A 145,145 0 1,1 149.9,5 Z";

  const icons = [
    "/icons/icon (1).svg",
    "/icons/icon (2).svg",
    "/icons/icon (3).svg",
    "/icons/icon (4).svg",
    "/icons/icon (5).svg",
  ];

  return (
    <div className="relative w-75 h-75 rounded-full flex items-center justify-center border border-[#cac9c9]">
      <div className="w-61 h-61 z-10 flex items-center justify-center ">
        <Image
          src={"/images/Vector 16.png"}
          width={150}
          height={150}
          alt="vector image"
          className="rotate-360"
        />
      </div>

      {icons.map((icon, index) => {
        const startingPercentage = (index / icons.length) * 100;

        return (
          <motion.div
            key={index}
            className="w-10 h-10 rounded-full flex items-center justify-center absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2"
            style={{
              offsetPath: `path("${orbitPath}")`,
            }}
            animate={{
              offsetDistance: [
                `${startingPercentage}%`,
                `${startingPercentage + 100}%`,
              ],
              offsetRotate: "0deg",
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Image
              src={icon}
              alt="icons"
              width={40}
              height={40}
              className="object-contain"
            />
          </motion.div>
        );
      })}
    </div>
  );
}
