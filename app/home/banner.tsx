import Image from "next/image";
import { ButtonDefault, ButtonSecondary } from "../components/custom/button";
import Link from "next/link";
import { navbarUrl } from "../constants/home";

const Banner = () => {
  return (
    <section className="max-w-[1512px] mx-auto px-4 lg:px-8 py-6 lg:py-24">
      <div className="flex gap-2 items-center text-[14px] font-medium uppercase">
        <Image
          src={"/images/arrow-right-up.svg"}
          className="w-[20px] h-[20px]"
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
      </div>
      <div className="lg:flex gap-5 lg:gap-0 pt-5 lg:pt-12 xl:pt-24">
        <div
          data-aos="fade-right"
          className="hidden lg:block lg:w-[59.3%] pr-14"
        >
          <p className="lg:text-[24px] xl:text-[30px] font-semibold opacity-[0.48]">
            Your Trusted Partner in Innovation with AI, Blockchain & Fintech
            Experts.
          </p>
          <div className="flex gap-4 pt-6">
            <Link href={navbarUrl.about}>
              <ButtonSecondary title="About Us" />
            </Link>
          </div>
        </div>
        <Image
          src={"/images/home/hero_image.png"}
          className="w-full max-w-[265px] max-h-[265px] lg:max-w-full lg:max-h-full lg:w-[40.7%] h-auto mt-5 lg:mt-0 overflow-hidden"
          width={720}
          height={560}
          // priority
          alt="banner hero"
        />
        <div data-aos="fade-right" className="block lg:hidden mt-8">
          <p className="text-[16px] font-semibold opacity-[0.48]">
            Your Trusted Partner in Innovation with AI, Blockchain & Fintech
            Experts.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <Link href={navbarUrl.about}>
              <ButtonSecondary title="About Us" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
