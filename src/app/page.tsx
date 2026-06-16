import Image from "next/image";
import FeaturesSteps from "./components/FeaturesSteps";
import SetupProcedure from "./components/SetupProcedure";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Platform from "./components/Platform";

import Counters from "./components/Counters";
import BookingOffer from "./components/BookingOffer";
import PrimaryBanner from "./components/PrimaryBanner";
export default function Home() {
  // const steps = [
  //   {
  //     stepNumber: 1,
  //     // eyebrow: "Unified Courier Management",
  //     heading: (
  //       <>Returns are killing your margins. Most of them were avoidable.</>
  //     ),
  //     paragraphs: [
  //       "TCS. Leopards. Trax. Swyft. BlueEX. Your team opens each one separately — booking, tracking, updating statuses — copying data back into spreadsheets. It breaks every time a courier changes their portal.",
  //       "inMind connects all courier partners into a single command center. Book, track, manage status updates, and switch couriers — from one screen.",
  //     ],
  //     highlight:
  //       "Cut your dispatch time by 60%. Give your ops team their day back.",
  //     ctaLabel: "See All Supported Couriers",
  //     imageSrc: "/images/Vector.png",
  //     reverse: true, // image right
  //   },
  //   {
  //     stepNumber: 2,
  //     eyebrow: "Real-Time Tracking",
  //     heading: (
  //       <>
  //         Know where every order is,
  //         <br />
  //         without asking.
  //       </>
  //     ),
  //     paragraphs: [
  //       "No more pinging couriers for updates or refreshing five different tracking pages. Every shipment status lands in one live feed.",
  //       "Customers get accurate ETAs automatically, and your support team stops fielding 'where's my order' tickets.",
  //     ],
  //     highlight:
  //       "Cut support tickets by 40% with always-on tracking visibility.",
  //     ctaLabel: "See Tracking In Action",
  //     imageSrc: "/images/Vector.png",
  //     reverse: false,
  //   },
  //   {
  //     stepNumber: 3,
  //     eyebrow: "Smart Courier Selection",
  //     heading: (
  //       <>
  //         Pick the fastest, cheapest
  //         <br />
  //         courier every time.
  //       </>
  //     ),
  //     paragraphs: [
  //       "Rates, speed, and reliability vary by route and courier. Manually comparing them order by order doesn't scale.",
  //       "inMind compares all your connected couriers instantly and recommends the best one for every order.",
  //     ],
  //     highlight: "Save up to 20% on delivery costs with smarter routing.",
  //     ctaLabel: "Explore Smart Routing",
  //     imageSrc: "/images/Vector.png",
  //     reverse: true, // image right
  //   },
  //   {
  //     stepNumber: 4,
  //     eyebrow: "One-Click Reporting",
  //     heading: (
  //       <>
  //         Stop building spreadsheets
  //         <br />
  //         by hand every week.
  //       </>
  //     ),
  //     paragraphs: [
  //       "Pulling delivery performance, costs, and failure rates from five portals takes hours and is error-prone.",
  //       "Get a single dashboard with the metrics that matter, updated automatically as orders move.",
  //     ],
  //     highlight: "Save 5+ hours a week previously spent on manual reporting.",
  //     ctaLabel: "View Sample Report",
  //     imageSrc: "/images/Vector.png",
  //     reverse: false,
  //   },
  // ];

  const data = [
    {
      id: 1,
      title1: "attempt management",
      title2: "",
      paragraph1: "",
      paragraph2: "",
      paragraph3: "",
      btnText: "",
    },
    {
      id: 1,
      title1: "",
      title2: "",
      paragraph1: "",
      paragraph2: "",
      paragraph3: "",
      btnText: "",
    },
    {
      id: 1,
      title1: "",
      title2: "",
      paragraph1: "",
      paragraph2: "",
      paragraph3: "",
      btnText: "",
    },
    {
      id: 1,
      title1: "",
      title2: "",
      paragraph1: "",
      paragraph2: "",
      paragraph3: "",
      btnText: "",
    },
  ];
  return (
    <>
      <Hero />
      {/* <FeaturesSteps/> */}
      <Counters />
      <section className=" w-full min-h-screen flex justify-center  gap-6">
        <div className="w-273.5 h-83 ms-25 mt-22.75  ">
          <p className="text-[15px] uppercase">Why Brands Switch to InMind</p>
          <h1 className="font-bold text-[60px]">Your ops team is drowning.</h1>
          <h1 className="font-bold text-[60px]">
            Not because they're incompetent.
          </h1>
          <p className="font-normal text-[20px] leading-7.5">
            Most ecommerce brands in Pakistan are running operations on a
            patchwork of courier portals, WhatsApp threads, Excel sheets, and
            gut feeling. Every day, money slips through the cracks — in returns
            you could have prevented, receivables no one is tracking, and
            automation tools you're paying for separately. inMind fixes all of
            it. In one place.
          </p>
        </div>
        <div className="w-124.25 h-122.75  relative">
          <Image
            src={"/images/Ellipse 2360.png"}
            alt="vector images"
            width={50}
            height={50}
          />
        </div>
      </section>
      {/* {steps.map((step) => (
        // Always include a unique key when rendering lists in React
        <Services key={step.stepNumber} {...step} />
      ))} */}
      <SetupProcedure />

      <Platform />
      <PrimaryBanner />
      <BookingOffer />
    </>
  );
}
