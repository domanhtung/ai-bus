"use client";
import Image from "next/image";
import { caseStudy } from "@/app/constants/home";
import DeliverExcellenceComponent from "@/app/components/global/deliver-excellence";

const DeliverExcellence = () => {
  return (
    <div className="max-w-[1512px] mx-auto px-5 lg:px-8 py-12 lg:py-24">
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
      <h3 className="pt-3 xl:pt-6 text-[28px] lg:text-[50px] xl:text-[72px] font-bold leading-[30px] lg:leading-[62px] xl:leading-[96px] opacity-[0.86] hover:scale-105 duration-200">
        How Our Clients Harness AI to Innovate Rapidly and Thrive Globally
      </h3>
      <p className="pt-5 text-[18px] opacity-[0.48]">
        Our commitment to delivering high-quality work tailored to custom
        requirements has consistently exceeded expectations. Here are a few
        noteworthy projects we&apos;ve undertaken that highlight our
        capabilities and ensure maximum ROI.
      </p>
      <DeliverExcellenceComponent deliverValue={caseStudy} />
    </div>
  );
};

export default DeliverExcellence;
