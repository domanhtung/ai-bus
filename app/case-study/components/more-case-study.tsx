"use client";
import DeliverExcellenceComponent from "@/app/components/global/deliver-excellence";
import { caseStudy } from "@/app/constants/home";
import Image from "next/image";

const MoreCaseStudy = () => {
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
        <span className="text-white opacity-[0.48]">WE Deliver Excellence</span>
      </div>
      <h3 className="pt-6 text-[30px] lg:text-[48px] leading-[46px] lg:leading-[56px] font-bold opacity-[0.86] hover:scale-105 duration-200">
        More case studies
      </h3>
      <div className="w-full">
        <DeliverExcellenceComponent deliverValue={caseStudy} />
      </div>
    </section>
  );
};

export default MoreCaseStudy;
