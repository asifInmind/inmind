"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Card from "./Card";
import Image from "next/image";

export default function Platform() {
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 768) {
        setScreenSize("mobile");
      } else if (window.innerWidth < 1024) {
        setScreenSize("tablet");
      } else if (window.innerWidth < 1280) {
        setScreenSize("laptop");
      } else if (window.innerWidth < 1536) {
        setScreenSize("desktop");
      } else {
        setScreenSize("widescreen");
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const slideInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = {
    duration: 0.6,
    ease: "easeOut",
    delay: 0.1,
  };

  const getSize = (
    widescreenVal,
    desktopVal,
    laptopVal,
    tabletVal,
    mobileVal,
  ) => {
    if (screenSize === "mobile") return mobileVal;
    if (screenSize === "tablet") return tabletVal;
    if (screenSize === "laptop") return laptopVal;
    if (screenSize === "desktop") return desktopVal;
    return widescreenVal;
  };

  return (
    <>
      <main className="bg-[#161326] py-22.25 px-4 md:px-0 relative">
        <div className="absolute right-0 top-0 ">
          <Image
            src={"/images/Vector 16.png"}
            width={300}
            height={300}
            alt="vector decoration image"
            className="w-180 h-180"
          />
        </div>
        <motion.section
          className="w-full max-w-310 md:w-180 mx-auto h-auto lg:w-7xl  mb-16.5 lg:ps-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={slideInUp}
          transition={transition}
        >
          <p className="font-medium text-[16px] md:text-[18px] leading-[100%] text-[#ffffff]">
            Platform
          </p>
          <h1 className="font-bold text-[32px] sm:text-[42px] md:text-[60px] leading-tight md:leading-20 text-[#ffffff]">
            Everything your brand <br />
            needs to scale operations.
          </h1>
        </motion.section>

        {/* first row */}
        <section className="flex flex-col justify-center items-center gap-5 my-5 md:flex-row mx-auto md:w-180 lg:flex-row  lg:w-240 lg:items-start ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideInUp}
            transition={transition}
            className="z-1 bg-[#161326] w-full"
          >
            <Card
              title={"Attempt Management"}
              description={
                "Reduce returns before they happen with real-time delivery tracking and auto follow-ups."
              }
              cardWidth={getSize("820px", "820px", "100%", "100%", "100%")}
              imgBoxWidth={getSize("780px", "780px", "100%", "100%", "100%")}
              imgBoxHeight={getSize(
                "340px",
                "340px",
                "280px",
                "220px",
                "200px",
              )}
              cardHeight={getSize("489px", "489px", "auto", "auto", "auto")}
              margin="22px"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideInUp}
            transition={transition}
            className="bg-[#909090] z-1 w-full"
          >
            <Card
              title={"Unified Courier Portal"}
              description={
                "All couriers in one place — TCS, Leopards, Trax, Swyft, BlueEX and more."
              }
              cardWidth={getSize("400px", "400px", "100%", "100%", "100%")}
              imgBoxWidth={getSize("362px", "362px", "100%", "100%", "100%")}
              imgBoxHeight={getSize(
                "340px",
                "340px",
                "280px",
                "220px",
                "200px",
              )}
              cardHeight={getSize("489px", "489px", "auto", "auto", "auto")}
            />
          </motion.div>
        </section>

        {/* second row */}
        <section className="flex flex-col md:flex-row justify-center items-center gap-5 my-5 md:w-180 md:justify-start lg:justify-center lg:w-240 xl:260 ms-auto me-auto lg:items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideInUp}
            transition={transition}
            className="bg-[#909090] z-1 w-full"
          >
            <Card
              title={"Accounts Receivable"}
              description={
                "Know exactly what every courier owes you, down to the shipment level."
              }
              cardWidth={getSize("400px", "400px", "100%", "100%", "100%")}
              imgBoxWidth={getSize("362px", "362px", "100%", "100%", "100%")}
              imgBoxHeight={getSize(
                "340px",
                "340px",
                "280px",
                "220px",
                "200px",
              )}
              cardHeight={getSize("489px", "489px", "auto", "auto", "auto")}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideInUp}
            transition={transition}
            className="bg-[#909090] z-1 w-full"
          >
            <Card
              title={"WhatsApp Automation"}
              description={
                "Order updates, attempt follow-ups, delivery alerts — fully automated."
              }
              cardWidth={getSize("400px", "400px", "100%", "100%", "100%")}
              imgBoxWidth={getSize("362px", "362px", "100%", "100%", "100%")}
              imgBoxHeight={getSize(
                "340px",
                "340px",
                "280px",
                "220px",
                "200px",
              )}
              cardHeight={getSize("489px", "489px", "auto", "auto", "auto")}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideInUp}
            transition={transition}
            className="bg-[#909090] z-1 w-full"
          >
            <Card
              title={"AI Automations"}
              description={
                "Smart triggers and intelligent workflows without extra tools or subscriptions."
              }
              cardWidth={getSize("400px", "400px", "100%", "100%", "100%")}
              imgBoxWidth={getSize("362px", "362px", "100%", "100%", "100%")}
              imgBoxHeight={getSize(
                "340px",
                "340px",
                "280px",
                "220px",
                "200px",
              )}
              cardHeight={getSize("489px", "489px", "auto", "auto", "auto")}
            />
          </motion.div>
        </section>

        {/* third row */}
        <section className="flex flex-col md:flex-row justify-center items-center gap-5 my-5 md:w-180 md:justify-start lg:justify-center lg:w-240 ms-auto me-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideInUp}
            transition={transition}
            className="bg-[#909090] z-1 w-full"
          >
            <Card
              title={"COD Reconciliation"}
              description={
                "Never get underpaid by a courier again. Full remittance tracking."
              }
              cardWidth={getSize("611px", "611px", "100%", "100%", "100%")}
              imgBoxWidth={getSize("569px", "569px", "100%", "100%", "100%")}
              imgBoxHeight={getSize(
                "340px",
                "340px",
                "280px",
                "220px",
                "200px",
              )}
              cardHeight={getSize("489px", "489px", "auto", "auto", "auto")}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideInUp}
            transition={transition}
            className="bg-[#909090] z-1 w-full"
          >
            <Card
              title={"Analytics Dashboard"}
              description={
                "Real-time ops visibility across orders, returns, couriers, and revenue."
              }
              cardWidth={getSize("611px", "611px", "100%", "100%", "100%")}
              imgBoxWidth={getSize("569px", "569px", "100%", "100%", "100%")}
              imgBoxHeight={getSize(
                "340px",
                "340px",
                "280px",
                "220px",
                "200px",
              )}
              cardHeight={getSize("489px", "489px", "auto", "auto", "auto")}
            />
          </motion.div>
        </section>

        {/* last row */}
        <section className="flex justify-center items-center gap-5 my-5 md:w-180 md:justify-start lg:justify-center lg:w-240 xl:w-310 ms-auto me-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideInUp}
            transition={transition}
            className="w-full md:w-auto lg:w-full xl:w-full bg-[#909090] z-1"
          >
            <Card
              title={"Multi-Team Access"}
              description={
                "Roles and permissions for your entire operations team."
              }
              cardWidth={getSize("1200px", "1240px", "100%", "100%", "100%")}
              cardHeight={getSize("489px", "489px", "auto", "auto", "auto")}
              imgBoxWidth={getSize("1193px", "1200px", "100%", "100%", "100%")}
              imgBoxHeight={getSize(
                "340px",
                "340px",
                "280px",
                "220px",
                "200px",
              )}
            />
          </motion.div>
        </section>
      </main>
    </>
  );
}
