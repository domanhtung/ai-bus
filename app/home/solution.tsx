/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Image from "next/image";
import { solutions } from "../constants/home";
import { ButtonSecondary } from "../components/custom/button";
import Link from "next/link";
import clsx from "clsx";
import Lottie from "react-lottie";
import loadingJson from "../../public/AIbus-services.json";
import { useEffect, useRef } from "react";
import useMediaQuery from "../hooks/media-query";

const LottiesFileAnimDesk = ({ sectionRef }: any) => {
  const animRef = useRef<any>();

  useEffect(() => {
    if (!animRef?.current || !sectionRef?.current) return;
    var animDuration = 5000;

    function animatebodymovin(duration: number) {
      const startScroll = sectionRef?.current?.offsetTop;
      const endScroll =
        sectionRef?.current?.offsetHeight + sectionRef?.current?.offsetTop;
      const maxFrames = animRef?.current?.anim.totalFrames;
      const frame =
        ((window.scrollY - sectionRef?.current?.offsetTop) * maxFrames) /
        (endScroll - startScroll);

      animRef?.current?.anim.goToAndStop(frame, true);
    }

    const onScroll = () => {
      if (window.scrollY >= sectionRef?.current?.offsetTop)
        animatebodymovin(animDuration);
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      animRef?.current?.anim?.destroy();
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: loadingJson,
  };

  return <Lottie ref={animRef} options={defaultOptions} />;
};

const LottiesFileAnimMobile = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingJson,
  };

  return <Lottie options={defaultOptions} />;
};

const Solution = () => {
  const sectionRef = useRef<any>();
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <section
      ref={sectionRef}
      className="max-w-[1512px] mx-auto px-5 lg:px-8 py-12 lg:py-24 overflow-hidden lg:overflow-visible"
    >
      <div className="grid lg:flex gap-5 lg:gap-0 xl:py-24">
        <div className="lg:w-[45%] lg:pr-14">
          <div className="solution-img w-full max-w-[265px] lg:max-w-full h-auto overflow-hidden">
            {isDesktop ? (
              <LottiesFileAnimDesk sectionRef={sectionRef} />
            ) : (
              <LottiesFileAnimMobile />
            )}
          </div>
        </div>
        <div className="grid lg:w-[55%] gap-8 lg:gap-[124px] lg:overflow-hidden">
          {solutions?.map((solution, index) => {
            return (
              <div key={index}>
                <div data-aos="fade-left">
                  <div className="flex gap-2 items-center text-[14px] font-medium text-primary uppercase">
                    <Image
                      src={"/images/arrow-pri-right-up.svg"}
                      className="w-[20px] h-[20px]"
                      width={20}
                      height={20}
                      priority
                      alt="arrow"
                    />
                    {solution?.subHead}
                  </div>
                  <h3 className="pt-3 xl:pt-6 text-[26px] lg:text-[32px] xl:text-[48px] font-bold leading-[40px] xl:leading-[56px] lg:hover:pl-5 hover:scale-105 duration-200">
                    {solution?.title}
                  </h3>
                </div>
                <p
                  data-aos="fade-left"
                  className="pt-3 xl:pt-5 text-[14px] lg:text-[16px] leading-[20px] text-white lg:leading-7"
                >
                  <span className="opacity-[0.48]">{solution?.content}</span>
                </p>
                <div className="py-6">
                  {solution?.list?.map((value, index) => {
                    return (
                      <div
                        key={value}
                        data-aos="fade-left"
                        className={clsx(
                          "py-3 lg:py-5 font-semibold text-[14px] lg:text-[16px]",
                          index !== solution?.list?.length - 1 &&
                            "border-b border-white border-opacity-[0.16]"
                        )}
                      >
                        {value}
                      </div>
                    );
                  })}
                </div>
                <Link href={solution?.link || ""}>
                  <ButtonSecondary
                    title="Explore Services"
                    className="w-full lg:w-fit"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solution;
