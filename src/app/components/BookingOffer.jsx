"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import Button from "./Button";
import Image from "next/image";

// ... all your variants stay exactly the same ...

const headingVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.35 },
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
const buttonVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 18,
      delay: 0.6,
    },
  },
};

const badgesContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.85,
    },
  },
};

const badgeItem = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function BookingOffer() {
  const buttonRef = useRef(null);
  const isInView = useInView(buttonRef, { once: false });
  const buttonControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      buttonControls.start("visible");
    } else {
      buttonControls.start("hidden");
    }
  }, [isInView, buttonControls]);

  return (
    <>
      <section className="overflow-hidden w-full h-auto md:h-181.25 flex justify-center items-center flex-col bg-[#000000] py-16 md:py-0 px-4 relative">
        {/* heading, paragraph — unchanged */}
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={headingVariants}
          className="w-full max-w-310.5 h-auto font-bold text-[28px] sm:text-[40px] md:text-[40px] lg:text-[60px] text-center leading-tight md:leading-20 text-[#ffffff] lg:w-235"
        >
          Your next{" "}
          <motion.span
            className="text-[#328476] inline-block"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          >
            1,000
          </motion.span>{" "}
          orders should cost you less than your last 1,000.
        </motion.h1>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={paragraphVariants}
          className="w-full max-w-310.5 h-auto text-center text-[#fcfcfc] font-medium text-[15px] md:text-[18px] leading-[100%] mb-10 md:mb-11 mt-4 md:mt-11"
        >
          Less returns. Less manual work. Less money left on the table. That's
          what inMind is built for.
        </motion.p>

        {/* button wrapper — now uses animate instead of whileInView */}
        <motion.div
          ref={buttonRef}
          animate={buttonControls}
          initial="hidden"
          variants={itemVariants}
          className="relative z-10 flex flex-col sm:flex-row justify-center items-center gap-3.5 mt-12"
        >
          <Button
            width={"271px"}
            height={"50px"}
            bg={"#328476"}
            color={"white"}
            content={"Book a Free Demo"}
            icons={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            }
          />
        </motion.div>

        {/* badges — unchanged */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={badgesContainer}
          className="w-full max-w-197.5 h-auto flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-[#fcfcfc] pt-10 md:pt-15"
        >
          <motion.p
            variants={badgeItem}
            className="font-normal text-[16px] md:text-[20px] italic text-white"
          >
            No credit card required
          </motion.p>
          <motion.p
            variants={badgeItem}
            className="font-normal text-[16px] md:text-[20px] italic text-white"
          >
            Setup support included
          </motion.p>
          <motion.p
            variants={badgeItem}
            className="font-normal text-[16px] md:text-[20px] italic text-white"
          >
            Pakistani team, local support
          </motion.p>
        </motion.div>

        <motion.div
          className="absolute right-70 left-70 -bottom-90 opacity-30 z-0 pointer-events-none"
          animate={{ rotate: [150, 210, 150] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src={"/images/Vector 16.png"}
            width={300}
            height={300}
            alt="vector decoration image"
            className="w-180 h-180"
          />
        </motion.div>
      </section>
    </>
  );
}
