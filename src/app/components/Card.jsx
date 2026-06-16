import Image from "next/image";
import React from "react";

export default function Card({
  brRadius,
    title,
  description,
  cardWidth,
  cardHeight,
  imgBoxWidth,
  imgBoxHeight,
 margin,
}) {
  return (
    <>
      <div
        className="border border-[#4B4763] rounded-xs p-2.5"
        style={{ width: cardWidth, height: cardHeight ,borderRadius: brRadius }}
      >
        <h1 className="font-bold text-[30px] capitilize leading-[100%] text-[#fafafa]">
          {title}
        </h1>
        <p className="font-normal text-[14px] text-[#fafafa] pt-3 pb-8">{description}</p>
        <div
          className="p-2.5 flex justify-center items-center bg-[#545454] ms-auto me-auto"
          style={{ width: imgBoxWidth, height: imgBoxHeight , marginTop:margin}}
        >
          {" "}
          <Image src={"/images/Vector.png"} width={70} height={70} />
        </div>
      </div>
    </>
  );
}
