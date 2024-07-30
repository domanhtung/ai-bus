import Image from "next/image";
import { solutions } from "../constants/home";
import { ButtonSecondary } from "../components/custom/button";
import Link from "next/link";
import clsx from "clsx";

const Solution = () => {
  return (
    <section className="max-w-[1512px] mx-auto px-8 py-24">
      <div className="flex py-24">
        <div className="w-[45%] pr-14">
          <Image
            src={"/images/home/solution_image.png"}
            className="solution-img w-full h-auto border border-white rounded-xl bg-white overflow-hidden"
            width={560}
            height={600}
            priority
            alt="solution"
          />
        </div>
        <div className="grid w-[55%] gap-[124px]">
          {solutions?.map((solution) => {
            return (
              <div key={solution?.title}>
                <div className="flex gap-2 items-center text-[14px] font-medium text-primary uppercase">
                  <Image
                    src={"/images/arrow-pri-right-up.svg"}
                    width={20}
                    height={20}
                    priority
                    alt="arrow"
                  />
                  {solution?.subHead}
                </div>
                <h3 className="pt-6 text-[48px] font-bold leading-[56px]">
                  {solution?.title}
                </h3>
                <p className="pt-5 text-white opacity-[0.48] leading-7">
                  {solution?.content}
                </p>
                <div className="py-6">
                  {solution?.list?.map((value, index) => {
                    return (
                      <div
                        key={value}
                        className={clsx(
                          "py-5 font-semibold",
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
                  <ButtonSecondary title="Explore Services" />
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
