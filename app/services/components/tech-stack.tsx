import { ButtonSecondary } from "@/app/components/custom/button";
import { techStacksService } from "@/app/constants/service";
import { ContactContext } from "@/app/context/contact-context";
import Image from "next/image";
import { useContext } from "react";

const TechStackService = () => {
  const { showContact } = useContext(ContactContext);

  return (
    <section className="py-8 lg:py-24 max-w-[1512px] lg:px-8 mx-auto">
      <div className="px-4 lg:px-0">
        <h2 className="text-[30px] lg:text-[72px] font-bold opacity-[0.86] leading-[44px] lg:leading-[96px] lg:text-center hover:scale-105 duration-200">
          Tech Stack We Use to
          <br />
          Deliver Top-Notch AI Services
        </h2>
        <div className="pt-8 text-center">
          <ButtonSecondary
            title="Meet Our Experts"
            className="w-full lg:w-fit"
            onClick={() => showContact()}
          />
        </div>
      </div>
      <div className="mt-8 lg:mt-[72px] py-8 lg:py-14 bg-white bg-opacity-[0.04] rounded-xl">
        <div className="overflow-auto no-scroll">
          <div className="flex lg:grid lg:grid-cols-6 lg:max-w-[1036px] w-fit lg:w-full mx-auto flex-nowrap gap-2 lg:gap-5 px-4 lg:px-0">
            {techStacksService?.map((value, index) => {
              return (
                <div key={index}>
                  <Image
                    src={value?.img}
                    className="min-w-[120px] lg:min-w-0 lg:w-full h-[120px] lg:h-[156px] rounded-lg overflow-hidden bg-white bg-opacity-[0.04] object-contain"
                    width={156}
                    height={156}
                    priority
                    alt="logo"
                  />
                  <div className="pt-4 text-center text-[14px] lg:text-[18px]">
                    {value?.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackService;
