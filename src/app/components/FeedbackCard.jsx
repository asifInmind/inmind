import Image from "next/image";

export default function FeedbackCard({ message, image, title, address }) {
  return (
    <section className="shadow bg-[#FFFFFF] p-7.5 w-full h-70.75 flex flex-col justify-between rounded-[14px]">
      <div>
        <Image src="/icons/Group.svg" alt="comma icon" width={50} height={50} />
      </div>
      <div className="my-2">
        <p className="font-medium text-base sm:text-lg text-gray-800 line-clamp-3">
          {message}
        </p>
      </div>
      <div className="flex items-center gap-4 mt-auto">
        <div>
          <Image
            src={image}
            alt="client image"
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold text-black text-1rem ">{title}</h3>
          <p className="text-sm text-black-400 font-normal">{address}</p>
        </div>
      </div>
    </section>
  );
}
