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
          "flex gap-5 py-4 px-5 lg:px-6 xl:p-6 justify-between bg-white bg-opacity-[0.04] items-center cursor-pointer",
          isShow ? "rounded-t-xl" : "rounded-xl"
        )}
        onClick={() => setShow(index)}
      >
        <div
          className={clsx(
            "flex gap-6 items-center text-[22px] leading-[30px] xl:text-[30px] xl:leading-[44px] font-semibold",
            isShow && "text-primary"
          )}
        >
          <span>{index + 1}.</span>
          <span>{tech?.name}</span>
        </div>
        <Image
          src={isShow ? "/images/subtract.svg" : "/images/add.svg"}
          className="w-[30px] min-w-[30px] h-[30px] xl:h-[44px] xl:w-[44px] xl:min-w-[44px]"
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
                  <div className="lg:pl-9 xl:pl-[72px] text-[16px] xl:text-[18px]">
                    {value?.name}
                  </div>
                  <div className="flex max-w-[900px] gap-3 lg:gap-5 items-center justify-end flex-wrap">
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
  const [currentShow, setCurrentShow] = useState<number>(0);

  const handleShow = (idx: number) => {
    if (idx === currentShow) {
      setCurrentShow(-1);
      return;
    }
    setCurrentShow(idx);
  };

  return (
    <div className="max-w-[1512px] mx-auto px-4 lg:px-8 pt-14 pb-14 xl:pb-24">
      <div className="flex gap-2 items-center text-[12px] xl:text-[14px] font-medium uppercase">
        <Image
          src={"/images/arrow-right-up.svg"}
          className="w-[16px] h-[16px] xl:w-[20px] xl:h-[20px]"
          width={20}
          height={20}
          priority
          alt="arrow"
        />
        <span className="text-white opacity-[0.48]">
          research and development center
        </span>
      </div>
      <h3 className="pt-3 xl:pt-6 text-[30px] lg:text-[50px] xl:text-[72px] font-bold leading-[34px] lg:leading-[62px] xl:leading-[96px] opacity-[0.86] hover:scale-105 duration-200">
        Technical stacks
      </h3>
      <div className="lg:flex justify-between items-end">
        <p className="max-w-[600px] xl:max-w-[835px] pb-5 lg:pb-0 pt-3 xl:pt-5 xl:text-[18px] opacity-[0.86]">
          We excel in delivering high-quality solutions through a blend of
          technical expertise, innovative approaches, and strategic insights.
          Our competence ensures top-tier service and exceptional results for
          your projects.
        </p>
        <Link href={""}>
          <ButtonSecondary
            title="Meet our Experts"
            onClick={() => showContact()}
          />
        </Link>
      </div>
      <div className="grid mt-10 lg:pt-[72px]">
        {techStacks?.map((tech, index) => {
          return (
            <TechStackItem
              key={tech?.name}
              isShow={index === currentShow}
              index={index}
              tech={tech as any}
              setShow={handleShow}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TechStacks;
