import Button from "./Button"

export default function Hero() {
  return (
    <>
      <section className="bg-[url('/images/herobg.png')] w-full h-185 bg-center bg-cover bg-no-repeat flex justify-center items-center flex-col">
       <div className="w-216.75 h-94.5 text-center">
         <h1 className="font-bold text-[70px] text-[#ffffff]">One platform to run your entire operation</h1>
        <p className="text-[20px] font-medium text-[#FFFFFF] pt-3">
          Stop juggling courier portals, chasing refunds, and losing revenue to bad returns. inMind gives growing Pakistani brands the control room they never had.
        </p>
        <div className="flex justify-center items-center gap-3.5 mt-12">
           <Button width={'262px'} height={'56px'} bg={'#328476'} color={'white'} content={'Get a Free Demo'}/>
          <Button width={'223px'} height={'56px'} bg={'white'} color={'black'} content={'See How it Works'}/>
                         
        </div>
          <p className="font-medium text-[18px] italic text-[#ffffff] mt-3">Trusted by brands managing 5,000+ orders/day</p>
       </div>
      </section>
    </>
  );
}
