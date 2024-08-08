import Image from "next/image";

interface Props {
  title: string;
  subTitle: string;
}

const HeroBanner = ({ title, subTitle }: Props) => {
  return (
    <section className="max-w-[1512px] mx-auto px-4 lg:px-8 py-8 lg:py-24">
      <div className="solution-img">
        <div className="flex gap-2 items-center lg:justify-center text-[14px] font-medium uppercase">
          <Image
            src={"/images/arrow-right-up.svg"}
            className="w-[20px] h-[20px]"
            width={20}
            height={20}
            priority
            alt="arrow"
          />
          <span className="text-white opacity-[0.48]">{subTitle}</span>
        </div>
        <h1 className="pt-6 text-[40px] leading-[48px] lg:text-[96px] lg:leading-[96px] font-[800] lg:text-center text-white opacity-[0.86px] hover:scale-105 duration-200">
          {title}
        </h1>
      </div>
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
