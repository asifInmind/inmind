import { motion } from "framer-motion";
import Button from "./Button";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const wordContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.5,
    },
  },
};

const wordItem = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
  },
};

function AnimatedHeading() {
  const text = "Built for Pakistani brands. Priced for Pakistani brands.";
  const words = text.split(" ");

  return (
    <motion.h1
      variants={wordContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      className="w-full max-w-184.5 font-bold text-[32px] sm:text-[42px] md:text-[40px] mt-3 text-[#ffffff] text-center md:text-left flex flex-wrap justify-center md:justify-start"
    >
      {words.map((word, i) => {
        const isHighlighted = word === "Pakistani";
        return (
          <motion.span
            key={i}
            variants={wordItem}
            className={`inline-block mr-[0.25em] ${
              isHighlighted ? "text-[#328476]" : ""
            }`}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.h1>
  );
}

export default function PrimaryBanner() {
  return (
    <>
      <section className="w-full h-auto md:h-141 bg-[#161326] py-12 md:py-0 overflow-x-hidden">
        <div className="w-[90%] md:w-[89%] max-w-310 ms-auto me-auto h-auto md:h-141 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex flex-col items-center md:items-start"
          >
            <motion.div>
              <span className="relative z-10 flex justify-center items-center  bg-[#328476] w-[271px] h-[50px] text-white rounded-[4px]">
                Pakistani-built · PKR pricing
              </span>

              {/* <Button
                width={"271px"}
                height={"50px"}
                bg={"#328476"}
                color={"white"}
                content={"Pakistani-built · PKR pricing"}
              /> */}
            </motion.div>

            <AnimatedHeading />

            <motion.p
              variants={fadeUp}
              className="font-medium text-[14px] md:text-[16px] w-full max-w-184.5 text-white text-center md:text-left mt-4 md:mt-0"
            >
              No dollar-denominated SaaS pricing. No features hidden behind
              expensive tiers. inMind is built for the realities of Pakistani
              ecommerce — COD-heavy, multi-courier, high-volume.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={slideInRight}
          >
            <Button
              width={"271px"}
              height={"50px"}
              bg={"#ffffff"}
              color={"black"}
              content={"Talk to Us on WhatsApp"}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
