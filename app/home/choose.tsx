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
        "flex flex-col h-[440px] p-4 border border-white border-opacity-[0.1] rounded-xl cursor-pointer",
        isHover && "bg-primary"
      )}
      onMouseEnter={() => onHover(index)}
      onTouchStart={() => onHover(index)}
    >
      <div className="flex-1">
        <Image src={value?.img} width={124} height={124} priority alt="logo" />
      </div>
      <div>
        <div
          className={clsx(
            "text-[36px] font-semibold leading-[40px]",
            isHover ? "text-background" : "text-white opacity-[0.86]"
          )}
        >
          {value?.title}
        </div>
        <div
          className={clsx(
            "pt-4 font-medium",
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
    <div className="max-w-[1512px] mx-auto px-8 py-24">
      <div className="flex gap-2 items-center text-[14px] font-medium uppercase">
        <Image
          src={"/images/arrow-right-up.svg"}
          width={20}
          height={20}
          priority
          alt="arrow"
        />
        <span className="text-white opacity-[0.48]">
          Why aiBus is Your Partner?
        </span>
      </div>
      <h3 className="pt-6 text-[72px] font-bold leading-[96px] opacity-[0.86]">
        Transforms Your Business & Delivers Tangible Results
      </h3>
      <p className="pt-5 text-[18px] text-white opacity-[0.48]">
        We excel in delivering high-quality solutions through a blend of
        technical expertise, innovative approaches, and strategic insights. Our
        competence ensures top-tier service and exceptional results for your
        projects.
      </p>
      <div className="grid grid-cols-4 gap-6 pt-[72px]">
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
