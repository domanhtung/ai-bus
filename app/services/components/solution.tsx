import { solutionService } from "@/app/constants/service";
import Image from "next/image";

const SolutionService = () => {
  return (
    <section className="py-24 max-w-[1512px] px-8 mx-auto">
      <div className="grid grid-cols-2">
        <div>
          <div className="text-[30px] font-semibold leading-[44px] opacity-[0.86] text-white">
            Machine Learning
          </div>
          <h2 className="flex gap-3 pt-3 items-center text-primary text-[48px] font-bold">
            GenAI Application
            <Image
              src={"/images/arrow-right.svg"}
              className="w-[36px] h-[36px]"
              width={36}
              height={36}
              priority
              alt="arrow"
            />
          </h2>
          <div className="pt-3 text-[30px] font-semibold leading-[44px] opacity-[0.86] text-white">
            Computer Vision
          </div>
          <div className="pt-3 text-[30px] font-semibold leading-[44px] opacity-[0.86] text-white">
            Natural Language
          </div>
        </div>
        <div>
          <div className="flex gap-2 items-center text-[12px] xl:text-[14px] font-medium text-primary uppercase">
            <Image
              src={"/images/arrow-pri-right-up.svg"}
              className="w-[16px] h-[16px] xl:w-[20px] xl:h-[20px]"
              width={20}
              height={20}
              priority
              alt="arrow"
            />
            Generative AI application
          </div>
          <div className="pt-6 text-[48px] font-bold opacity-[0.86] text-white hover:scale-105 duration-200">
            Fuel Your Creativity with Cutting-Edge Technology
          </div>
          <p className="pt-5 text-white opacity-[0.48]">
            Unlock the future with our cutting-edge Generative AI solutions. We
            craft unique data formats—like music, poetry, and functional
            code—using advanced deep learning techniques. Our GenAI technology
            fuels innovation, personalizes user experiences, and accelerates
            design and development. Tailored to your needs, our solutions
            deliver impactful, high-quality results.
          </p>
          <div className="pt-11">
            {solutionService?.map((value, index) => {
              return (
                <div key={index}>
                  <div className="font-medium text-white opacity-[0.86]">
                    {value?.title}
                  </div>
                  <p className="pt-2 opacity-[0.48]">{value?.content}</p>
                  {index < solutionService?.length - 1 && (
                    <div className="h-[1px] my-5 bg-white opacity-[0.16]" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionService;
