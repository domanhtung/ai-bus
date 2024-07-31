import Image from "next/image";
import { ButtonDefault, ButtonSecondary } from "../components/custom/button";

const Banner = () => {
  return (
    <section className="max-w-[1512px] mx-auto px-5 lg:px-8 py-12 lg:py-24">
      <div className="flex gap-2 items-center text-[12px] xl:text-[14px] font-medium uppercase">
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
      {/* <div data-aos="fade-right">
        <h1 className="pt-3 xl:pt-6 text-[7vw] leading-[7vw] lg:text-[70px] lg:leading-[70px] xl:text-[96px] xl:leading-[96px] font-extrabold text-white opacity-[0.86] hover:scale-105 duration-200">
          THE HIGH-TECH BUS
        </h1>
        <h2 className="flex lg:gap-5 items-center pt-3 xl:pt-5 text-[7vw] leading-[7vw] lg:text-[70px] lg:leading-[70px] xl:text-[96px] xl:leading-[96px] font-extrabold text-white opacity-[0.86] hover:scale-105 duration-200">
          <Image
            src={"/images/arrow-right.svg"}
            className="w-[7vw] h-[7vw] lg:w-[96px] lg:h-[96px]"

            width={96}
            height={96}
            priority
            alt="arrow"
          />
          MODERN ENTERPRISE.
        </h2>
      </div> */}
      <div data-aos="fade-right">
        <h1 className="pt-6 text-[0.8vw] font-extrabold text-white opacity-[0.86] hover:scale-105 duration-200">
          THE HIGH-TECH BUS
        </h1>
        <h2 className="flex gap-5 items-center pt-5 text-[0.8vw] font-extrabold text-white opacity-[0.86] hover:scale-105 duration-200">
          <Image
            src={"/images/arrow-right.svg"}
            className="w-[0.8vw] h-[0.8vw]"
            width={96}
            height={96}
            priority
            alt="arrow"
          />
          MODERN ENTERPRISE.
        </h2>
      </div>
      <div className="grid xl:grid-cols-2 gap-5 lg:gap-0 pt-5 lg:pt-12 xl:pt-24">
        <div data-aos="fade-right" className="pr-5">
          <p className="lg:text-[24px] xl:text-[30px] font-semibold opacity-[0.48]">
            Your Trusted Partner in Innovation with AI, Blockchain & Fintech
            Experts.
          </p>
          <div className="flex gap-4 pt-6">
            <ButtonSecondary title="Read more" />
            <ButtonDefault title="Scroll to explore" />
          </div>
        </div>
        <Image
          src={"/images/home/hero_image.png"}
          className="w-full h-auto border border-white border-opacity-10 rounded-xl overflow-hidden"
          width={720}
          height={560}
          priority
          alt="banner hero"
        />
      </div>
    </section>
  );
};

export default Banner;
