import Image from "next/image";

export default function SetupProcedure() {
  const data = [
    {
      id: 1,
      title: "connect",
      description:
        "Link your courier accounts, sales channels (Shopify, WooCommerce, manual), and WhatsApp number.",
      image: "",
    },
    {
      id: 2,
      title: "centralize",
      description:
        "All your orders, shipments, courier balances, and automation flows live in one dashboard. Your team works from one screen.",
      image: "",
    },
    {
      id: 3,
      title: "optimize",
      description: `Use real data to reduce returns, recover receivables, automate follow-ups, and scale operations — without adding headcount
`,
      image: "",
    },
  ];
  return (
    <>
      <section className="bg-[#FAF9F6] h-195 relative w-full ">
        <div className="w-full">
          <div className="w-257.5 h-47 py-16">
            <div className="ms-25 mt-25 w-257.5 h-47">
              <p className="text-[15px] uppercase">process------</p>
              <h1 className="font-bold text-[60px]">Set up in a day </h1>
              <h1 className="font-bold text-[60px]"> See result in a month</h1>
            </div>
            <div className=" flex justify-around gap-8 w-[82%] ms-auto my-8 me-auto">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="w-95 h-80.5 bg-[#ffffff] rounded-[50px] p-10"
                >
                  <Image
                    src={"/images/Vector.png"}
                    alt="images"
                    width={80}
                    height={80}
                  />
                  <h1 className="font-bold text-[28px] leading-24 capitalize">
                    {item.title}
                  </h1>
                  <p className="font-medium text-[14px] w-74.75 h-14.25">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute right-1">
            <div className=" relative  ">
              <Image
                src="/icons/Ellipse 2357.svg"
                width={30}
                height={30}
                alt="vector images"
                className="absolute left-14 top-[-100]"
              />
              <Image
                src="/icons/Ellipse 2357.svg"
                width={30}
                height={30}
                alt="vector images"
                className="absolute right-3.5 -bottom-1"
              />
              <Image
                src={"/icons/Vector 19.svg"}
                width={200}
                height={200}
                alt="vector images"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
