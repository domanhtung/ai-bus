import { ButtonSecondaryDark } from "@/app/components/custom/button";

const KickstartCaseStudy = () => {
  return (
    <section className="bg-white rounded-xl">
      <div className="py-[70px] max-w-[1512px] px-8 mx-auto">
        <div className="text-[60px] font-bold leading-[72px] text-background hover:scale-105 duration-200">
          Kickstart Your Dream Project With Us
        </div>
        <p className="pt-5 text-[18px] text-background">
          Discuss your idea with us and start your entrepreneurial journey
          today!
        </p>
        <div className="pt-[72px]">
          <ButtonSecondaryDark title="Get in touch" />
        </div>
      </div>
    </section>
  );
};

export default KickstartCaseStudy;
