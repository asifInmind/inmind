"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Card from "./Card";

export default function Platform() {
  const slideInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = {
    duration: 0.6,
    ease: "easeOut",
    delay: 0.1,
  };

  const motionProps = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: false, amount: 0.2 },
    variants: slideInUp,
    transition,
  };

  return (
    <main className="bg-[#161326] py-22.25 px-5  relative">
      {/* bg decoration */}
      <div className="absolute right-0 top-0">
        <Image
          src="/images/Vector 16.png"
          width={300}
          height={300}
          alt="vector decoration"
          className="w-180 h-180"
        />
      </div>

      {/* heading */}
      <motion.section
        className="w-full px-4 max-w-[1240px] mx-auto mb-16.5 lg:px-0"
        {...motionProps}
      >
        <p className="font-medium text-[16px] md:text-[18px] leading-[100%] text-white">
          Platform
        </p>
        <h1 className="font-bold text-[32px] sm:text-[42px] md:text-[60px] leading-tight md:leading-20 text-white">
          Everything your brand <br />
          needs to scale operations.
        </h1>
      </motion.section>

      {/* all rows wrapper */}
      <div className="w-full max-w-[1240px] mx-auto px-4 lg:px-0 flex flex-col gap-5">
        {/* row 1 — mobile: 1col | md: 2col equal | lg+: 2:1 ratio */}
        <div className="flex flex-col md:flex-row gap-5 items-stretch">
          <motion.div
            className="w-full md:flex-1 lg:flex-[2] z-1"
            {...motionProps}
          >
            <Card
              title="Attempt Management"
              description="Reduce returns before they happen with real-time delivery tracking and auto follow-ups."
            />
          </motion.div>
          <motion.div
            className="w-full md:flex-1 lg:flex-[1] z-1"
            {...motionProps}
          >
            <Card
              title="Unified Courier Portal"
              description="All couriers in one place — TCS, Leopards, Trax, Swyft, BlueEX."
            />
          </motion.div>
        </div>

        {/* row 2 — mobile: 1col | md: 2col | lg+: 3col */}
        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-5 items-stretch">
          <motion.div
            className="w-full md:flex-[1_1_calc(50%-10px)] lg:flex-1 z-1"
            {...motionProps}
          >
            <Card
              title="Accounts Receivable"
              description="Know exactly what every courier owes you, down to the shipment level."
            />
          </motion.div>
          <motion.div
            className="w-full md:flex-[1_1_calc(50%-10px)] lg:flex-1 z-1"
            {...motionProps}
          >
            <Card
              title="WhatsApp Automation"
              description="Order updates, attempt follow-ups, delivery alerts — fully automated."
            />
          </motion.div>
          <motion.div
            className="w-full md:flex-[1_1_100%] lg:flex-1 z-1"
            {...motionProps}
          >
            <Card
              title="AI Automations"
              description="Smart triggers and intelligent workflows without extra tools or subscriptions."
            />
          </motion.div>
        </div>

        {/* row 3 — mobile: 1col | md+: 2col equal */}
        <div className="flex flex-col md:flex-row gap-5 items-stretch">
          <motion.div className="w-full md:flex-1 z-1" {...motionProps}>
            <Card
              title="COD Reconciliation"
              description="Never get underpaid by a courier again. Full remittance tracking."
            />
          </motion.div>
          <motion.div className="w-full md:flex-1 z-1" {...motionProps}>
            <Card
              title="Analytics Dashboard"
              description="Real-time ops visibility across orders, returns, couriers, and revenue."
            />
          </motion.div>
        </div>

        {/* row 4 — always full width */}
        <div className="flex">
          <motion.div className="w-full z-1" {...motionProps}>
            <Card
              title="Multi-Team Access"
              description="Roles and permissions for your entire operations team."
            />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
