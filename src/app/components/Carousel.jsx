import React from "react";
import EmblaCarousel from "./EmblaCarousel";

export default function Carousel() {
  const OPTIONS = { slidesToScroll: "auto" };
  const SLIDES = [];
  return (
    <>
      <section className="bg-[#FAF9F6] py-16 px-6 sm:px-12 md:px-24 w-full">
        <div className="max-w-7xl mx-auto w-full flex flex-col justify-between">
          <div className="max-w-4xl mb-12">
            <p className="font-medium text-lg text-gray-600 tracking-wide uppercase mb-2">
              Case Studies
            </p>
            <h1 className="font-bold text-4xl sm:text-5xl md:text-[60px] text-gray-900 leading-tight">
              Brands that stopped firefighting and started scaling.
            </h1>
          </div>

          <div className="w-full">
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </div>
        </div>
      </section>
    </>
  );
}
