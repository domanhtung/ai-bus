"use client";
import AIBusContactForm from "./form";

const FormContact = () => {
  return (
    <section className="py-8 lg:py-24 max-w-[1512px] px-4 lg:px-8 mx-auto overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-7 lg:gap-10 xl:gap-[124px]">
        <div className="text-[26px] leading-[36px] font-semibold lg:text-[48px] lg:leading-[56px] lg:font-bold text-white opacity-[0.86] hover:scale-105 duration-200">
          We will reach out to you as soon as received your message
        </div>
        <div>
          <AIBusContactForm />
        </div>
      </div>
    </section>
  );
};

export default FormContact;
