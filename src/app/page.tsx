"use client";
import SetupProcedure from "./components/SetupProcedure";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Platform from "./components/Platform";
import Carousel from "./components/Carousel";
import Counters from "./components/Counters";
import BookingOffer from "./components/BookingOffer";
import PrimaryBanner from "./components/PrimaryBanner";
import AnimatedImages from "./components/AnimatedImages";
import { useState, useEffect } from "react";
export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const steps = [
    {
      stepNumber: 1,
      heading: "Returns are killing your margins. Most of them were avoidable.",
      paragraphs: `Every returned order costs you the courier fee forward, the courier fee back, the repackaging, and the lost sale window. For most Pakistani brands, 20–35% of orders come back — and no one knows why.
                    inMind's Attempt Management tracks every failed delivery in real time, flags high-risk orders before dispatch, and triggers automatic WhatsApp follow-ups.`,
      highlight:
        "Brands using inMind reduce their return rate by up to 40% within the first 90 days.",
      btnText: "See All Supported Couriers",
      btnBlur: "Attempt Management",
      imageSrc: "/images/Vector.png",
      reverse: false, // image right
    },
    {
      stepNumber: 2,
      heading: "You shouldn't need 5 browser tabs to ship one order.",
      paragraphs: `TCS. Leopards. Trax. Swyft. BlueEX. Your team opens each one separately — booking, tracking, updating statuses — copying data back into spreadsheets. It breaks every time a courier changes their portal.
inMind connects all courier partners into a single command center. Book, track, manage status updates, and switch couriers — from one screen.`,
      highlight:
        "Cut your dispatch time by 60%. Give your ops team their day back..",
      btnText: "See All Supported Couriers",
      btnBlur: "Unified Courier Management",
      imageSrc: "/images/Vector.png",
      reverse: true,
    },
    {
      stepNumber: 3,
      heading: "Couriers owe you money. Do you know exactly how much?",
      paragraphs: `Every COD order you ship, the courier collects cash on your behalf. Reconciling across multiple couriers, hundreds of shipments, partial remittances — it's a full-time job. Most brands are losing PKR 50,000–500,000+ every month.
inMind's Accounts Receivable dashboard shows exactly what every courier owes you, down to the shipment, with one click.`,
      highlight:
        "One brand recovered PKR 2.3M in outstanding courier receivables in their first quarter.",
      btnText: "See the Receivables Dashboard",
      btnBlur: "Courier Receivables",
      imageSrc: "/images/Vector.png",
      reverse: false,
    },
    {
      stepNumber: 4,
      heading: "You're paying 3 different tools to do what we do in one.",
      paragraphs: `WhatsApp automation; one subscription. AI automation; another tool. Manual team CRM follow-ups; another platform. Most brands are stitching together 4–5 tools and still not getting the coverage they need.
inMind has WhatsApp automation and AI-powered workflows built right in; order confirmations, attempt follow-ups, delivery notifications, return alerts, and custom triggers; all managed from the same platform where your orders live. No integrations. No extra subscriptions.`,
      highlight:
        "Replace up to 3 separate tools. Save PKR 30,000–80,000/month in software costs.",
      btnText: "Explore Automation Features",
      btnBlur: "Built-in Automation",
      imageSrc: "/images/Vector.png",
      reverse: true,
    },
  ];
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [steps.length, isPaused]);
  return (
    <>
      <Hero />

      <Counters />

      <section className="w-full lg:h-auto flex flex-col md:flex-row justify-center items-center gap-6 px-4 md:px-0 relative overflow-hidden py-10 md:py-12">
        <div className="w-full md:w-180 lg:w-215 xl:w-290 xl:ms-15 lg:ms-20 h-auto lg:h-auto md:h-85 ms-0 md:ms-25 md:me-25 z-100">
          <p className="text-[14px] md:text-[15px] uppercase">
            Why Brands Switch to InMind
          </p>
          <h1 className="font-bold text-[28px] sm:text-[38px] md:text-[60px] leading-tight lg:text-[45px]">
            Your ops team is drowning.
          </h1>
          <h1 className="font-bold text-[28px] sm:text-[38px] md:text-[60px] leading-tight lg:text-[45px]">
            Not because they're incompetent.
          </h1>
          <p className=" font-normal text-[15px] md:text-[20px] leading-6 md:leading-7.5 pt-4 md:pt-0 w-237.75 lg:w-220 md:w-190">
            Most ecommerce brands in Pakistan are running operations on a
            patchwork of courier portals, WhatsApp threads, Excel sheets, and
            gut feeling. Every day, money slips through the cracks — in returns
            you could have prevented, receivables no one is tracking, and
            automation tools you're paying for separately. inMind fixes all of
            it. In one place.
          </p>
        </div>
        <div className="hidden md:block lg:top-10  md:absolute -right-20 top-30">
          <AnimatedImages />
        </div>
      </section>
      <div
        className="relative w-full overflow-hidden min-h-122"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          cursor:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='54' height='54' style='font-size:16px'><text y='16'>⏸️</text></svg>\"), auto",
        }}
      >
        {steps.map((step, index) => (
          <div
            key={step.stepNumber}
            className={`w-full transition-all duration-700 ease-in-out ${
              index === activeIndex
                ? "opacity-100 translate-y-0 relative z-10"
                : "opacity-0 translate-y-10 absolute top-0 left-0 -z-10 pointer-events-none"
            }`}
          >
            <Services {...step} />
          </div>
        ))}
      </div>

      <SetupProcedure />

      <Platform />
      <Carousel />
      <PrimaryBanner />
      <BookingOffer />
    </>
  );
}
