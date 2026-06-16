import Button from "./Button"
export default function PrimaryBanner() {
  return (
    <>
      <section className="w-[300] h-141 bg-[#161326]">
        <div className="w-[85%] ms-auto me-auto h-screen flex justify-between items-center  ">
          <div>
           <Button width={'271px'} height={'50px'} bg={'#328476'} color={'white'} content={'Pakistani-built · PKR pricing'}/>
        
            <h1 className="w-184.5  font-bold text-[60px] mt-3 text-[#ffffff]">
              Built for <span className="text-[#328476]">Pakistani</span>{" "}
              brands. Priced for{" "}
              <span className="text-[#328476]">Pakistani</span> brands.
            </h1>
            <p className="font-medium text-[16px] w-184.5 text-white">
              No dollar-denominated SaaS pricing. No features hidden behind
              expensive tiers. inMind is built for the realities of Pakistani
              ecommerce — COD-heavy, multi-courier, high-volume.
            </p>
          </div>
          <div>
            
          <Button width={'271px'} height={'50px'} bg={'#ffffff'} content={'Talk to Us on WhatsApp'}/>
          </div>
        </div>
      </section>
    </>
  );
}
