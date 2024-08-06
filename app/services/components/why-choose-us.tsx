import { whyChooseUsService } from "@/app/constants/service";
import Image from "next/image";

const WhyChooseUsService = () => {
  return (
    <section className="py-12 lg:py-24 max-w-[1512px] px-4 lg:px-8 mx-auto">
      <h2 className="max-w-[1200px] text-[42px] lg:text-[72px] font-bold hover:scale-105 duration-200">
        Why Choose Us as Your Artificial Intelligence Development Team?
      </h2>
      <p className="pt-5 lg:text-[18px] text-white opacity-[0.48]">
        Being among the committed AI service providers, we use our broad domain
        knowledge to challenge your company&apos;s limits. Our AI app
        development services are meant to generate real outcomes and release
        artificial intelligence&apos;s whole potential.
      </p>
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-0 pt-10 lg:pt-[72px] overflow-hidden">
        <div>
          <Image
            src={"/images/service/why_choose.png"}
            className="rounded-xl"
            width={560}
            height={491}
            priority
            alt="why choose"
          />
        </div>
        <div>
          {whyChooseUsService?.map((value, index) => {
            return (
              <div key={index} data-aos="fade-left">
                <div className="font-medium text-[18px] text-white opacity-[0.86]">
                  {value?.title}
                </div>
                <p className="pt-2 opacity-[0.48]">{value?.content}</p>
                {index < whyChooseUsService?.length - 1 && (
                  <div className="h-[1px] my-5 bg-white opacity-[0.16]" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsService;
