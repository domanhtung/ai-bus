"use client";
import Image from "next/image";
import { ButtonSecondary } from "../components/custom/button";
import Link from "next/link";
import { techStacks } from "../constants/home";
import { useState } from "react";
import clsx from "clsx";

interface TechList {
  name: string;
  logos: string[];
}

interface Props {
  index: number;
  isShow: boolean;
  tech: {
    name: string;
    techList: TechList[];
  };
  setShow: (index: number) => void;
}

const TechStackItem = ({ tech, isShow, index, setShow }: Props) => {
  return (
    <div className="pb-4">
      <div
        className={clsx(
          "flex gap-5 p-6 justify-between bg-white bg-opacity-[0.04] items-center cursor-pointer",
          isShow ? "rounded-t-xl" : "rounded-xl"
        )}
        onClick={() => setShow(index)}
      >
        <div
          className={clsx(
            "flex gap-6 items-center text-[30px] leading-[44px] font-semibold",
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
            "px-6 overflow-hidden duration-500",
            isShow ? "mt-0" : "-mt-[100%]"
          )}
        >
          <div className="h-[1px] bg-white opacity-[0.16]" />
          <div className="grid gap-4 py-6">
            {tech?.techList?.map((value) => {
              return (
                <div
                  key={value?.name}
                  className="flex gap-5 items-center justify-between"
                >
                  <div className="pl-[72px] text-[18px]">{value?.name}</div>
                  <div className="flex gap-5 items-center">
                    {value?.logos?.map((logo) => {
                      return (
                        <Image
                          key={logo}
                          src={logo}
                          className="w-[156px] h-[68px] bg-white bg-opacity-[0.04] rounded-lg object-contain"
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
  const [currentShow, setCurrentShow] = useState<number>(0);

  return (
    <div className="max-w-[1512px] mx-auto px-8 pt-14 pb-24">
      <div className="flex gap-2 items-center text-[14px] font-medium uppercase">
        <Image
          src={"/images/arrow-right-up.svg"}
          width={20}
          height={20}
          priority
          alt="arrow"
        />
        <span className="text-white opacity-[0.48]">
          research and development center
        </span>
      </div>
      <h3 className="pt-6 text-[72px] font-bold leading-[96px] opacity-[0.86] hover:scale-105 duration-200">
        Technical stacks
      </h3>
      <div className="flex justify-between items-end">
        <p className="max-w-[835px] pt-5 text-[18px] opacity-[0.86]">
          We excel in delivering high-quality solutions through a blend of
          technical expertise, innovative approaches, and strategic insights.
          Our competence ensures top-tier service and exceptional results for
          your projects.
        </p>
        <Link href={""}>
          <ButtonSecondary title="Meet our Experts" />
        </Link>
      </div>
      <div className="grid pt-[72px]">
        {techStacks?.map((tech, index) => {
          return (
            <TechStackItem
              key={tech?.name}
              isShow={index === currentShow}
              index={index}
              tech={tech as any}
              setShow={setCurrentShow}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TechStacks;
