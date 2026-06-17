"use client";
import { motion } from "framer-motion";
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

  return (
    <>
      <main className="bg-[#161326] py-22.25">
        <motion.section
          className="w-310 h-35 ms-auto me-auto mb-16.5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={slideInUp}
          transition={transition}
        >
          <p className="font-medium text-[18px] leading-[100%] text-[#ffffff]">
            Platform
          </p>
          <h1 className="font-bold text-[60px] leading-20 text-[#ffffff]">
            Everything your brand <br />
            needs to scale operations.
          </h1>
        </motion.section>

        {/* first row  */}
        <section className="flex justify-center items-center gap-5 my-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideInUp}
            transition={transition}
          >
            <Card
              title={"Attempt Management"}
              description={
                "Reduce returns before they happen with real-time delivery tracking and auto follow-ups."
              }
              cardWidth="820px"
              cardHeight="489px"
              imgBoxWidth="780px"
              imgBoxHeight="340px"
              brRadius="10px"
              margin="22px"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideInUp}
            transition={transition}
          >
            <Card
              title={"Unified Courier Portal"}
              description={
                "All couriers in one place — TCS, Leopards, Trax, Swyft, BlueEX and more."
              }
              cardWidth="400px"
              cardHeight="489px"
              imgBoxWidth="362px"
              imgBoxHeight="340px"
            />
          </motion.div>
        </section>

        {/* second row  */}
        <section className="flex justify-center items-center gap-5 my-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideInUp}
            transition={transition}
          >
            <Card
              title={"Accounts Receivable"}
              description={
                "Know exactly what every courier owes you, down to the shipment level."
              }
              cardWidth="400px"
              cardHeight="489px"
              imgBoxWidth="362px"
              imgBoxHeight="340px"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideInUp}
            transition={transition}
          >
            <Card
              title={"WhatsApp Automation"}
              description={
                "Order updates, attempt follow-ups, delivery alerts — fully automated."
              }
              cardWidth="400px"
              cardHeight="489px"
              imgBoxWidth="362px"
              imgBoxHeight="340px"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideInUp}
            transition={transition}
          >
            <Card
              title={"AI Automations"}
              description={
                "Smart triggers and intelligent workflows without extra tools or subscriptions."
              }
              cardWidth="400px"
              cardHeight="489px"
              imgBoxWidth="362px"
              imgBoxHeight="340px"
            />
          </motion.div>
        </section>

        {/* third row  */}
        <section className="flex justify-center items-center gap-5 my-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideInUp}
            transition={transition}
          >
            <Card
              title={"COD Reconciliation"}
              description={
                "Never get underpaid by a courier again. Full remittance tracking."
              }
              cardWidth="611px"
              cardHeight="489px"
              imgBoxWidth="569px"
              imgBoxHeight="340px"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideInUp}
            transition={transition}
          >
            <Card
              title={"Analytics Dashboard"}
              description={
                "Real-time ops visibility across orders, returns, couriers, and revenue."
              }
              cardWidth="611px"
              cardHeight="489px"
              imgBoxWidth="569px"
              imgBoxHeight="340px"
            />
          </motion.div>
        </section>

        <section className="flex justify-center items-center gap-5 my-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideInUp}
            transition={transition}
          >
            <Card
              title={"Multi-Team Access"}
              description={
                "Roles and permissions for your entire operations team."
              }
              cardWidth="1240px"
              cardHeight="489px"
              imgBoxWidth="1193px"
              imgBoxHeight="340px"
            />
          </motion.div>
        </section>
      </main>
    </>
  );
}
