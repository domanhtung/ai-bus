"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

interface Props {
  deliverValue: any;
}

const DeliverExcellenceComponent = ({ deliverValue }: Props) => {
  return (
    <div className="lg:grid lg:grid-cols-2 gap-6 pt-10 xl:pt-[72px]">
      <div className="relative w-full h-[350px] lg:h-[500px] xl:h-[560px] group bg-white border border-white border-opacity-10 bg-opacity-[0.04] rounded-xl overflow-hidden">
        <Image
          src={deliverValue?.mainContent?.thumb}
          className="w-full h-full object-cover"
          width={712}
          height={560}
          priority
          alt="main thumb"
        />
        <Image
          src={"/images/arrow-pri-right-up.svg"}
          className="absolute top-4 right-4 w-[46px] h-[46px] xl:w-[56px] xl:h-[56px] grayscale group-hover:grayscale-0"
          width={56}
          height={56}
          priority
          alt="arrow"
        />
        <div className="absolute w-full bottom-0 left-0 p-4">
          <p className="text-[12px] font-medium text-white opacity-[0.48]">
            {deliverValue?.mainContent?.subTitle}
          </p>
          <p className="xl:pt-4 text-[20px] lg:text-[24px] xl:text-[30px] font-semibold text-white opacity-[0.86]">
            {deliverValue?.mainContent?.title}
          </p>
        </div>
      </div>
      <div className="w-full">
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
          {deliverValue?.subContent?.map((subContent: any, index: number) => {
            return (
              <SwiperSlide key={index}>
                <div className="grid gap-3 lg:gap-6">
                  <div className="relative w-full h-[238px] xl:h-[268px] mt-3 lg:mt-0 group bg-background border border-white border-opacity-10 rounded-xl overflow-hidden">
                    <Image
                      src={deliverValue?.mainContent?.thumb}
                      className="w-full h-full object-cover"
                      width={712}
                      height={560}
                      priority
                      alt="main thumb"
                    />
                    <Image
                      src={"/images/arrow-pri-right-up.svg"}
                      className="absolute top-4 right-4 w-[46px] h-[46px] xl:w-[56px] xl:h-[56px] grayscale group-hover:grayscale-0"
                      width={56}
                      height={56}
                      priority
                      alt="arrow"
                    />
                    <div className="absolute w-full bottom-0 left-0 p-4">
                      <p className="text-[12px] font-medium text-white opacity-[0.48]">
                        {subContent?.firstContent?.subTitle}
                      </p>
                      <p className="xl:pt-4 text-[20px] lg:text-[24px] xl:text-[30px] font-semibold text-white opacity-[0.86]">
                        {subContent?.firstContent?.title}
                      </p>
                    </div>
                  </div>
                  <div className="relative w-full h-[238px] xl:h-[268px] group bg-background border border-white border-opacity-10 rounded-xl overflow-hidden">
                    <Image
                      src={deliverValue?.mainContent?.thumb}
                      className="w-full h-full object-cover"
                      width={712}
                      height={560}
                      priority
                      alt="main thumb"
                    />
                    <Image
                      src={"/images/arrow-pri-right-up.svg"}
                      className="absolute top-4 right-4 w-[46px] h-[46px] xl:w-[56px] xl:h-[56px] grayscale group-hover:grayscale-0"
                      width={56}
                      height={56}
                      priority
                      alt="arrow"
                    />
                    <div className="absolute w-full bottom-0 left-0 p-4">
                      <p className="text-[12px] font-medium text-white opacity-[0.48]">
                        {subContent?.secondContent?.subTitle}
                      </p>
                      <p className="xl:pt-4 text-[20px] lg:text-[24px] xl:text-[30px] font-semibold text-white opacity-[0.86]">
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
  );
};

export default DeliverExcellenceComponent;
