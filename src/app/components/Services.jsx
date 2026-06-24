import Image from "next/image";
import { motion } from "framer-motion";
export default function Services({
  stepNumber,
  heading,
  paragraphs,
  highlight,
  btnText,
  imageSrc,
  btnBlur,
  reverse = false,
  active = false,
}) {
  const slideInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = {
    duration: 0.6,
    ease: "easeOut",
    delay: 0.1,
  };
  return (
    <>
      <section className="w-full mb-5 md:mb-0  lg:h-auto bg-[#FAF9F6]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={slideInUp}
          transition={transition}
          className={`w-[90%] max-w-7xl flex flex-col md:pb-37.5 xl:w-[95%]  mx-auto  ${
            reverse
              ? "md:flex-col lg:flex-row-reverse"
              : "md:flex-col lg:flex-row"
          } justify-between items-start  gap-10 md:gap-14  px-4 md:px-0`}
        >
          <div className="relative w-full md:w-175 aspect-175/145 ">
            <Image
              src={imageSrc}
              fill
              alt="dummy image"
              className="object-contain"
            />
          </div>
          <div className="hidden md:hidden w-15 xl:block h-101.5   gap-1   mx-auto">
            {" "}
            <p
              className={`w-15 h-15 ${active ? "bg-black" : "bg-[#909090]"} rounded-[30px] text-center text-[30px] font-bold text-white flex justify-center items-center`}
            >
              {stepNumber}
            </p>
            <div
              className={`w-1 h-84.5 ${active ? "bg-black" : "bg-[#909090]"} mx-auto`}
            ></div>
          </div>
          <div className="w-full md:w-175 h-auto md:ms-2 ">
            <span className="flex justify-center items-center uppercase w-fit h-7 bg-[#D9D9EF99] rounded-[100px]  p-5 text-[14px] md:text-[16px] font-normal">
              {btnBlur}
            </span>
            <h1 className="font-bold text-[22px] sm:text-[25px] md:text-[28px] leading-[100%] py-5 ">
              {heading}
            </h1>
            <p className="font-medium text-[14px]  pb-5 whitespace-pre-line">
              {paragraphs}
            </p>
            <p className=" w-full md:w-115.5 h-auto md:h-16 bg-[#D9D9EF] rounded-[10px] font-medium text-[1rem] py-2.5 px-5 mb-15">
              {highlight}
            </p>
            <button className="w-full md:w-91 h-11 rounded-[100px] capitalize bg-[#328476] py-2.5 px-5 font-medium text-[14px] text-white flex justify-around cursor-pointer items-center hover:bg-[#046b5a]">
              {btnText}{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
