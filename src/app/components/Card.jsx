import Image from "next/image";
import React from "react";

export default function Card({ title, description, imageSrc, brRadius }) {
  return (
    <div
      className="border border-[#4B4763] rounded-sm p-4 w-full flex flex-col h-auto bg-[#424242] sm:h-95 md:h-105 lg:h-122.25"
      style={{ borderRadius: brRadius }}
    >
      <div>
        <h1 className="font-bold text-[18px] lg:text-[20px] capitalize leading-tight text-[#fafafa]">
          {title}
        </h1>
        <p className="font-normal text-[13px] text-[#fafafa] pt-2 pb-4 opacity-80">
          {description}
        </p>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <div
          className="relative bg-[#545454] rounded-sm h-50 sm:h-60 md:h-70 lg:h-85"
          style={{ width: "calc(100% - 10px)" }}
        >
          <Image
            src={imageSrc || "/images/Vector.png"}
            fill
            //  sizes="300px"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            // width={200}
            // height={100}
            alt={title}
            className="object-contain p-20"
          />
        </div>
      </div>
    </div>
  );
}
