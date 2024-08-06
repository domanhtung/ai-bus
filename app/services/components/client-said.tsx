"use client";
import { ButtonDefault } from "@/app/components/custom/button";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { clientSaidService } from "@/app/constants/service";

const ClientSaid = () => {
  return (
    <section className="py-24 max-w-[1512px] px-8 mx-auto">
      <div className="lg:flex gap-3 justify-between">
        <div className="w-full max-w-[1264px]">
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
              WHAT MY CLIENTS SAID
            </span>
          </div>
          <h3 className="pt-3 xl:pt-6 text-[28px] lg:text-[50px] xl:text-[72px] font-bold leading-[30px] lg:leading-[62px] xl:leading-[96px] opacity-[0.86] hover:scale-105 duration-200">
            Our Custom Approach to AI Development Services
          </h3>
          <p className="pt-5 text-[18px] opacity-[0.48]">
            As an artificial intelligence software development company, we offer
            comprehensive services, including data preparation for AI algorithms
            and system rollout for a large number of users. As an illustrious AI
            services company, we follow an agile development approach, capable
            of offering a definitive value to your business.
          </p>
        </div>
        <div className="flex items-end mt-5 lg:mt-0">
          <div className="lg:flex gap-4 justify-end">
            <ButtonDefault
              icon="fa fa-angle-left"
              className="swiper-button swiper-button-prev clien-said-button-prev w-[48px] h-[48px] text-[20px] leading-[20px]"
            />
            <ButtonDefault
              icon="fa fa-angle-right"
              className="swiper-button ml-4 lg:ml-0 swiper-button-prev clien-said-button-next w-[48px] h-[48px] text-[20px] leading-[20px]"
            />
          </div>
        </div>
      </div>
      <div className="pt-[72px]">
        <Swiper
          slidesPerView={1}
          loop
          spaceBetween={24}
          navigation={{
            nextEl: ".clien-said-button-next",
            prevEl: ".clien-said-button-prev",
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation]}
        >
          {clientSaidService?.map((value, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="h-[350px] lg:h-[440px] flex flex-col w-full p-4 hover:bg-primary duration-150 group border border-white border-opacity-10 rounded-xl bg-background">
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
                    <p className="font-medium text-[30px] lg:text-[36px] group-hover:text-background group-hover:opacity-100 text-white opacity-[0.86]">
                      {value?.title}
                    </p>
                    <p className="pt-4 text-white lg:text-[18px] opacity-[0.48] group-hover:text-background group-hover:opacity-100">
                      {value?.content}
                    </p>
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

export default ClientSaid;
