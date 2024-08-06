import { masteriviewSaid } from "@/app/constants/case-study";
import Image from "next/image";

const MasteriviewSaidCaseStudy = () => {
  return (
    <section className="max-w-[1512px] mx-auto px-4 lg:px-8 py-12 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-0">
        <div>
          <div className="flex gap-2 items-center text-[12px] xl:text-[14px] font-medium uppercase">
            <Image
              src={"/images/arrow-right-up.svg"}
              className="w-[16px] h-[16px] xl:w-[20px] xl:h-[20px]"
              width={20}
              height={20}
              priority
              alt="arrow"
            />
            <span className="text-white opacity-[0.48]">Masteriview said</span>
          </div>
          <h3 className="pt-6 text-[30px] lg:text-[48px] leading-[46px] lg:leading-[56px] font-bold opacity-[0.86] hover:scale-105 duration-200">
            Masteriview said
          </h3>
        </div>
        <div className="flex justify-end">
          <div className="max-w-[662px] flex flex-col w-full lg:h-[440px] p-4 bg-primary rounded-xl">
            <div className="flex-1">
              <Image
                src={masteriviewSaid?.img}
                className="w-[72px] h-[72px]"
                width={72}
                height={72}
                priority
                alt="avatar"
              />
            </div>
            <div>
              <p className="mt-5 lg:mt-0 lg:text-[18px] text-background">
                {masteriviewSaid?.name}
              </p>
              <div className="line h-[1px] my-4 bg-background" />
              <p className="text-background lg:text-[18px] font-medium">
                {masteriviewSaid?.comment}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasteriviewSaidCaseStudy;
