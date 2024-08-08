/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useRef, useState } from "react";
import { numberSection } from "../constants/home";

interface Props {
  value: {
    count: number;
    label: string;
  };
}

const SectionItem = ({ value }: Props) => {
  let currentNumber = 0;
  const ref = useRef<any>();
  const currentRef = useRef<any>();
  const [isAnimate, setIsAnimate] = useState<boolean>(false);

  useEffect(() => {
    if (currentRef?.current) {
      const observer = new IntersectionObserver(function (entries) {
        if (entries?.[0]?.isIntersecting) {
          setIsAnimate(true);
          observer?.unobserve(currentRef?.current);
        }
      }, {});
      observer?.observe(currentRef?.current);
      return () =>
        observer?.unobserve &&
        currentRef?.current &&
        observer?.unobserve(currentRef?.current);
    }
  }, []);

  useEffect(() => {
    if (isAnimate) {
      const numberPercent =
        value?.count > 20 ? Math?.floor(value?.count / 20) : 1;
      const intervalId = setInterval(() => {
        if (ref?.current) {
          currentNumber += numberPercent;
          if (currentNumber >= value?.count) {
            ref.current.innerHTML = value?.count;
            clearInterval(intervalId);
          } else {
            ref.current.innerHTML = currentNumber;
          }
        }
      }, 60);
      return () => clearInterval(intervalId);
    }
  }, [isAnimate]);

  return (
    <div className="relative p-4 bg-white bg-opacity-[0.04] group rounded-xl overflow-hidden">
      <div className="absolute hidden group-hover:block w-[32px] h-[32px] bottom-0 left-0 bg-primary rounded-full blur-xl z-0" />
      <div className="relative">
        <div
          ref={ref}
          className="text-[26px] xl:text-[48px] font-bold leading-[36px] xl:leading-[56px]"
        >
          0
        </div>
        <div
          ref={currentRef}
          className="pt-2 lg:pt-4 text-[14px] lg:text-[16px] font-medium opacity-[0.48]"
        >
          {value?.label}
        </div>
      </div>
    </div>
  );
};

const NumberSection = () => {
  return (
    <div className="max-w-[1512px] mx-auto px-4 lg:px-8 pb-8 xl:pb-14 pt-11 xl:pt-[124px]">
      <div className="grid lg:grid-cols-4 gap-4 lg:gap-6">
        {numberSection?.map((value) => {
          return <SectionItem key={value?.label} value={value} />;
        })}
      </div>
    </div>
  );
};

export default NumberSection;
