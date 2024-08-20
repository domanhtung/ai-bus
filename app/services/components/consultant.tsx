import { ButtonSecondary } from "@/app/components/custom/button";
import { ContactContext } from "@/app/context/contact-context";
import Image from "next/image";
import { useContext } from "react";

interface Props {
  potentialTitle: string;
  potentialContent: string;
  potentialImg: string;
}

const ConsultantsService = ({
  potentialContent,
  potentialImg,
  potentialTitle,
}: Props) => {
  const { showContact } = useContext(ContactContext);

  return (
    <section className="py-12 lg:py-24 max-w-[1512px] px-4 lg:px-8 mx-auto">
      <h2 className="text-[28px] lg:text-[60px] font-bold leading-[40px] lg:leading-[72px] lg:text-center opacity-[0.86] hover:scale-105 duration-200">
        {potentialTitle}
      </h2>
      <p className="pt-5 lg:text-[18px] leading-[28px] opacity-[0.48] lg:text-center">
        {potentialContent}
      </p>
      <div className="text-center pt-8">
        <ButtonSecondary
          title="Speak with Our Consultants"
          className="w-full lg:w-fit"
          onClick={() => showContact()}
        />
      </div>
      <div className="pt-8 lg:pt-[72px]">
        <Image
          src={potentialImg}
          className="w-full h-auto rounded-xl"
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
