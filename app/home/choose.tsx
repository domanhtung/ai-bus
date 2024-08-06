"use client";
import Image from "next/image";
import { whyChooseUs } from "../constants/home";
import { useMemo, useState } from "react";
import clsx from "clsx";

interface Props {
  index: number;
  currentSelect: number;
  value: { img: string; title: string; content: string };
  onHover: (index: number) => void;
}

const WhyChooseUsItem = ({ value, currentSelect, index, onHover }: Props) => {
  const isHover = useMemo(() => {
    return currentSelect === index;
  }, [currentSelect, index]);

  return (
    <div
      className={clsx(
        "flex flex-col h-[380px] lg:h-[440px] p-4 border border-white border-opacity-[0.1] rounded-xl cursor-pointer",
        isHover && "bg-primary"
      )}
      onMouseEnter={() => onHover(index)}
      onTouchStart={() => onHover(index)}
    >
      <div className="flex-1">
        <Image
          src={value?.img}
          className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] xl:w-[124px] xl:h-[124px]"
          width={124}
          height={124}
          priority
          alt="logo"
        />
      </div>
      <div>
        <div
          className={clsx(
            "text-[26px] lg:text-[30px] xl:text-[36px] font-semibold leading-[40px] hover:scale-105 duration-200",
            isHover ? "text-background" : "text-white opacity-[0.86]"
          )}
        >
          {value?.title}
        </div>
        <div
          className={clsx(
            "pt-2 xl:pt-4 text-[14px] lg:text-[16px] font-medium",
            isHover ? "text-background" : "text-white opacity-[0.48]"
          )}
        >
          {value?.content}
        </div>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const [currentSelect, setCurrentSelect] = useState<number>(0);

  const onHover = (index: number) => {
    if (currentSelect === index) return;
    setCurrentSelect(index);
  };

  return (
    <div className="max-w-[1512px] mx-auto px-4 lg:px-8 py-12 xl:py-24">
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
          Why aiBus is Your Partner?
        </span>
      </div>
      <h3 className="pt-3 xl:pt-6 text-[28px] lg:text-[50px] xl:text-[72px] font-bold leading-[30px] lg:leading-[62px] xl:leading-[96px] opacity-[0.86] hover:scale-105 duration-200">
        Transforms Your Business & Delivers Tangible Results
      </h3>
      <p className="pt-3 xl:pt-5 xl:text-[18px] text-white opacity-[0.48]">
        We excel in delivering high-quality solutions through a blend of
        technical expertise, innovative approaches, and strategic insights. Our
        competence ensures top-tier service and exceptional results for your
        projects.
      </p>
      <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-3 lg:gap-6 pt-10 xl:pt-[72px]">
        {whyChooseUs?.map((value, index) => {
          return (
            <WhyChooseUsItem
              key={value?.title}
              value={value}
              currentSelect={currentSelect}
              index={index}
              onHover={onHover}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WhyChooseUs;
