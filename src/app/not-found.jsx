"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Upward text slide
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const floatVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <main className="w-full h-screen bg-[#161326] flex justify-center items-center flex-col px-4 overflow-hidden select-none">
      <motion.div
        className="text-center max-w-2xl flex flex-col items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={floatVariants}
          animate="animate"
          className="relative"
        >
          <h1 className="font-black text-[120px] sm:text-[180px] tracking-tight leading-none text-transparent bg-clip-text bg-linear-to-b from-white to-[#4B4763] opacity-20 absolute -top-10 left-1/2 -translate-x-1/2 pointer-events-none">
            404
          </h1>
          <motion.h2
            variants={textVariants}
            className="font-bold text-[80px] sm:text-[120px] text-white leading-none tracking-tight relative z-10"
          >
            404
          </motion.h2>
        </motion.div>

        <motion.h3
          variants={textVariants}
          className="font-bold text-[24px] sm:text-[32px] text-[#328476] mt-4"
        >
          Page not found
        </motion.h3>

        <motion.p
          variants={textVariants}
          className="text-[16px] sm:text-[18px] font-medium text-[#FFFFFF] opacity-80 max-w-md mt-3 leading-relaxed"
        >
          The page you are looking for has been moved or no longer exists
        </motion.p>

        <motion.div
          variants={textVariants}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10 w-full sm:w-auto"
        >
          <Link href="/" passHref legacyBehavior>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="w-60 h-14 bg-[#328476] text-white font-semibold text-[16px] rounded-lg flex justify-center items-center transition-colors hover:bg-[#286b5f] shadow-lg cursor-pointer"
            >
              Back to Home
            </motion.a>
          </Link>

          <Link href="/support" passHref legacyBehavior>
            <motion.a
              whileHover={{
                scale: 1.03,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="w-60 h-14 bg-transparent text-white border border-white/20 font-semibold text-[16px] rounded-lg flex justify-center items-center transition-colors cursor-pointer"
            >
              Contact Support
            </motion.a>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
