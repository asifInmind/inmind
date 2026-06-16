  import Button from "./Button"
export default function BookingOffer() {
  
  return (
    <>
      <section className="w-full h-181.25 flex justify-center items-center flex-col bg-[#000000]">
        <h1 className="w-310.5 h-60 font-bold text-[70px] text-center leading-20 text-[#ffffff]">
          Your next <span className="text-[#328476]">1,000</span> orders should cost you less than your last 1,000.
        </h1>
        <p className="w-310.5 h-6 text-center text-[#fcfcfc] font-medium text-[18px] leading-[100%] mb-17">
          Less returns. Less manual work. Less money left on the table. That's
          what inMind is built for.
        </p>
        <Button width={'271px'} height={'50px'} bg={'#328476'} color={'white'} content={'Book a Free Demo'}/>
      <div className="w-197.5 h-6.75 flex justify-center items-center gap-8 text-[#fcfcfc] pt-15">
        <p className="font-normal text-[20px] italic">No credit card required</p>
        <p className="font-normal text-[20px] italic">Setup support included</p>
        <p className="font-normal text-[20px] italic">Pakistani team, local support</p>
      </div>
      </section>
    </>
  );
}
