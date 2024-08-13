import { ButtonSecondaryDark } from "@/app/components/custom/button";
import { ContactContext } from "@/app/context/contact-context";
import { useContext } from "react";

const KickstartCaseStudy = () => {
  const { showContact } = useContext(ContactContext);

  return (
    <section className="bg-white rounded-xl">
      <div className="py-8 lg:py-[70px] max-w-[1512px] px-4 lg:px-8 mx-auto">
        <div className="text-[28px] lg:text-[60px] font-bold leading-[40px] lg:leading-[72px] text-background hover:scale-105 duration-200">
          Kickstart Your Dream Project With Us
        </div>
        <p className="pt-3 lg:pt-5 lg:text-[18px] leading-[28px] text-background">
          Discuss your idea with us and start your entrepreneurial journey
          today!
        </p>
        <div className="pt-8 lg:pt-[72px]">
          <ButtonSecondaryDark
            title="Get in touch"
            className="w-full lg:w-fit"
            onClick={() => showContact()}
          />
        </div>
      </div>
    </section>
  );
};

export default KickstartCaseStudy;
