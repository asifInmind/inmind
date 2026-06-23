"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SetupProcedure() {
  const data = [
    {
      id: 1,
      title: "connect",
      description:
        "Link your courier accounts, sales channels (Shopify, WooCommerce, manual), and WhatsApp number.",
    },
    {
      id: 2,
      title: "centralize",
      description:
        "All your orders, shipments, courier balances, and automation flows live in one dashboard. Your team works from one screen.",
      zindex: "z-10",
    },
    {
      id: 3,
      title: "optimize",
      description: `Use real data to reduce returns, recover receivables, automate follow-ups, and scale operations — without adding headcount`,
      zindex: "z-15",
    },
  ];

  // Helper to safely disable y-axis translation on mobile screens
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <>
      <section className="bg-[#FAF9F6] h-auto relative w-full overflow-hidden">
        <div className="w-full max-w-310 ms-auto me-auto px-4 md:px-8 lg:px-0 py-16 md:py-20 lg:py-25">
          {/* Headings */}
          <div className="w-full max-w-257.5 h-auto relative lg:ps-10 ">
            <p className="text-[14px] md:text-[15px] uppercase tracking-wide">
              process------
            </p>
            <h1 className="font-bold text-[32px] sm:text-[42px] md:text-[60px] leading-tight">
              Set up in a day{" "}
            </h1>
            <h1 className="font-bold text-[32px] sm:text-[42px] md:text-[60px] leading-tight">
              See result in a month
            </h1>
          </div>

          {/* Top Decorative Image */}
          <div className="hidden md:block absolute right-0 top-0">
            <div className="relative">
              <Image
                src="/images/Group 17.png"
                width={210}
                height={210}
                alt="vector images"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* --- FIXED CAROUSEL TRACK --- */}
          {/* Added md:justify-center to center columns perfectly on desktop viewports */}
          <div className="flex flex-row overflow-x-auto md:overflow-x-visible md:justify-center lg:mx-auto lg:w-245 xl:w-full lg:gap-5 justify-start gap-6 md:gap-8 w-full mt-10 md:mt-16 relative snap-x snap-mandatory scrollbar-none pb-4 pl-[20px] pr-4 -mx-4 md:px-0 md:mx-0">
            {data.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: isMobile ? 0 : 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
                // Changed snap-center to snap-start for crisp alignment matching margins
                // Added md:shrink so columns dynamically fit the container area without spillover
                className={`${item.zindex || ""} w-[85%] md:w-1/3 shrink-0 md:shrink snap-center h-auto bg-[#ffffff] rounded-[30px] cursor-pointer md:rounded-[50px] p-8 md:p-10 border border-[#e6e6e6] hover:bg-[#eeeeee]`}
              >
                <Image
                  src={"/images/Vector.png"}
                  alt="images"
                  width={80}
                  height={80}
                  className="w-16 h-16 md:w-20 md:h-20"
                />
                <h1 className="font-bold text-[22px] md:text-[28px] leading-tight capitalize pt-4">
                  {item.title}
                </h1>
                <p className="font-medium text-[14px] w-full pt-2">
                  {item.description}
                </p>
              </motion.div>
            ))}

            {/* Invisible layout spacer to balance horizontal scroll tracks on mobile viewports */}
            <div className="w-4 shrink-0 md:hidden" />

            {/* Background Decorative vectors */}
            <Image
              src={"/icons/Vector.svg"}
              width={200}
              height={200}
              alt="vector decore image "
              className="hidden md:block absolute left-78 bottom-28 w-auto h-auto pointer-events-none"
            />
            <Image
              src={"/icons/Vector.svg"}
              width={100}
              height={100}
              alt="vector decore image "
              className="hidden md:block absolute right-82 bottom-38 z-11 rotate-45 w-auto h-auto pointer-events-none"
            />
          </div>
        </div>
      </section>
    </>
  );
}
