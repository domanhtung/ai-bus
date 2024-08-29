import { journeyCareers } from "@/app/constants/career";
import Image from "next/image";

const JourneyCareers = () => {
  return (
    <section className="py-6 lg:py-24 max-w-[1512px] lg:px-8 mx-auto overflow-hidden">
      <h2 className="text-[28px] px-4 leading-[40px] lg:text-[60px] lg:leading-[72px] font-bold text-white opacity-[0.86] hover:scale-105 duration-200">
        Serious about results, joyful in the journey.
      </h2>
      <div className="mt-8 lg:mt-[72px] overflow-auto lg:overflow-hidden">
        <div className="grid grid-cols-3 px-4 lg:grid-cols-4 w-max gap-6">
          {journeyCareers?.map((career, index) => {
            return (
              <Image
                key={index}
                src={career}
                className="rounded-[7px] w-[250px] min-w-[250px] lg:w-full h-[320px] lg:h-[440px]"
                width={344}
                height={440}
                priority
                alt="journey"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JourneyCareers;
