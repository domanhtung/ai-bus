import { ButtonSecondary } from "@/app/components/custom/button";
import { techStacksService } from "@/app/constants/service";
import Image from "next/image";

const TechStackService = () => {
  return (
    <section className="py-24 max-w-[1512px] px-8 mx-auto">
      <h2 className="text-[72px] font-bold opacity-[0.86] leading-[96px] text-center hover:scale-105 duration-200">
        Tech Stack We Use to
        <br />
        Deliver Top-Notch AI Services
      </h2>
      <div className="pt-8 text-center">
        <ButtonSecondary title="Meet Our Experts" />
      </div>
      <div className="mt-[72px] py-14 bg-white bg-opacity-[0.04] rounded-xl">
        <div className="grid grid-cols-6 max-w-[1036px] mx-auto gap-5">
          {techStacksService?.map((value, index) => {
            return (
              <div key={index}>
                <Image
                  src={value?.img}
                  className="w-full h-[156px] rounded-lg overflow-hidden bg-white bg-opacity-[0.04] object-contain"
                  width={156}
                  height={156}
                  priority
                  alt="logo"
                />
                <div className="pt-4 text-center text-[18px]">
                  {value?.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStackService;
