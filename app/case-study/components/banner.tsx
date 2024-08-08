import Image from "next/image";

const BannerHeroCaseStudy = () => {
  return (
    <section className="pb-8 lg:pb-24 pt-8 max-w-[1512px] px-4 lg:px-8 mx-auto overflow-hidden">
      <Image
        src={"/images/case_study/hero_img.svg"}
        className="w-full h-auto rounded-xl"
        width={1448}
        height={360}
        priority
        alt="hero banner"
      />
      <div className="pt-10 lg:pt-[72px]">
        <div className="flex gap-2 items-center text-[14px] font-medium uppercase">
          <Image
            src={"/images/arrow-right-up.svg"}
            className="w-[20px] h-[20px]"
            width={20}
            height={20}
            priority
            alt="arrow"
          />
          <span className="text-white opacity-[0.48]">
            research and development center
          </span>
        </div>
        <div className="grid lg:grid-cols-2 pt-4 lg:pt-6 items-end">
          <div>
            <h1 className="text-[40px] leading-[48px] lg:text-[96px] lg:leading-[96px] font-[800] opacity-[0.86] hover:scale-105 duration-200">
              MateriView
            </h1>
            <p className="max-w-[662px] pt-4 lg:pt-5 text-[14px] lg:text-[16px] opacity-[0.48]">
              MateriView uses advanced AI to revolutionize interior spaces by
              precisely detecting surfaces like floors, walls, and ceilings, and
              effortlessly replacing them with new patterns.
            </p>
          </div>
          <div className="lg:flex mt-10 lg:mt-0 justify-end">
            <div className="w-full max-w-[662px] grid lg:grid-cols-4 gap-4 justify-end">
              <div>
                <div className="text-[12px] font-medium opacity-[0.48]">
                  Industry
                </div>
                <div className="pt-2 font-medium opacity-[0.86]">
                  AI Architecture
                </div>
              </div>
              <div className="lg:col-span-3">
                <div className="text-[12px] font-medium opacity-[0.48]">
                  Services
                </div>
                <div className="pt-2 font-medium opacity-[0.86]">
                  Conceptualization, Design,Development, and Deployment
                </div>
              </div>
              <div>
                <div className="text-[12px] font-medium opacity-[0.48]">
                  Business Type
                </div>
                <div className="pt-2 font-medium opacity-[0.86]">Startup</div>
              </div>
              <div className="lg:col-span-3">
                <div className="text-[12px] font-medium opacity-[0.48]">
                  Build your idea
                </div>
                <div className="pt-2 font-medium text-primary">
                  Consult our experts
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerHeroCaseStudy;
