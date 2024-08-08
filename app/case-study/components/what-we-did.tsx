const WhatWeDidCaseStudy = () => {
  return (
    <section className="max-w-[1512px] mx-auto px-4 lg:px-8 py-8 lg:py-24 overflow-hidden">
      <div className="grid gap-7 lg:gap-0 lg:grid-cols-2">
        <h2 className="text-[26px] lg:text-[48px] font-bold leading-[36px] lg:leading-[56px] opacity-[0.86]">
          <div data-aos="fade-right" className="hover:scale-105 duration-200">
            What we did
          </div>
        </h2>
        <div className="flex justify-end">
          <div className="max-w-[662px] text-[14px] lg:text-[16px]">
            <p data-aos="fade-left">
              <span className="opacity-[0.48]">
                MateriView creates amazing interior makeovers by fusing strong
                image processing with cutting-edge AI. Our all-encompassing
                strategy consists of:
              </span>
            </p>
            <p data-aos="fade-left" className="pt-11">
              <span className="opacity-[0.48]">
                1. Surface Detection: Identifying surfaces with the most recent
                and precise AI algorithms.
                <br />
                2. Pattern Generation: AI creates intricately aligned and angled
                new surface patterns.
                <br />
                3. Image Integration: The process of fusing the freshly created
                surface with the original image of the room.
                <br />
                4. Post-Processing: adjusting the final picture to achieve
                harmony and realism, resulting in a visually pleasing and
                unified outcome.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDidCaseStudy;
