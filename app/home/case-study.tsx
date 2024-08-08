"use client";
import Image from "next/image";
import { caseStudy } from "../constants/home";
import DeliverExcellenceComponent from "../components/global/deliver-excellence";

const CaseStudy = () => {
  return (
    <div className="max-w-[1512px] mx-auto px-0 lg:px-8 py-8 lg:py-24">
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
        <h3 className="pt-4 xl:pt-6 text-[28px] lg:text-[50px] xl:text-[72px] font-bold leading-[40px] lg:leading-[62px] xl:leading-[96px] opacity-[0.86] hover:scale-105 duration-200">
          Solutions To Common AI Problems
        </h3>
      </div>
      <DeliverExcellenceComponent deliverValue={caseStudy} />
    </div>
  );
};

export default CaseStudy;
