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
          className={`w-310 h-122 flex justify-between items-center gap-14  ms-auto me-auto mb-20 `}
          style={{
            flexDirection: reverse ? "row-reverse" : "row",
            alignItems: "center",
          }}
        >
          <div className="w-115 h-122 flex justify-center items-center ">
            {" "}
            <Image
              src={imageSrc}
              width={100}
              height={100}
              alt="dummey image "
              className="w-115.5 h-115.5"
            />
          </div>
          <div className="w-15 h-101.5 flex justify-start gap-1 items-center flex-col ">
            {" "}
            <p className="w-15 h-15 bg-[#909090] rounded-[30px] text-center text-[30px] font-bold text-white flex justify-center items-center">
              {stepNumber}
            </p>
            <div className="w-1 h-84.5 bg-[#909090]"></div>
          </div>
          <div className="w-115 h-122 ">
            <span className="flex justify-center items-center uppercase w-fit h-7 bg-[#D9D9EF99] rounded-[100px]  p-5 text-[16px] font-normal">
              {btnBlur}
            </span>
            <h1 className="font-bold text-[28px] leading-[100%] py-5 ">
              {heading}
            </h1>
            <p className="font-medium text-[14px]  pb-5 ">{paragraphs}</p>
            <p className=" w-115.5 h-16 bg-[#D9D9EF] rounded-[10px] font-medium text-[1rem] py-2.5 px-5 mb-15">
              {highlight}
            </p>
            <button className="w-91 h-11 rounded-[100px] capitalize bg-[#328476] py-2.5 px-5 font-medium text-[14px] text-white">
              {btnText}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
