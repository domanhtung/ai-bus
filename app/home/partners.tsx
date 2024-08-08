import Image from "next/image";
import { partnerList } from "../constants/home";

const Partners = () => {
  return (
    <div className="mx-auto py-6">
      <div className="overflow-hidden">
        <div className="animation-partner flex gap-6 items-center">
          {[...partnerList, ...partnerList]?.map((partner, index) => {
            return (
              <div
                key={index}
                className="relative w-[303px] min-w-[303px] h-[76px] p-3 xl:p-4 group bg-background border border-white border-opacity-10 rounded-xl overflow-hidden"
              >
                <div className="absolute hidden group-hover:block w-[32px] h-[32px] bottom-0 left-0 rounded-full bg-primary blur-xl" />
                <Image
                  src={partner}
                  className="relative w-full h-full object-cover"
                  width={271}
                  height={44}
                  priority
                  alt="partner"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Partners;
