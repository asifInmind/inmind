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

  // This line controls the scroll trigger.
  // It waits until the element is 100px into the viewport before starting.
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
      <section className="flex justify-center items-center">
        <div className="w-90 h-50 py-4 px-8 flex justify-center items-start bg-[#161326] flex-col border border-r-[#4B4763]">
          <h1 className=" leading-[100%] text-[#328476] font-bold text-[50px]">
            <AnimatedCounter
              from={0}
              to={32}
              formatter={(val) => `${(val / 10).toFixed(1)}M+`}
            />
          </h1>
          <p className="text-[#ffffff] font-normal text-[18px] leading-[100%] mt-3">
            Orders managed on platform
          </p>
        </div>
        <div className="w-90 h-50 py-4 px-8 flex justify-center items-start bg-[#161326] flex-col  border border-r-[#4B4763]">
          <h1 className="leading-[100%] text-[#328476] font-bold text-[50px]">
            <AnimatedCounter from={0} to={40} formatter={(val) => `${val}%`} />
          </h1>{" "}
          <p className="text-[#ffffff] font-normal text-[18px] leading-[100%] mt-3">
            Average reduction in return rate{" "}
          </p>
        </div>
        <div className="w-90 h-50 py-4 px-8 flex justify-center items-start bg-[#161326] flex-col  border border-r-[#4B4763]">
          <h1 className="leading-[100%] text-[#328476] font-bold text-[50px]">
            <AnimatedCounter from={1} to={5} />
            →1
          </h1>{" "}
          <p className="text-[#ffffff] font-normal text-[18px] leading-[100%] mt-3">
            Courier portals replaced{" "}
          </p>
        </div>
        <div className="w-90 h-50 py-4 px-8 flex justify-center items-start bg-[#161326] flex-col ">
          <h1 className="leading-[100%] text-[#328476] font-bold text-[50px]">
            <AnimatedCounter
              from={0}
              to={32}
              formatter={(val) => `Rs ${(val / 10).toFixed(1)} M`}
            />
          </h1>{" "}
          <p className="text-[#ffffff] font-normal text-[18px] leading-[100%] mt-3">
            Recovered in courier receivables
          </p>
        </div>
      </section>
    </>
  );
}
