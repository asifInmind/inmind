import React from "react";


export default function Services({
  stepNumber,
  eyebrow,
  heading,
  paragraphs = [],
  highlight,
  ctaLabel,
  ctaHref = "#",
  imageSrc,
  imageAlt = "",
  reverse = false,
}) {
  return (
    <section className="w-full bg-[#FAF9F6] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <div
          className={`flex flex-col items-center gap-10 lg:gap-16 ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          {/* Content side */}
          <div className="w-full lg:w-1/2">
            {eyebrow && (
              <span className="inline-block rounded-full bg-[#EFEDE7] px-4 py-1.5 text-xs sm:text-sm font-medium text-[#3D3D3A]">
                {eyebrow}
              </span>
            )}

            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-[2rem] font-bold leading-snug text-[#1F1F1D]">
              {heading}
            </h2>

            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="mt-4 text-sm sm:text-base leading-relaxed text-[#6B6B66]"
              >
                {p}
              </p>
            ))}

            {highlight && (
              <div className="mt-6 rounded-xl bg-[#EFEDE7] px-5 py-4 text-sm sm:text-base font-medium text-[#2A2A28]">
                {highlight}
              </div>
            )}

            {ctaLabel && (
              <a
                href={ctaHref}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0F6E5E] px-6 py-3 text-sm sm:text-base font-medium text-white transition-colors duration-200 hover:bg-[#0C5A4D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F6E5E] focus-visible:ring-offset-2"
              >
                {ctaLabel}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            )}
          </div>

          {/* Image side */}
          <div className="relative w-full lg:w-1/2 flex items-center justify-center">
            {/* step number badge */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:-translate-x-[calc(100%+24px)] flex flex-col items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8A8A85] text-base font-semibold text-white">
                {stepNumber}
              </span>
              <span className="hidden lg:block h-24 w-px bg-[#D8D6CF]" aria-hidden="true" />
            </div>

            <div className="aspect-square w-full max-w-md overflow-hidden rounded-3xl bg-[#9A9A95] sm:max-w-sm lg:max-w-md">
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-white/70">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-1/3 w-1/3"
                    aria-hidden="true"
                  >
                    <circle cx="8" cy="9" r="2" />
                    <path d="M21 15l-5-5L5 21h16l-2-3z" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}