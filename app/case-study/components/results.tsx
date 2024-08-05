import { resultsCaseStudy } from "@/app/constants/case-study";

const TheResultCaseStudy = () => {
  return (
    <section className="max-w-[1512px] mx-auto px-8 py-24">
      <div className="grid grid-cols-2">
        <h2 className="text-[48px] font-bold leading-[56px] text-primary">
          <div className="hover:scale-105 duration-200">The Results</div>
        </h2>
        <div className="flex justify-end">
          <div className="max-w-[662px]">
            <p className="opacity-[0.48]">
              The project&apos;s amazing success may be attributed to its lifelike
              visualizations, which increased user engagement by 400% and
              conversion rates by 500%. We exceeded quality standards and
              budgetary limits by delivering the MVP and proof of concept in
              just eight weeks. Our effort enabled a successful VC demo, helping
              the client get critical finance, and the cost-effective solution
              was finished 20% under budget. For its flawless product
              integration, the project also received a 95% user satisfaction
              rating.
            </p>
            <div className="grid grid-cols-2">
              {resultsCaseStudy?.map((value, index) => {
                return (
                  <div
                    key={index}
                    className="mt-11 pt-11 border-t border-white border-opacity-[0.16] border-dashed"
                  >
                    <div className="text-[36px] font-semibold leading-[40px] text-primary">
                      {value?.number}
                    </div>
                    <div className="pt-2 opacity-[0.48]">{value?.title}</div>
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

export default TheResultCaseStudy;
