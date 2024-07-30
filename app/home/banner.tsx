import Image from "next/image";
import { ButtonDefault, ButtonSecondary } from "../components/custom/button";

const Banner = () => {
  return (
    <section className="max-w-[1512px] mx-auto px-8 py-24">
      <div className="flex gap-2 items-center text-[14px] font-medium uppercase">
        <Image
          src={"/images/arrow-right-up.svg"}
          width={20}
          height={20}
          priority
          alt="arrow"
        />
        <span className="text-white opacity-[0.48]">
          research and development center
        </span>
      </div>
      <div data-aos="fade-right">
        <h1 className="pt-6 text-[96px] leading-[96px] font-extrabold text-white opacity-[0.86] hover:scale-105 duration-200">
          THE HIGH-TECH BUS
        </h1>
        <h2 className="flex gap-5 items-center pt-5 text-[96px] leading-[96px] font-extrabold text-white opacity-[0.86] hover:scale-105 duration-200">
          <Image
            src={"/images/arrow-right.svg"}
            width={96}
            height={96}
            priority
            alt="arrow"
          />
          MODERN ENTERPRISE.
        </h2>
      </div>
      <div className="grid grid-cols-2 pt-24">
        <div data-aos="fade-right" className="pr-5">
          <p className="text-[30px] font-semibold opacity-[0.48]">
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
