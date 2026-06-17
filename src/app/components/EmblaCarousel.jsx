"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useDotButton, { DotButton } from "./EmblaCarouselDotButton";
import FeedbackCard from "./FeedbackCard";

const EmblaCarousel = (props) => {
  const feedbackMessages = [
    {
      id: 1,
      message:
        "We were losing 28% of orders to returns. After using inMind's attempt management for 6 weeks, we're at 17%. That's real money back in our pocket.",
      clientImage: "/images/clientA.png",
      title: "Operations Manager",
      address: "Fashion Brand · Lahore",
    },
    {
      id: 2,
      message:
        "I didn't realise Leopards owed us PKR 380,000 until we ran the receivables report on day one. inmind paid for itself before we even finished onboarding",
      clientImage: "/images/client.png",
      title: "founder",
      address: "D2C Brand, Karachi",
    },
    {
      id: 3,
      message:
        "I didn't realise Leopards owed us PKR 380,000 until we ran the receivables report on day one. inmind paid for itself before we even finished onboarding",
      clientImage: "/images/client.png",
      title: "founder",
      address: "D2C Brand, Karachi",
    },
    {
      id: 4,
      message:
        "We were losing 28% of orders to returns. After using inMind's attempt management for 6 weeks, we're at 17%. That's real money back in our pocket.",
      clientImage: "/images/clientA.png",
      title: "Operations Manager",
      address: "Fashion Brand · Lahore",
    },
    {
      id: 5,
      message:
        "We were losing 28% of orders to returns. After using inMind's attempt management for 6 weeks, we're at 17%. That's real money back in our pocket.",
      clientImage: "/images/clientA.png",
      title: "Operations Manager",
      address: "Fashion Brand · Lahore",
    },
  ];
  const { options } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    ...options,
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="w-full">
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex backface-hidden touch-pan-y select-none -ml-4">
          {feedbackMessages.map((message) => (
            <div
              className="flex-none w-full md:w-1/2 min-w-0 pl-4"
              key={message.id}
            >
              <FeedbackCard
                message={message.message}
                image={message.clientImage}
                title={message.title}
                address={message.address}
              />
            </div>
          ))}
        </div>
      </div>

      <div className=" relative flex flex-row justify-between items-center w-full mt-5 gap-4">
        {/* <div className="flex items-center gap-2">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div> */}

        <div className="flex absolute left-1/2 -translate-x-1/2 justify-center items-center gap-2 max-w-full">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`w-3 h-3 rounded-full border transition-all duration-300 ${
                index === selectedIndex
                  ? "bg-gray-800 border-gray-800 scale-110 w-6"
                  : "bg-gray-300 border-transparent hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
