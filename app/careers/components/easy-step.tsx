"use client";
import { easySteps } from "@/app/constants/career";
import clsx from "clsx";
import { useState } from "react";

const EasyStepCareers = () => {
  const [currentSelect, setCurrentSelect] = useState<number>(0);

  const onHover = (index: number) => {
    if (currentSelect === index) return;
    setCurrentSelect(index);
  };

  return (
    <section className="py-8 lg:pt-24 lg:pb-[124px] max-w-[1512px] lg:px-8 mx-auto overflow-hidden">
      <h2 className="text-[28px] px-4 leading-[40px] lg:text-[48px] lg:leading-[56px] font-bold text-white opacity-[0.86] hover:scale-105 duration-200">
        In just 4 easy steps you’ll be part of the Software Mind Team!
      </h2>
      <p className="pt-5 px-4 text-[16px] lg:text-[18px] leading-[28px] text-white opacity-[0.48]">
        You will receive feedback after each stage of the recruitment process.
      </p>
      <div className="overflow-auto lg:overflow-hidden">
        <div className="grid grid-cols-4 w-max lg:w-full px-4 gap-6 pt-8 lg:pt-[72px]">
          {easySteps?.map((step, index) => {
            return (
              <div
                key={index}
                className={clsx(
                  "grid w-[320px] min-w-[320px] lg:w-full h-[240px] p-4 rounded-xl duration-500 cursor-pointer",
                  currentSelect === index
                    ? "bg-primary border border-transparent"
                    : "border border-white border-opacity-10"
                )}
                onMouseEnter={() => onHover(index)}
                onTouchStart={() => onHover(index)}
              >
                <div
                  className={clsx(
                    "text-[36px] leading-[40px] font-semibold duration-500",
                    currentSelect === index && "text-background"
                  )}
                >
                  {step?.title}
                </div>
                <div
                  className={clsx(
                    "mt-auto text-[18px] leading-[28px] font-medium duration-500",
                    currentSelect === index && "text-background"
                  )}
                >
                  {step?.content}
                </div>
              </div>
            );
          })}
        </div>
        <div className="hidden lg:grid grid-cols-4 pt-6">
          {easySteps?.map((_, index) => {
            return (
              <div key={index} className="flex items-center">
                <div
                  className={clsx(
                    "w-full h-[2px] bg-white",
                    index > 0 ? "opacity-[0.16]" : "opacity-0"
                  )}
                />
                <div
                  className={clsx(
                    "w-[24px] min-w-[24px] h-[24px] border-[2px] rounded-full duration-500",
                    currentSelect === index
                      ? "border-primary"
                      : "border-white border-opacity-[0.16]"
                  )}
                />
                <div
                  className={clsx(
                    "w-full h-[2px] bg-white",
                    index < easySteps?.length - 1
                      ? "opacity-[0.16]"
                      : "opacity-0"
                  )}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EasyStepCareers;
