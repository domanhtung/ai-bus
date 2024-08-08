"use client";
import Image from "next/image";
import { ButtonSecondary } from "../components/custom/button";
import Link from "next/link";
import { techStacks } from "../constants/home";
import { useContext, useState } from "react";
import clsx from "clsx";
import { ContactContext } from "../context/contact-context";

interface TechList {
  name: string;
  logos: string[];
}

interface Props {
  index: number;
  tech: {
    name: string;
    techList: TechList[];
  };
}

const TechStackItem = ({ tech, index }: Props) => {
  const [isShow, setIsShow] = useState<boolean>(index === 0 ? true : false);

  return (
    <div className="pb-4">
      <div
        className={clsx(
          "flex gap-5 py-4 px-5 lg:px-6 xl:p-6 justify-between bg-white bg-opacity-[0.04] items-center cursor-pointer",
          isShow ? "rounded-t-xl" : "rounded-xl"
        )}
        onClick={() => setIsShow(!isShow)}
      >
        <div
          className={clsx(
            "flex gap-6 items-center text-[20px] leading-[28px] xl:text-[30px] xl:leading-[44px] font-semibold",
            isShow && "text-primary"
          )}
        >
          <span>{index + 1}.</span>
          <span>{tech?.name}</span>
        </div>
        <Image
          src={isShow ? "/images/subtract.svg" : "/images/add.svg"}
          className="min-w-[44px]"
          width={44}
          height={44}
          priority
          alt="icon"
        />
      </div>
      <div className="overflow-hidden bg-white bg-opacity-[0.04] rounded-b-xl">
        <div
          className={clsx(
            "px-5 lg:px-6 overflow-hidden duration-500",
            isShow ? "mt-0" : "-mt-[200%] lg:-mt-[100%]"
          )}
        >
          <div className="h-[1px] bg-white opacity-[0.16]" />
          <div className="grid gap-4 py-6">
            {tech?.techList?.map((value) => {
              return (
                <div
                  key={value?.name}
                  className="lg:flex gap-5 items-center justify-between"
                >
                  <div className="lg:pl-9 xl:pl-[72px] text-[18px]">
                    {value?.name}
                  </div>
                  <div className="flex max-w-[900px] mt-4 lg:mt-0 gap-3 lg:gap-5 items-center lg:justify-end flex-wrap">
                    {value?.logos?.map((logo, index) => {
                      return (
                        <Image
                          key={index}
                          src={logo}
                          className="w-fit h-[44px] xl:h-[68px] object-contain grayscale hover:grayscale-0"
                          width={156}
                          height={68}
                          priority
                          alt="logo"
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const TechStacks = () => {
  const { showContact } = useContext(ContactContext);

  return (
    <div className="max-w-[1512px] mx-auto px-4 lg:px-8 py-8 xl:pt-14 xl:pb-24">
      <div className="flex gap-2 items-center text-[14px] font-medium uppercase">
        <Image
          src={"/images/arrow-right-up.svg"}
          className="w-[20px] h-[20px]"
          width={20}
          height={20}
          priority
          alt="arrow"
        />
        <span className="text-white opacity-[0.48]">OUR SKILLS</span>
      </div>
      <h3 className="pt-4 xl:pt-6 text-[30px] lg:text-[50px] xl:text-[72px] font-bold leading-[44px] lg:leading-[62px] xl:leading-[96px] opacity-[0.86] hover:scale-105 duration-200">
        Technical stacks
      </h3>
      <div className="lg:flex justify-between items-end">
        <p className="max-w-[600px] xl:max-w-[835px] pb-5 lg:pb-0 pt-3 xl:pt-5 xl:text-[18px] leading-[28px] opacity-[0.86]">
          We excel in delivering high-quality solutions through a blend of
          technical expertise, innovative approaches, and strategic insights.
          Our competence ensures top-tier service and exceptional results for
          your projects.
        </p>
        <ButtonSecondary
          title="Meet our Experts"
          className="w-full lg:w-fit"
          onClick={() => showContact()}
        />
      </div>
      <div className="grid mt-10 lg:pt-[72px]">
        {techStacks?.map((tech, index) => {
          return (
            <TechStackItem key={tech?.name} index={index} tech={tech as any} />
          );
        })}
      </div>
    </div>
  );
};

export default TechStacks;
