import { ButtonSecondary } from "@/app/components/custom/button";
import { serveService } from "@/app/constants/service";
import Image from "next/image";

const ServeService = () => {
  return (
    <section className="max-w-[1512px] mx-auto lg:px-8 py-12 lg:py-24">
      <div className="px-4 lg:px-0">
        <div className="flex gap-2 items-center text-[12px] xl:text-[14px] font-medium uppercase">
          <Image
            src={"/images/arrow-right-up.svg"}
            className="w-[16px] h-[16px] xl:w-[20px] xl:h-[20px]"
            width={20}
            height={20}
            priority
            alt="arrow"
          />
          <span className="text-white opacity-[0.48]">Domain we serve</span>
        </div>
        <h2 className="max-w-[1200px] text-[30px] lg:text-[60px] leading-[42px] lg:leading-[72px] font-bold opacity-[0.86] hover:scale-105 duration-200">
          Industries That Our AI Development Services Excel In
        </h2>
        <p className="pt-5 lg:text-[18px] opacity-[0.48]">
          Our AI developers excel at integrating top-tier artificial
          intelligence services into your business operations, processes, and
          growth strategies, across any industry.
        </p>
      </div>
      <div className="overflow-auto no-scroll lg:px-8">
        <div className="relative flex lg:grid md:grid-cols-2 lg:grid-cols-4 pt-[72px] px-4 lg:px-0 flex-nowrap">
          {serveService?.map((value, index) => {
            return (
              <div
                key={index}
                className="h-[300px] min-w-[300px] lg:min-w-0 lg:h-[368px] p-3 border-b border-white border-opacity-[0.16] border-dashed"
              >
                <div className="h-full pr-3 border-r border-white border-opacity-[0.16] border-dashed">
                  <div className="flex w-full h-full items-center group justify-center cursor-pointer hover:bg-primary duration-150 rounded-xl">
                    <div>
                      <Image
                        src={value?.img}
                        className="mx-auto w-[60px] h-[60px] lg:w-[72px] lg:h-[72px] group-hover:hidden duration-150"
                        width={72}
                        height={72}
                        priority
                        alt="img"
                      />
                      <Image
                        src={value?.imgHover}
                        className="mx-auto group-hover:w-[100px] group-hover:h-[100px] lg:group-hover:w-[124px] lg:group-hover:h-[124px] hidden group-hover:block duration-150"
                        width={72}
                        height={72}
                        priority
                        alt="img"
                      />
                      <div className="pt-4 text-[26px] lg:text-[30px] font-semibold text-center group-hover:text-background">
                        {value?.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="absolute w-[13px] h-full top-0 right-0 bg-background" />
          <div className="absolute h-[13px] w-full bottom-0 left-0 bg-background" />
        </div>
      </div>
      <div className="flex justify-end pt-5 lg:pt-0 px-4 lg:px-8">
        <ButtonSecondary
          title="Discuss Your Business Requirements"
          className="w-full lg:w-fit"
        />
      </div>
    </section>
  );
};

export default ServeService;
