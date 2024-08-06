import { ButtonSecondary } from "@/app/components/custom/button";
import Image from "next/image";

const ConsultantsService = () => {
  return (
    <section className="py-12 lg:py-24 max-w-[1512px] px-4 lg:px-8 mx-auto">
      <h2 className="text-[30px] lg:text-[60px] font-bold leading-[42px] lg:leading-[72px] text-center opacity-[0.86] hover:scale-105 duration-200">
        Unlock the transformative potential of AI
      </h2>
      <p className="pt-5 lg:text-[18px] opacity-[0.48] text-center">
        We can enable you to re-imagine a new age of operational efficiency for
        your company and release the potential of artificial intelligence.
      </p>
      <div className="text-center pt-8">
        <ButtonSecondary
          title="Speak with Our Consultants"
          className="w-full lg:w-fit"
        />
      </div>
      <div className="pt-[72px]">
        <Image
          src={"/images/service/consultants.svg"}
          className="w-full h-auto"
          width={1448}
          height={480}
          priority
          alt="banner"
        />
      </div>
    </section>
  );
};

export default ConsultantsService;
