"use client";
import { solutionServiceList } from "@/app/constants/service";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

const SolutionService = () => {
  const [currentId, setCurrentId] = useState<string>(
    solutionServiceList?.[0]?.key
  );

  useEffect(() => {
    if (typeof window !== "undefined" && !!window?.IntersectionObserver) {
      let observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setCurrentId(entry?.target?.getAttribute("id") || "");
            }
          });
        },
        { rootMargin: "-50% 0px -50% 0px" }
      );
      const listSolution = document.querySelectorAll(".solution");
      listSolution.forEach((solution) => {
        observer.observe(solution);
      });
      return () =>
        listSolution.forEach((solution) => {
          observer.unobserve(solution);
        });
    }
  }, []);

  return (
    <section className="py-12 lg:py-24 max-w-[1512px] px-4 lg:px-8 mx-auto">
      <div className="grid lg:grid-cols-2">
        <div className="hidden lg:block">
          <div className="solution-img grid gap-3">
            {solutionServiceList?.map((solution) => {
              return (
                <div
                  key={solution?.key}
                  className={clsx(
                    "flex gap-3 items-center duration-150 capitalize",
                    currentId === solution?.key
                      ? "text-[48px] leading-[56px] text-primary font-bold"
                      : "text-[30px] leading-[44px] text-white opacity-[0.86] font-semibold"
                  )}
                >
                  {solution?.keyName}
                  <Image
                    src={"/images/arrow-right.svg"}
                    className={clsx(
                      "w-[36px] h-[36px] duration-150",
                      currentId === solution?.key ? "scale-100" : "scale-0"
                    )}
                    width={36}
                    height={36}
                    priority
                    alt="arrow"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid gap-16 lg:gap-[124px] overflow-hidden">
          {solutionServiceList?.map((solution) => {
            return (
              <div key={solution?.key} id={solution?.key} className="solution">
                <div data-aos="fade-left">
                  <div className="flex gap-2 items-center text-[12px] xl:text-[14px] font-medium text-primary uppercase">
                    <Image
                      src={"/images/arrow-pri-right-up.svg"}
                      className="w-[16px] h-[16px] xl:w-[20px] xl:h-[20px]"
                      width={20}
                      height={20}
                      priority
                      alt="arrow"
                    />
                    {solution?.subTitle}
                  </div>
                  <div className="pt-6 text-[32px] lg:text-[48px] font-bold opacity-[0.86] text-white hover:pl-5 hover:scale-105 duration-200">
                    {solution?.title}
                  </div>
                </div>
                <p
                  data-aos="fade-left"
                  className="pt-5 text-white opacity-[0.48]"
                >
                  {solution?.description}
                </p>
                <div className="pt-11">
                  {solution?.list?.map((value, index) => {
                    return (
                      <div key={index} data-aos="fade-left">
                        <div className="font-medium text-white opacity-[0.86]">
                          {value?.title}
                        </div>
                        <p className="pt-2 opacity-[0.48]">{value?.content}</p>
                        {index < solution?.list?.length - 1 && (
                          <div className="h-[1px] my-5 bg-white opacity-[0.16]" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionService;
