import Card from "./Card";
export default function Platform() {
  return (
    <>
      <main className="bg-[#161326] py-22.25">
        <section className="w-310 h-35 ms-auto me-auto mb-16.5">
          <p className="font-medium text-[18px] leading-[100%] text-[#ffffff]">Platform</p>
          <h1 className="font-bold text-[60px] leading-20 text-[#ffffff]">
            Everything your brand <br />
            needs to scale operations.
          </h1>
        </section>
        {/* first row  */}
        <section className="flex justify-center items-center gap-5 my-5">
          <Card
            title={"Attempt Management"}
            description={
              "Reduce returns before they happen with real-time delivery tracking and auto follow-ups."
            }
            cardWidth="820px"
            cardHeight="489px"
            imgBoxWidth="780px"
            imgBoxHeight="340px"
            brRadius="10px"
            margin="22px"
          />
          <Card
            title={"Attempt Management"}
            description={
              "Reduce returns before they happen with real-time delivery tracking and auto follow-ups."
            }
            cardWidth="400px"
            cardHeight="489px"
            imgBoxWidth="362px"
            imgBoxHeight="340px"
          />
        </section>
        {/* first row  */}
        <section className="flex justify-center items-center gap-5 my-5">
          <Card
            title={"Attempt Management"}
            description={
              "Reduce returns before they happen with real-time delivery tracking and auto follow-ups."
            }
            cardWidth="400px"
            cardHeight="489px"
            imgBoxWidth="362px"
            imgBoxHeight="340px"
          />
          <Card
            title={"Attempt Management"}
            description={
              "Reduce returns before they happen with real-time delivery tracking and auto follow-ups."
            }
            cardWidth="400px"
            cardHeight="489px"
            imgBoxWidth="362px"
            imgBoxHeight="340px"
          />
          <Card
            title={"Attempt Management"}
            description={
              "Reduce returns before they happen with real-time delivery tracking and auto follow-ups."
            }
            cardWidth="400px"
            cardHeight="489px"
            imgBoxWidth="362px"
            imgBoxHeight="340px"
          />
        </section>
        <section className="flex justify-center items-center gap-5 my-5">
          <Card
            title={"Attempt Management"}
            description={
              "Reduce returns before they happen with real-time delivery tracking and auto follow-ups."
            }
            cardWidth="611px"
            cardHeight="489px"
            imgBoxWidth="569px"
            imgBoxHeight="340px"
            brRadius="10px"
          />
          <Card
            title={"Attempt Management"}
            description={
              "Reduce returns before they happen with real-time delivery tracking and auto follow-ups."
            }
            cardWidth="611px"
            cardHeight="489px"
            imgBoxWidth="569px"
            imgBoxHeight="340px"
          />
        </section>
        <section className="flex justify-center items-center gap-5 my-5 ">
          <Card
            title={"Attempt Management"}
            description={
              "Reduce returns before they happen with real-time delivery tracking and auto follow-ups."
            }
            cardWidth="1240px"
            cardHeight="489px"
            imgBoxWidth="1193px"
            imgBoxHeight="340px"
          />{" "}
        </section>{" "}
      </main>
    </>
  );
}
