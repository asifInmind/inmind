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
    // FIXED: Combined the linear gradient overlay with your original background image URL
    <section className="bg-[linear-gradient(to_bottom,#16132680_50%,#16132633_20%),url('/images/herobg.png')] w-full h-185 bg-center bg-cover bg-no-repeat flex justify-center items-center flex-col">
      <motion.div
        className="w-216.75 h-94.5 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="font-bold text-[70px] text-[#ffffff] leading-tight"
          variants={itemVariants}
        >
          One platform to run your entire operation
        </motion.h1>

        <motion.p
          className="text-[20px] font-medium text-[#FFFFFF] pt-3"
          variants={itemVariants}
        >
          Stop juggling courier portals, chasing refunds, and losing revenue to
          bad returns. inMind gives growing Pakistani brands the control room
          they never had.
        </motion.p>

        <motion.div
          className="flex justify-center items-center gap-3.5 mt-12"
          variants={itemVariants}
        >
          <Button
            width={"262px"}
            height={"56px"}
            bg={"#328476"}
            color={"white"}
            content={"Get a Free Demo"}
          />
          <Button
            width={"223px"}
            height={"56px"}
            bg={"white"}
            color={"black"}
            content={"See How it Works"}
          />
        </motion.div>

        <motion.p
          className="font-medium text-[18px] italic text-[#ffffff] mt-3"
          variants={itemVariants}
        >
          Trusted by brands managing 5,000+ orders/day
        </motion.p>
      </motion.div>
    </section>
  );
}
