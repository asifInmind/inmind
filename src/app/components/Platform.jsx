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
    <main className="bg-[#161326] py-22.25 px-5 lg:px-10 relative">
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
        className="w-full px-4 max-w-310 mx-auto mb-16.5 lg:px-0"
        {...motionProps}
      >
        <div className="flex justify-start items-center gap-2">
          <p className="text-[14px] md:text-[15px] text-white uppercase pb-6.5">
            Platfroms{" "}
          </p>
          <div className="w-25 h-0.5 bg-[#328476] mb-6.5 "></div>
        </div>
        <h1 className="font-bold text-[23px] sm:text-[42px] md:text-[60px] leading-tight md:leading-20 text-white">
          Everything your brand <br />
          needs to scale operations.
        </h1>
      </motion.section>

      {/* all rows wrapper */}
      <div className="w-full max-w-310 mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Row 1: card 1 spans 2 cols, card 2 spans 1 col */}
          <motion.div className="md:col-span-2 z-1" {...motionProps}>
            <Card
              title="Attempt Management"
              description="Reduce returns before they happen with real-time delivery tracking and auto follow-ups."
            />
          </motion.div>
          <motion.div className="md:col-span-1 z-1" {...motionProps}>
            <Card
              title="Unified Courier Portal"
              description="All couriers in one place — TCS, Leopards, Trax, Swyft, BlueEX."
            />
          </motion.div>

          {/* Row 2: 3 equal cards, each 1 col */}
          <motion.div className="md:col-span-1 z-1" {...motionProps}>
            <Card
              title="Accounts Receivable"
              description="Know exactly what every courier owes you, down to the shipment level."
            />
          </motion.div>
          <motion.div className="md:col-span-1 z-1" {...motionProps}>
            <Card
              title="WhatsApp Automation"
              description="Order updates, attempt follow-ups, delivery alerts "
            />
          </motion.div>
          <motion.div className="md:col-span-1 z-1" {...motionProps}>
            <Card
              title="AI Automations"
              description="Smart triggers and intelligent workflows without extra tools or subscriptions."
            />
          </motion.div>

          {/* Row 3: 2 equal cards, each 1.5 cols */}
          {/* Row 3: 2 equal cards */}
          {/* Row 3: 2 truly equal cards */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-5">
            <motion.div className="z-1" {...motionProps}>
              <Card
                title="COD Reconciliation"
                description="Never get underpaid by a courier again. Full remittance tracking."
              />
            </motion.div>
            <motion.div className="z-1" {...motionProps}>
              <Card
                title="Analytics Dashboard"
                description="Real-time ops visibility across orders, returns, couriers, and revenue."
              />
            </motion.div>
          </div>

          {/* Row 4: full width */}
          <motion.div className="md:col-span-3 z-1" {...motionProps}>
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
