import { heroContact } from "@/app/constants/contact";
import Image from "next/image";

const HeroBlogs = () => {
  return (
    <section className="py-6 lg:py-24 max-w-[1512px] px-4 lg:px-8 mx-auto overflow-hidden">
      <div className="flex gap-2 items-center text-[14px] font-medium uppercase">
        <Image
          src={"/images/arrow-right-up.svg"}
          className="w-[20px] h-[20px]"
          width={20}
          height={20}
          priority
          alt="arrow"
        />
        <span className="text-white opacity-[0.48]">our blogs</span>
      </div>
      <h1 className="mt-6 text-[40px] leading-[48px] font-semibold lg:text-[96px] lg:leading-[96px] lg:font-extrabold text-white opacity-[0.86] hover:scale-105 duration-200">
        Sharing our knowledge
      </h1>
    </section>
  );
};

export default HeroBlogs;
