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

  return (
    <>
      <section className="bg-[#FAF9F6] h-auto relative w-full overflow-hidden">
        <div className="w-full max-w-310 ms-auto me-auto px-4 md:px-8 lg:px-0 py-16 md:py-20 lg:py-25">
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
          <div className="hidden md:block absolute right-0 top-0">
            <div className="relative">
              <Image
                src="/images/Group 17.png"
                width={210}
                height={210}
                alt="vector images"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-start gap-6 md:gap-8 w-full mt-10 md:mt-16 relative ">
            {data.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
                className={`${item.zindex} w-full md:w-1/3 h-auto bg-[#ffffff] rounded-[30px] cursor-pointer md:rounded-[50px] p-8 md:p-10 hover:bg-[#eeeeee]`}
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
            <Image
              src={"/icons/Vector.svg"}
              width={200}
              height={200}
              alt="vector decore image "
              className="absolute left-78 bottom-28 w-auto h-auto"
            />
            <Image
              src={"/icons/Vector.svg"}
              width={100}
              height={100}
              alt="vector decore image "
              className="absolute right-92 bottom-38 z-11 rotate-45 w-auto h-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
}
