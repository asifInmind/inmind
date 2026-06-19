"use client";
import { motion } from "framer-motion";
import Button from "./Button";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-[linear-gradient(to_bottom,#16132680_50%,#16132633_20%),url('/images/herobg.png')] w-full h-130 sm:h-150 md:h-170 lg:h-screen bg-center bg-cover bg-no-repeat flex justify-center items-center flex-col px-4 sm:px-6 md:px-8 pt-20 sm:pt-0">
      <motion.div
        className="w-full max-w-216.75 h-auto md:h-94.5 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="font-bold text-[32px] sm:text-[44px] sm:mt-12 md:text-[56px] lg:text-[70px] text-[#ffffff] leading-tight"
          variants={itemVariants}
        >
          One platform to run your entire operation
        </motion.h1>

        <motion.p
          className="text-[15px] sm:text-[17px] md:text-[20px] font-medium text-[#FFFFFF] pt-3"
          variants={itemVariants}
        >
          Stop juggling courier portals, chasing refunds, and losing revenue to
          bad returns. inMind gives growing Pakistani brands the control room
          they never had.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-3.5 mt-12"
          variants={itemVariants}
        >
          <Button
            width={"262px"}
            height={"56px"}
            bg={"#328476"}
            color={"white"}
            content={"Get a Free Demo"}
            icons={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 "
              >
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            }
          />
          <Button
            width={"262px"}
            height={"56px"}
            bg={"white"}
            color={"black"}
            content={"See How it Works"}
          />
        </motion.div>

        <motion.p
          className="font-medium text-[15px] sm:text-[16px] md:text-[18px] italic text-[#ffffff] mt-3"
          variants={itemVariants}
        >
          Trusted by brands managing 5,000+ orders/day
        </motion.p>
      </motion.div>
    </section>
  );
}
