"use client";
import { useContext } from "react";
import { ButtonPrimary } from "../components/custom/button";
import { ContactContext } from "../context/contact-context";

const Contact = () => {
  const { showContact } = useContext(ContactContext);

  return (
    <div className="max-w-[1512px] mx-auto px-4 lg:px-8 py-12 xl:py-24">
      <div className="bg-contact lg:flex lg:h-[180px] xl:h-[240px] py-5 px-5 lg:px-12 xl:px-24 items-center justify-between rounded-xl">
        <div className="pb-5 lg:pb-0 text-center lg:text-left text-[26px] xl:text-[40px] font-semibold leading-[28px] lg:leading-[36px] xl:leading-[48px] text-background hover:scale-105 duration-200">
          We’d love to hear from you. Drop us a line!
        </div>
        <ButtonPrimary
          title="Contact us"
          className="w-full lg:w-fit border border-background"
          onClick={() => showContact()}
        />
      </div>
    </div>
  );
};

export default Contact;
