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
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      stepNumber: 1,
      heading: "Returns are killing your margins. Most of them were avoidable.",
      paragraphs: `Every returned order costs you the courier fee forward, the courier fee back, the repackaging, and the lost sale window. For most Pakistani brands, 20–35% of orders come back — and no one knows why.
                    \n inMind's Attempt Management tracks every failed delivery in real time, flags high-risk orders before dispatch, and triggers automatic WhatsApp follow-ups.`,
      highlight:
        "Brands using inMind reduce their return rate by up to 40% within the first 90 days.",
      btnText: "See All Supported Couriers",
      btnBlur: "Attempt Management",
      imageSrc: "/images/Vector.png",
      reverse: false,
    },
    {
      stepNumber: 2,
      heading: "You shouldn't need 5 browser tabs to ship one order.",
      paragraphs: `TCS. Leopards. Trax. Swyft. BlueEX. Your team opens each one separately — booking, tracking, updating statuses — copying data back into spreadsheets. It breaks every time a courier changes their portal.
\n inMind connects all courier partners into a single command center. Book, track, manage status updates, and switch couriers — from one screen.`,
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
\n inMind's Accounts Receivable dashboard shows exactly what every courier owes you, down to the shipment, with one click.`,
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
\n inMind has WhatsApp automation and AI-powered workflows  built right in; order confirmations, attempt follow-ups, delivery notifications, return alerts, and custom triggers; all managed from the same platform where your orders live. No integrations. No extra subscriptions.`,
      highlight:
        "Replace up to 3 separate tools. Save PKR 30,000–80,000/month in software costs.",
      btnText: "Explore Automation Features",
      btnBlur: "Built-in Automation",
      imageSrc: "/images/Vector.png",
      reverse: true,
    },
  ];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.addEventListener("wheel", handleWheel, { passive: false });
        } else {
          window.removeEventListener("wheel", handleWheel);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const activeIndexRef = useRef(0);
  const cooldownRef = useRef(false);

  const handleWheel = (e: any) => {
    const el = scrollRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const inView =
      rect.top <= window.innerHeight * 0.5 &&
      rect.bottom >= window.innerHeight * 0.5;
    if (!inView) return;

    const goingDown = e.deltaY > 0;
    const atFirst = activeIndexRef.current === 0;
    const atLast = activeIndexRef.current === steps.length - 1;

    if ((goingDown && atLast) || (!goingDown && atFirst)) return;

    e.preventDefault();

    if (cooldownRef.current) return;
    cooldownRef.current = true;
    setTimeout(() => (cooldownRef.current = false), 700);

    const next = goingDown
      ? Math.min(activeIndexRef.current + 1, steps.length - 1)
      : Math.max(activeIndexRef.current - 1, 0);

    activeIndexRef.current = next;
    setActiveIndex(next);
  };

  return (
    <>
      <Hero />
      <Counters />
<section className="w-full relative overflow-hidden">
    <div className="w-full max-w-7xl mx-auto lg:h-auto flex flex-col md:flex-row justify-start items-center gap-6 md:px-0 py-10 md:py-12">
      <div className="w-[90%] mx-auto lg:ms-12 h-auto z-11">
        <div className="flex justify-start items-center gap-2">
          <p className="text-[14px] md:text-[15px] uppercase pb-6.5">
            Why Brands Switch to InMind{" "}
          </p>
          <div className="w-25 h-0.5 bg-[#328476] mb-6.5 "></div>
        </div>
        <h1 className="font-bold text-[28px] sm:text-[38px] md:text-[60px] leading-tight lg:text-[45px]">
          Your ops team is drowning.
        </h1>
        <h1 className="font-bold text-[28px] sm:text-[38px] md:text-[60px] leading-tight lg:text-[45px] mb-6.5">
          Not because they're incompetent.
        </h1>
        <p className="font-normal text-[15px] md:text-[20px] leading-6 md:leading-7.5 md:pt-0 ">
          Most ecommerce brands in Pakistan are running operations on a
          patchwork of courier portals, WhatsApp threads, Excel sheets, and
          gut feeling. Every day, money slips through the cracks — in returns
          you could have prevented, receivables no one is tracking, and
          automation tools you're paying for separately. inMind fixes all of
          it. In one place.
        </p>
      </div>
    </div>

   <div className="hidden md:block lg:top-10 md:absolute -right-20 top-30 z-10">
      <AnimatedImages />
    </div>
  </section>
      <div
        // ref={scrollRef}
        className="relative w-full overflow-hidden min-h-122"
      >
        {/* dots */}
        {/* <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                activeIndexRef.current = i;
                setActiveIndex(i);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? "bg-[#328476] scale-125" : "bg-gray-300"
              }`}
            />
          ))}
        </div> */}

        {steps.map((step, index) => (
          <div
            key={step.stepNumber}
            className={`w-full transition-all duration-700 ease-in-out `}
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
