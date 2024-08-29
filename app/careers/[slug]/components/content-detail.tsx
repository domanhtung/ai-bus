import { CareerDetailType } from "@/app/constants/type";

interface Props {
  jobCareer: CareerDetailType | undefined;
}

const listSection = [
  {
    title: "Project - your ultimate goal",
    titleMobile: "Description",
    key: "goalDes",
  },
  {
    title: "Expectations - the experience you need",
    titleMobile: "Requirements",
    key: "experience",
  },
  {
    title: "Benefit",
    titleMobile: "Benefit",
    key: "benefit",
  },
];

const CareerContentDetail = ({ jobCareer }: Props) => {
  return (
    <>
      {listSection?.map((section) => {
        return (
          <section
            key={section?.key}
            className="py-8 lg:py-24 max-w-[1512px] px-4 lg:px-8 mx-auto overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-7 lg:gap-10 xl:gap-[124px]">
              <div className="hidden lg:block text-[48px] leading-[56px] font-bold text-white opacity-[0.86] hover:scale-105 duration-200">
                {section?.title}
              </div>
              <div className="block lg:hidden text-[26px] leading-[36px] font-semibold text-white opacity-[0.86] hover:scale-105 duration-200">
                {section?.titleMobile}
              </div>
              <div className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[28px] text-white opacity-[0.48]">
                {(jobCareer as any)?.[section?.key]}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default CareerContentDetail;
