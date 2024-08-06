"use client";
import Image from "next/image";
import { solutions } from "../constants/home";
import { ButtonSecondary } from "../components/custom/button";
import Link from "next/link";
import clsx from "clsx";
import Lottie from "react-lottie";
import loadingJson from "../../public/AIbus-services.json";

const Solution = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingJson,
  };

  return (
    <section className="max-w-[1512px] mx-auto px-5 lg:px-8 py-12 lg:py-24">
      <div className="grid lg:flex gap-5 lg:gap-0 xl:py-24">
        <div className="lg:w-[45%] lg:pr-14">
          <div className="solution-img w-full max-w-[265px] lg:max-w-full h-auto overflow-hidden">
            <Lottie options={defaultOptions} />
          </div>
        </div>
        <div className="grid lg:w-[55%] gap-16 lg:gap-[124px] overflow-hidden">
          {solutions?.map((solution, index) => {
            return (
              <div key={index}>
                <div data-aos="fade-left">
                  <div className="flex gap-2 items-center text-[12px] xl:text-[14px] font-medium text-primary uppercase">
                    <Image
                      src={"/images/arrow-pri-right-up.svg"}
                      className="w-[16px] h-[16px] xl:w-[20px] xl:h-[20px]"
                      width={20}
                      height={20}
                      priority
                      alt="arrow"
                    />
                    {solution?.subHead}
                  </div>
                  <h3 className="pt-3 xl:pt-6 text-[28px] lg:text-[32px] xl:text-[48px] font-bold leading-[40px] xl:leading-[56px] hover:pl-5 hover:scale-105 duration-200">
                    {solution?.title}
                  </h3>
                </div>
                <p
                  data-aos="fade-left"
                  className="pt-3 xl:pt-5 text-white leading-7"
                >
                  <span className="opacity-[0.48]">{solution?.content}</span>
                </p>
                <div className="py-6">
                  {solution?.list?.map((value, index) => {
                    return (
                      <div
                        key={value}
                        data-aos="fade-left"
                        className={clsx(
                          "py-5 font-semibold",
                          index !== solution?.list?.length - 1 &&
                            "border-b border-white border-opacity-[0.16]"
                        )}
                      >
                        {value}
                      </div>
                    );
                  })}
                </div>
                <Link href={solution?.link || ""}>
                  <ButtonSecondary title="Explore Services" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solution;
