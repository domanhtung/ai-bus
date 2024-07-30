"use client";
import Image from "next/image";
import { aboutSection } from "../constants/home";
import { EyeActive, EyeInActive } from "../components/svg/eye";
import { ButtonSecondaryDark } from "../components/custom/button";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

const About = () => {
  const [currentSelect, setCurrentSelect] = useState<number>(0);

  const onHover = (index: number) => {
    if (currentSelect === index) return;
    setCurrentSelect(index);
  };

  return (
    <section className="bg-white rounded-xl overflow-hidden">
      <div className="max-w-[1512px] mx-auto px-8 py-24 text-background">
        <div className="flex gap-2 items-center text-[14px] font-medium uppercase">
          <Image
            src={"/images/arrow-bl-right-up.svg"}
            width={20}
            height={20}
            priority
            alt="arrow"
          />
          Who we are
        </div>
        <h3 className="max-w-[1300px] pt-6 text-[72px] leading-[96px] font-bold hover:scale-105 duration-200">
          High-tech Bus Solutions Crafted to Streamline Your Operations and Meet
          Your Specific Needs.
        </h3>
        <p className="max-w-[1300px] pt-5 text-[18px]">
          Pioneering in artificial intelligence and Web3 development to
          transform and solve complex business challenges, we focus on
          understanding your product’s market fit and treating your vision as
          our own. With a commitment to quality and timely delivery, we’re here
          to help you succeed.
        </p>
        <div className="grid grid-cols-4 gap-6 pt-[72px]">
          <div className="relative w-full h-[347px]">
            <div className="absolute flex flex-col w-full h-[346px] p-4 top-0 left-0 bg-white">
              <div className="flex-1 max-w-[300px] text-[30px] font-semibold">
                The Foundation of Our Philosophy
              </div>
              <div className="flex">
                <Link href={""}>
                  <ButtonSecondaryDark title="Meet the team" />
                </Link>
              </div>
            </div>
            <div className="w-[90%] h-full mx-auto border-[2px] border-background rounded-3xl" />
          </div>
          {aboutSection?.map((section, index) => {
            return (
              <div
                key={section?.title}
                className={clsx(
                  "relative flex flex-col h-[347px] p-4 group border-background rounded-xl cursor-pointer overflow-hidden",
                  currentSelect === index ? "bg-background border" : ""
                )}
                onMouseEnter={() => onHover(index)}
                onTouchStart={() => onHover(index)}
              >
                <div
                  className={clsx(
                    "absolute w-[124px] h-[124px] -top-[24px] -left-[62px] z-0 rounded-full bg-white blur-xl",
                    currentSelect === index ? "block" : "hidden"
                  )}
                />
                <div className="flex-1 relative">
                  {currentSelect === index ? <EyeActive /> : <EyeInActive />}
                </div>
                <div className="text-background">
                  <div
                    className={clsx(
                      "text-[36px] font-semibold",
                      currentSelect === index && "text-white opacity-[0.86]"
                    )}
                  >
                    {section?.title}
                  </div>
                  <p
                    className={clsx(
                      "font-medium",
                      currentSelect === index && "text-white opacity-[0.86]"
                    )}
                  >
                    {section?.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
