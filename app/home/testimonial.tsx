"use client";
import Image from "next/image";
import { ButtonDefault } from "../components/custom/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import { testimonialList } from "../constants/home";

const Testimonial = () => {
  return (
    <div className="overflow-hidden">
      <div className="max-w-[1512px] mx-auto px-0 lg:px-8 py-8 lg:py-24">
        <div className="lg:flex gap-6">
          <div className="relative flex flex-col lg:w-[400px] lg:min-w-[400px] xl:w-[588px] xl:min-w-[588px] h-auto lg:h-[440px] px-4 lg:px-0 z-10">
            <div className="flex-1">
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
                  WHAT MY CLIENTS SAID
                </span>
              </div>
              <h3 className="pt-3 xl:pt-6 text-[30px] lg:text-[44px] xl:text-[60px] font-bold leading-[34px] lg:leading-[60px] xl:leading-[72px] opacity-[0.86] hover:scale-105 duration-200">
                50+ satisfied clients worldwide
              </h3>
            </div>
            <div className="lg:flex gap-4 pt-4 lg:pt-0 justify-end">
              <ButtonDefault
                icon="fa fa-angle-left"
                className="swiper-button swiper-button-prev testimonial-button-prev w-[48px] h-[48px] text-[20px] leading-[20px]"
              />
              <ButtonDefault
                icon="fa fa-angle-right"
                className="swiper-button ml-4 lg:ml-0 swiper-button-prev testimonial-button-next w-[48px] h-[48px] text-[20px] leading-[20px]"
              />
            </div>
          </div>
          <div className="relative mt-6 lg:mt-0">
            <div className="lg:absolute testimonial-swip lg:top-0 lg:left-0">
              <Swiper
                slidesPerView={"auto"}
                loop
                navigation={{
                  nextEl: ".testimonial-button-next",
                  prevEl: ".testimonial-button-prev",
                }}
                speed={600}
                modules={[Navigation, EffectCoverflow]}
              >
                {testimonialList?.map((content, index) => {
                  return (
                    <SwiperSlide
                      key={index}
                      className="w-[352px] max-w-[352px] lg:w-[400px] lg:max-w-[400px] xl:w-[589px] xl:max-w-[589px] !h-[400px] lg:!h-[440px]"
                    >
                      <div className="card-testimonial w-[320px] flex flex-col lg:w-full h-full p-4 border border-white border-opacity-10 rounded-xl bg-background duration-700">
                        <div className="flex-1">
                          <Image
                            src={content?.avatar}
                            className="avatar-active w-[80px] h-[80px] lg:w-[124px] lg:h-[124px]"
                            width={124}
                            height={124}
                            priority
                            alt="avatar"
                          />
                          <Image
                            src={content?.avatarInactive}
                            className="avatar-inactive w-[80px] h-[80px] lg:w-[124px] lg:h-[124px]"
                            width={124}
                            height={124}
                            priority
                            alt="avatar"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-white opacity-[0.48] duration-500">
                            {content?.name}
                          </p>
                          <div className="line h-[1px] my-4 bg-white bg-opacity-[0.16] duration-500" />
                          <p className="text-white opacity-[0.86] duration-500">
                            {content?.des}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
