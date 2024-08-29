import { jobsCareers } from "@/app/constants/career";
import { navbarUrl } from "@/app/constants/home";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const JobsCareers = () => {
  return (
    <section className="py-8 lg:py-24 max-w-[1512px] px-4 lg:px-8 mx-auto overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-7 lg:gap-10 xl:gap-[124px]">
        <div className="hidden lg:block text-[48px] leading-[56px] font-bold text-primary hover:scale-105 duration-200">
          Be the game-changer we&apos;re looking for.
        </div>
        <div className="block lg:hidden text-[26px] leading-[36px] font-semibold text-primary hover:scale-105 duration-200">
          Open Positions
        </div>
        <div>
          {jobsCareers?.map((job, index) => {
            return (
              <Link key={job?.key} href={`${navbarUrl?.careers}/${job?.key}`}>
                <div
                  className={clsx(
                    "flex justify-between lg:justify-start lg:grid grid-cols-3 gap-5 py-7 lg:py-11 border-b border-white border-opacity-[0.16] border-dashed cursor-pointer",
                    index === 0 && "pt-0",
                    index === jobsCareers?.length - 1 && "pb-0 border-none"
                  )}
                >
                  <div className="text-[16px] leading-[28px] font-medium text-white opacity-[0.86]">
                    {job?.title}
                    <div className="flex lg:hidden gap-4">
                      <span className="text-[16px] leading-[28px] font-medium text-white opacity-[0.48]">
                        {job?.location}
                      </span>
                      <span className="text-[16px] leading-[28px] font-medium text-white opacity-[0.48]">
                        {job?.title}
                      </span>
                    </div>
                  </div>
                  <div className="hidden lg:block text-[16px] leading-[28px] font-medium text-white opacity-[0.48]">
                    {job?.location}
                  </div>
                  <div className="flex gap-1 justify-between items-center">
                    <span className="hidden lg:block text-[16px] leading-[28px] font-medium text-white opacity-[0.48]">
                      {job?.title}
                    </span>
                    <Image
                      src={"/images/careers/arrow_right.svg"}
                      className="min-w-[24px]"
                      width={24}
                      height={24}
                      priority
                      alt="arrow"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JobsCareers;
