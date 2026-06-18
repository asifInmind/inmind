import Image from "next/image";
export default function Services({
  stepNumber,
  heading,
  paragraphs,
  highlight,
  btnText,
  imageSrc,
  btnBlur,
  reverse = false,
}) {
  return (
    <>
      <section className="w-full">
        <div
          className={`w-full max-w-310 flex flex-col ${
            reverse ? "md:flex-row-reverse" : "md:flex-row"
          } justify-between items-center gap-8 md:gap-14 ms-auto me-auto mb-20 px-4 md:px-0`}
        >
          <div className="w-full md:w-115 h-auto md:h-122 flex justify-center items-center ">
            {" "}
            <Image
              src={imageSrc}
              width={100}
              height={100}
              alt="dummey image "
              className="w-full max-w-115.5 h-auto md:h-115.5"
            />
          </div>
          <div className="hidden md:flex w-15 h-101.5 justify-start gap-1 items-center flex-col ">
            {" "}
            <p className="w-15 h-15 bg-black rounded-[30px] text-center text-[30px] font-bold text-white flex justify-center items-center">
              {stepNumber}
            </p>
            <div className="w-1 h-84.5 bg-black"></div>
          </div>
          <div className="w-full md:w-115 h-auto md:h-122 ">
            <span className="flex justify-center items-center uppercase w-fit h-7 bg-[#D9D9EF99] rounded-[100px]  p-5 text-[16px] font-normal">
              {btnBlur}
            </span>
            <h1 className="font-bold text-[22px] sm:text-[25px] md:text-[28px] leading-[100%] py-5 ">
              {heading}
            </h1>
            <p className="font-medium text-[14px]  pb-5 ">{paragraphs}</p>
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
        </div>
      </section>
    </>
  );
}
