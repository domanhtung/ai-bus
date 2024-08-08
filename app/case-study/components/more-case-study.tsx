"use client";
import DeliverExcellenceComponent from "@/app/components/global/deliver-excellence";
import { caseStudy } from "@/app/constants/home";
import Image from "next/image";

const MoreCaseStudy = () => {
  return (
    <section className="max-w-[1512px] mx-auto lg:px-8 py-12 lg:py-24">
      <div className="px-4 lg:px-0">
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
            WE Deliver Excellence
          </span>
        </div>
        <h3 className="pt-4 lg:pt-6 text-[28px] lg:text-[48px] leading-[40px] lg:leading-[56px] font-bold opacity-[0.86] hover:scale-105 duration-200">
          More case studies
        </h3>
      </div>
      <div className="w-full">
        <DeliverExcellenceComponent deliverValue={caseStudy} />
      </div>
    </section>
  );
};

export default MoreCaseStudy;
