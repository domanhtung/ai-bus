import { ButtonSecondary } from "@/app/components/custom/button";
import { serveService } from "@/app/constants/service";
import { ContactContext } from "@/app/context/contact-context";
import Image from "next/image";
import { useContext } from "react";

const ServeService = () => {
  const { showContact } = useContext(ContactContext);

  return (
    <section className="max-w-[1512px] mx-auto lg:px-8 py-8 lg:py-24">
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
          <span className="text-white opacity-[0.48]">Domain we serve</span>
        </div>
        <h2 className="max-w-[1200px] text-[28px] lg:text-[60px] leading-[40px] lg:leading-[72px] font-bold opacity-[0.86] hover:scale-105 duration-200">
          Industries That Our AI Development Services Excel In
        </h2>
        <p className="pt-5 lg:text-[18px] opacity-[0.48]">
          Our AI developers excel at integrating top-tier artificial
          intelligence services into your business operations, processes, and
          growth strategies, across any industry.
        </p>
      </div>
      <div>
        <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 pt-8 lg:pt-[72px] px-4 lg:px-0 flex-nowrap">
          {serveService?.map((value, index) => {
            return (
              <div
                key={index}
                className="h-[171px] lg:h-[368px] lg:p-3 lg:border-b border-white border-opacity-[0.16] border-dashed"
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
                        className="mx-auto group-hover:w-[56px] group-hover:h-[56px] lg:group-hover:w-[124px] lg:group-hover:h-[124px] hidden group-hover:block"
                        width={72}
                        height={72}
                        priority
                        alt="img"
                      />
                      <div className="pt-4 text-[20px] leading-[28px] lg:text-[30px] lg:leading-[44px] font-semibold text-center group-hover:text-background">
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
        <ButtonSecondary
          title="Discuss Your Business Requirements"
          className="w-full lg:w-fit"
          onClick={() => showContact()}
        />
      </div>
    </section>
  );
};

export default ServeService;
