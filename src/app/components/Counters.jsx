"use client";
import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  formatter = (val) => val,
}) {
  const nodeRef = useRef(null);
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) =>
    formatter(Math.floor(latest)),
  );

  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, to, duration]);

  return <motion.span ref={nodeRef}>{rounded}</motion.span>;
}

export default function Counters() {
  return (
    <>
      <section className="flex flex-row flex-wrap md:justify-center md:items-center lg:w-5xl xl:w-337.75 ms-auto me-auto">
        <div className="w-1/2 md:w-1/4 lg:w-1/4 box-border h-auto md:h-50 py-6 md:py-4 px-8 flex justify-center items-start bg-[#161326] flex-col border-b md:border-b-0 md:border-r border-[#4B4763]">
          <h1 className=" leading-[100%] text-[#328476] font-bold text-[30px] md:text-[33px]  lg:text-[40px]">
            <AnimatedCounter
              from={0}
              to={32}
              formatter={(val) => `${(val / 10).toFixed(1)}M+`}
            />
          </h1>
          <p className="text-[#ffffff] font-normal text-[16px] md:text-[18px]   lg:text-[12px] leading-[100%] mt-3">
            Orders managed on platform
          </p>
        </div>
        <div className="w-1/2 md:w-1/4 lg:w-1/4 box-border h-auto md:h-50 py-6 md:py-4 px-8 flex justify-center items-start bg-[#161326] flex-col border-b md:border-b-0 md:border-r border-[#4B4763]">
          <h1 className="leading-[100%] text-[#328476] font-bold text-[30px] md:text-[33px] lg:text-[40px]">
            <AnimatedCounter from={0} to={40} formatter={(val) => `${val}%`} />
          </h1>{" "}
          <p className="text-[#ffffff] font-normal text-[16px] md:text-[18px] lg:text-[12px] leading-[100%] mt-3">
            Average reduction in return rate{" "}
          </p>
        </div>
        <div className="w-1/2 md:w-1/4 lg:w-1/4 box-border h-auto md:h-50 py-6 md:py-4 px-8 flex justify-center items-start bg-[#161326] flex-col border-b md:border-b-0 md:border-r border-[#4B4763]">
          <h1 className="leading-[100%] text-[#328476] font-bold text-[30px] md:text-[33px] lg:text-[40px]">
            <AnimatedCounter from={1} to={5} />
            →1
          </h1>{" "}
          <p className="text-[#ffffff] font-normal text-[16px] md:text-[18px] lg:text-[12px] leading-[100%] mt-3">
            Courier portals replaced{" "}
          </p>
        </div>
        <div className="w-1/2 md:w-1/4 lg:w-1/4  h-auto md:h-50 py-6 md:py-4 px-8 flex justify-center items-start bg-[#161326] flex-col ">
          <h1 className="leading-[100%] text-[#328476] font-bold text-[30px] md:text-[33px] lg:text-[40px]">
            <AnimatedCounter
              from={0}
              to={32}
              formatter={(val) => `Rs ${(val / 10).toFixed(1)} M`}
            />
          </h1>{" "}
          <p className="text-[#ffffff] font-normal text-[16px] md:text-[18px] lg:text-[12px] leading-[100%] mt-3">
            Recovered in courier receivables
          </p>
        </div>
      </section>
    </>
  );
}
