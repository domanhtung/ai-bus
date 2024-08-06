import Image from "next/image";

const HeroBanner = () => {
  return (
    <section className="max-w-[1512px] mx-auto px-4 lg:px-8 py-12 lg:py-24">
      <div className="flex gap-2 items-center justify-center text-[12px] xl:text-[14px] font-medium uppercase">
        <Image
          src={"/images/arrow-right-up.svg"}
          className="w-[16px] h-[16px] xl:w-[20px] xl:h-[20px]"
          width={20}
          height={20}
          priority
          alt="arrow"
        />
        <span className="text-white opacity-[0.48]">
          research and development center
        </span>
      </div>
      <h1 className="pt-6 text-[16vw] leading-[16vw] lg:text-[96px] lg:leading-[96px] font-[800] text-white opacity-[0.86px] text-center hover:scale-105 duration-200">
        SERVICES
      </h1>
      <Image
        src={"/images/service/hero_img.png"}
        className="w-full lg:h-[560px] mt-12 lg:mt-24"
        width={1448}
        height={560}
        priority
        alt="hero image"
      />
    </section>
  );
};

export default HeroBanner;
