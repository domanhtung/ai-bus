"use client";
import { serveCareers } from "@/app/constants/career";
import { ContactContext } from "@/app/context/contact-context";
import Image from "next/image";
import { useContext } from "react";
import { ButtonSecondary } from "@/app/components/custom/button";
import Link from "next/link";
import { navbarUrl } from "@/app/constants/home";

const ServeCareers = () => {
  const { showContact } = useContext(ContactContext);

  return (
    <section className="max-w-[1512px] mx-auto lg:px-8 py-8 lg:py-24">
      <div className="px-4 lg:px-0">
        <h2 className="max-w-[1200px] text-[28px] lg:text-[60px] leading-[40px] lg:leading-[72px] font-bold opacity-[0.86] hover:scale-105 duration-200">
          Our offer - professional development, personal growth
        </h2>
      </div>
      <div>
        <div className="relative grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-0 pt-8 lg:pt-[72px] px-4 lg:px-0 flex-nowrap">
          {serveCareers?.map((value, index) => {
            return (
              <div
                key={index}
                className="h-[171px] lg:h-[270px] lg:p-3 lg:border-b border-white border-opacity-[0.16] border-dashed"
              >
                <div className="h-full lg:pr-3 lg:border-r border-white border-opacity-[0.16] border-dashed">
                  <div className="flex w-full h-full p-2 lg:p-0 items-center group justify-center cursor-pointer hover:bg-primary duration-500 rounded-xl">
                    <div>
                      <Image
                        src={value?.img}
                        className="mx-auto w-[32px] h-[32px] lg:w-[72px] lg:h-[72px] group-hover:hidden"
                        width={72}
                        height={72}
                        priority
                        alt="img"
                      />
                      <Image
                        src={value?.imgHover}
                        className="mx-auto group-hover:w-[46px] group-hover:h-[46px] lg:group-hover:w-[96px] lg:group-hover:h-[96px] hidden group-hover:block"
                        width={72}
                        height={72}
                        priority
                        alt="img"
                      />
                      <div className="pt-4 text-[14px] leading-[20px] lg:text-[18px] lg:leading-[28px] font-semibold text-center group-hover:text-background">
                        {value?.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="absolute hidden lg:block w-[13px] h-full top-0 right-0 bg-background" />
          <div className="absolute hidden lg:block h-[13px] w-full bottom-0 left-0 bg-background" />
        </div>
      </div>
      <div className="flex justify-end pt-8 lg:pt-0 px-4 lg:px-8">
        <Link href={navbarUrl.careers}>
          <ButtonSecondary title="Show all jobs" className="w-full lg:w-fit" />
        </Link>
      </div>
    </section>
  );
};

export default ServeCareers;
