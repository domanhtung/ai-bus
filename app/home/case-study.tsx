import Image from "next/image";

const CaseStudy = () => {
  return (
    <div className="max-w-[1512px] mx-auto px-8 py-24">
      <div className="flex gap-2 items-center text-[14px] font-medium uppercase">
        <Image
          src={"/images/arrow-right-up.svg"}
          width={20}
          height={20}
          priority
          alt="arrow"
        />
        <span className="text-white opacity-[0.48]">WE Deliver Excellence</span>
      </div>
      <h3 className="pt-6 text-[72px] font-bold leading-[96px] opacity-[0.86]">
        Solutions To Common AI Problems
      </h3>
    </div>
  );
};

export default CaseStudy;
