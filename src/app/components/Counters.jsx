export default function Counters() {
  return (
    <>
      <section className="flex justify-center items-center">
        <div className="w-90 h-50 py-4 px-8 flex justify-center items-start bg-[#161326] flex-col border border-r-[#4B4763]">
          <h1 className=" leading-[100%] text-[#328476] font-bold text-[50px]">3.2M+</h1>
          <p className="text-[#ffffff] font-normal text-[18px] leading-[100%] mt-3">Orders managed on platform</p>
        </div>
        <div className="w-90 h-50 py-4 px-8 flex justify-center items-start bg-[#161326] flex-col  border border-r-[#4B4763]">
          <h1 className="leading-[100%] text-[#328476] font-bold text-[50px]">40%</h1>{" "}
          <p className="text-[#ffffff] font-normal text-[18px] leading-[100%] mt-3">Average reduction in return rate </p>
        </div>
        <div className="w-90 h-50 py-4 px-8 flex justify-center items-start bg-[#161326] flex-col  border border-r-[#4B4763]">
          <h1 className="leading-[100%] text-[#328476] font-bold text-[50px]">5→1</h1>{" "}
          <p className="text-[#ffffff] font-normal text-[18px] leading-[100%] mt-3">Courier portals replaced </p>
        </div>
        <div className="w-90 h-50 py-4 px-8 flex justify-center items-start bg-[#161326] flex-col ">
          <h1 className="leading-[100%] text-[#328476] font-bold text-[50px]">Rs 3.2 M</h1>{" "}
          <p className="text-[#ffffff] font-normal text-[18px] leading-[100%] mt-3">Recovered in courier receivables</p>
        </div>
      </section>
    </>
  );
}
