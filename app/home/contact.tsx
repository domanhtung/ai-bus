import Image from "next/image";
import { ButtonPrimary } from "../components/custom/button";

const Contact = () => {
  return (
    <div className="max-w-[1512px] mx-auto px-8 py-24">
      <div className="bg-contact flex h-[240px] px-24 items-center justify-between rounded-xl">
        <div className="text-[40px] font-semibold leading-[48px] text-background hover:scale-105 duration-200">
          We’re Delivering the best customer Experience
        </div>
        <ButtonPrimary
          title="Contact us"
          className="border border-background"
        />
      </div>
    </div>
  );
};

export default Contact;
