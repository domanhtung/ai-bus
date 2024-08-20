import { ButtonSecondary } from "@/app/components/custom/button";
import { techStacksService } from "@/app/constants/service";
import { ContactContext } from "@/app/context/contact-context";
import Image from "next/image";
import { useContext } from "react";

const TechStackService = () => {
  const { showContact } = useContext(ContactContext);

  return (
    <section>
      <div className="py-8 lg:py-24 max-w-[1512px] lg:px-8 mx-auto">
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
      </div>
      <div className="overflow-hidden">
        <div className="animation-techStack flex gap-6 flex-nowrap items-center">
          {[...techStacksService, ...techStacksService]?.map((value, index) => {
            return (
              <div
                key={index}
                className="relative w-[250px] min-w-[250px] h-[100px] p-3 xl:p-4 group bg-background border border-white border-opacity-10 rounded-xl grayscale hover:grayscale-0 overflow-hidden"
              >
                <div className="absolute hidden group-hover:block w-[32px] h-[32px] bottom-0 left-0 rounded-full bg-primary blur-xl" />
                <Image
                  src={value}
                  className="relative w-full h-full object-contain"
                  width={271}
                  height={44}
                  priority
                  alt="tech stack"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStackService;
