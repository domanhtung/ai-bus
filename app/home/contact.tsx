import Image from "next/image";
import { ButtonPrimary } from "../components/custom/button";

interface Props {
  openModal: () => void;
}

const Contact = ({ openModal }: Props) => {
  return (
    <div className="max-w-[1512px] mx-auto px-5 lg:px-8 py-12 xl:py-24">
      <div className="bg-contact lg:flex lg:h-[180px] xl:h-[240px] py-5 px-5 lg:px-12 xl:px-24 items-center justify-between rounded-xl">
        <div className="pb-5 lg:pb-0 text-[26px] xl:text-[40px] font-semibold leading-[28px] lg:leading-[36px] xl:leading-[48px] text-background hover:scale-105 duration-200">
          We’re Delivering the best customer Experience
        </div>
        <ButtonPrimary
          title="Contact us"
          className="border border-background"
          onClick={() => openModal()}
        />
      </div>
    </div>
  );
};

export default Contact;
