"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ButtonDefault } from "@/app/components/custom/button";
import { ourProcess } from "@/app/constants/case-study";

const OurProcessCaseStudy = () => {
  return (
    <section className="max-w-[1512px] mx-auto lg:px-8 py-12 lg:py-24 overflow-hidden">
      <div className="flex items-center px-4 lg:px-0 justify-between">
        <h2 className="text-[26px] lg:text-[48px] font-bold leading-[36px] lg:leading-[56px] items-center hover:scale-105 duration-200">
          Our Process
        </h2>
        <div className="lg:flex mt-5 lg:mt-0 gap-4 justify-end">
          <ButtonDefault
            icon="fa fa-angle-left"
            className="swiper-button swiper-button-prev process-button-prev w-[48px] h-[48px] text-[20px] leading-[20px]"
          />
          <ButtonDefault
            icon="fa fa-angle-right"
            className="swiper-button ml-4 lg:ml-0 swiper-button-prev process-button-next w-[48px] h-[48px] text-[20px] leading-[20px]"
          />
        </div>
      </div>
      <div className="mt-8 lg:pt-[72px]">
        <Swiper
          slidesPerView={"auto"}
          loop
          spaceBetween={0}
          navigation={{
            nextEl: ".process-button-next",
            prevEl: ".process-button-prev",
          }}
          breakpoints={{
            1024: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          modules={[Navigation]}
        >
          {ourProcess?.map((value, index) => {
            return (
              <SwiperSlide
                key={index}
                className="max-w-[320px] lg:max-w-full pl-4 pr-2 lg:px-0"
              >
                <div className="h-[400px] lg:h-[440px] flex flex-col w-full p-4 hover:bg-primary duration-500 group border border-white border-opacity-10 rounded-xl bg-background">
                  <div className="flex-1">
                    <Image
                      src={value?.img}
                      className="w-[56px] h-[56px] group-hover:hidden"
                      width={56}
                      height={56}
                      priority
                      alt="avatar"
                    />
                    <Image
                      src={value?.imgHover}
                      className="w-[56px] h-[56px] hidden group-hover:block"
                      width={56}
                      height={56}
                      priority
                      alt="avatar"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-[24px] mb-4 lg:mb-0 lg:text-[36px] group-hover:text-background group-hover:opacity-100 text-white opacity-[0.86] duration-500">
                      {value?.title}
                    </p>
                    <ul className="font-medium opacity-[0.48] text-[18px] lg:text-[16px] leading-[28px] list-disc	pl-5 group-hover:text-background group-hover:opacity-100 duration-500">
                      {value?.content?.map((item, idx) => {
                        return <li key={idx}>{item}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default OurProcessCaseStudy;
