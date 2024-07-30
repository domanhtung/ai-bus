"use client";
import Image from "next/image";
import { caseStudy } from "../constants/home";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

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
      <h3 className="pt-6 text-[72px] font-bold leading-[96px] opacity-[0.86] hover:scale-105 duration-200">
        Solutions To Common AI Problems
      </h3>
      <div className="grid grid-cols-2 gap-6 pt-[72px]">
        <div className="relative w-full h-[560px] group bg-white border border-white border-opacity-10 bg-opacity-[0.04] rounded-xl overflow-hidden">
          <Image
            src={caseStudy?.mainContent?.thumb}
            className="w-full h-full object-cover"
            width={712}
            height={560}
            priority
            alt="main thumb"
          />
          <Image
            src={"/images/arrow-pri-right-up.svg"}
            className="absolute top-4 right-4 grayscale group-hover:grayscale-0"
            width={56}
            height={56}
            priority
            alt="arrow"
          />
          <div className="absolute w-full bottom-0 left-0 p-4">
            <p className="text-[12px] font-medium text-white opacity-[0.48]">
              {caseStudy?.mainContent?.subTitle}
            </p>
            <p className="pt-4 text-[30px] font-semibold text-white opacity-[0.86]">
              {caseStudy?.mainContent?.title}
            </p>
          </div>
        </div>
        <div>
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            speed={1500}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[EffectFade, Autoplay]}
          >
            {caseStudy?.subContent?.map((subContent, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="grid gap-6">
                    <div className="relative w-full h-[268px] group bg-background border border-white border-opacity-10 rounded-xl overflow-hidden">
                      <Image
                        src={caseStudy?.mainContent?.thumb}
                        className="w-full h-full object-cover"
                        width={712}
                        height={560}
                        priority
                        alt="main thumb"
                      />
                      <Image
                        src={"/images/arrow-pri-right-up.svg"}
                        className="absolute top-4 right-4 grayscale group-hover:grayscale-0"
                        width={56}
                        height={56}
                        priority
                        alt="arrow"
                      />
                      <div className="absolute w-full bottom-0 left-0 p-4">
                        <p className="text-[12px] font-medium text-white opacity-[0.48]">
                          {subContent?.firstContent?.subTitle}
                        </p>
                        <p className="pt-4 text-[30px] font-semibold text-white opacity-[0.86]">
                          {subContent?.firstContent?.title}
                        </p>
                      </div>
                    </div>
                    <div className="relative w-full h-[268px] group bg-background border border-white border-opacity-10 rounded-xl overflow-hidden">
                      <Image
                        src={caseStudy?.mainContent?.thumb}
                        className="w-full h-full object-cover"
                        width={712}
                        height={560}
                        priority
                        alt="main thumb"
                      />
                      <Image
                        src={"/images/arrow-pri-right-up.svg"}
                        className="absolute top-4 right-4 grayscale group-hover:grayscale-0"
                        width={56}
                        height={56}
                        priority
                        alt="arrow"
                      />
                      <div className="absolute w-full bottom-0 left-0 p-4">
                        <p className="text-[12px] font-medium text-white opacity-[0.48]">
                          {subContent?.secondContent?.subTitle}
                        </p>
                        <p className="pt-4 text-[30px] font-semibold text-white opacity-[0.86]">
                          {subContent?.secondContent?.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
