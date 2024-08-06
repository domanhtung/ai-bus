"use client";
import Image from "next/image";
import { aboutSection } from "../constants/home";
import { EyeActive, EyeInActive } from "../components/svg/eye";
import { ButtonSecondaryDark } from "../components/custom/button";
import Link from "next/link";
import { useContext, useState } from "react";
import clsx from "clsx";
import { ContactContext } from "../context/contact-context";

const About = () => {
  const { showContact } = useContext(ContactContext);
  const [currentSelect, setCurrentSelect] = useState<number>(0);

  const onHover = (index: number) => {
    if (currentSelect === index) return;
    setCurrentSelect(index);
  };

  return (
    <section className="bg-white rounded-xl overflow-hidden">
      <div className="max-w-[1512px] mx-auto lg:px-8 py-12 lg:py-24 text-background">
        <div className="px-4 lg:px-0">
          <div className="flex gap-2 items-center text-[12px] xl:text-[14px] font-medium uppercase">
            <Image
              src={"/images/arrow-bl-right-up.svg"}
              className="w-[16px] h-[16px] xl:w-[20px] xl:h-[20px]"
              width={20}
              height={20}
              priority
              alt="arrow"
            />
            Who we are
          </div>
          <h3 className="max-w-[1300px] pt-3 xl:pt-6 text-[30px] lg:text-[50px] xl:text-[72px] leading-[34px] lg:leading-[62px] xl:leading-[96px] font-bold hover:scale-105 duration-200">
            High-tech Bus Solutions Crafted to Streamline Your Operations and
            Meet Your Specific Needs.
          </h3>
          <p className="max-w-[1300px] pt-5 xl:text-[18px]">
            Pioneering in artificial intelligence and Web3 development to
            transform and solve complex business challenges, we focus on
            understanding your product’s market fit and treating your vision as
            our own. With a commitment to quality and timely delivery, we’re
            here to help you succeed.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 gap-3 xl:gap-6 pt-8 lg:pt-[72px]">
          <div>
            <div className="relative w-full lg:h-[347px]">
              <div className="lg:absolute flex flex-col w-full lg:h-[346px] p-4 top-0 left-0 bg-white">
                <div className="flex-1 lg:max-w-[300px] text-[20px] xl:text-[30px] font-semibold">
                  The Foundation of Our Philosophy
                </div>
                <div className="flex mt-4 lg:mt-0">
                  <Link href={""} className="w-full lg:w-fit">
                    <ButtonSecondaryDark
                      title="Meet the team"
                      className="w-full lg:w-fit"
                      onClick={() => showContact()}
                    />
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block w-[90%] h-full mx-auto border-[2px] border-background rounded-3xl" />
            </div>
          </div>
          <div className="lg:col-span-3 overflow-auto lg:overflow-hidden no-scroll">
            <div className="grid grid-cols-3 w-[1024px] lg:w-full gap-3 px-4 lg:px-0">
              {aboutSection?.map((section, index) => {
                return (
                  <div
                    key={section?.title}
                    className={clsx(
                      "relative flex flex-col min-w-[320px] lg:min-w-0 h-[216px] lg:h-[347px] p-4 group border border-background rounded-xl cursor-pointer overflow-hidden",
                      currentSelect === index ? "bg-background" : ""
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
                      {currentSelect === index ? (
                        <EyeActive />
                      ) : (
                        <EyeInActive />
                      )}
                    </div>
                    <div className="text-background">
                      <div
                        className={clsx(
                          "text-[24px] xl:text-[36px] font-semibold",
                          currentSelect === index && "text-white opacity-[0.86]"
                        )}
                      >
                        {section?.title}
                      </div>
                      <p
                        className={clsx(
                          "font-medium text-[16px]",
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
        </div>
      </div>
    </section>
  );
};

export default About;
