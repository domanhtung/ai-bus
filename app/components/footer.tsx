import Image from "next/image";
import {
  footerAboutList,
  footerServiceList,
  navbarList,
  socialList,
} from "../constants/home";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-white rounded-t-lg">
      <div className="grid gap-6 xl:gap-14 max-w-[1512px] mx-auto px-5 lg:px-8 py-8 xl:pt-14 xl:pb-8">
        <div className="grid lg:flex justify-between items-start">
          <Link href={"/"}>
            <Image
              src={"/images/logo_light.svg"}
              className="w-full max-w-[240px] lg:max-w-full h-auto xl:w-[240px] xl:h-[64px]"
              width={240}
              height={64}
              priority
              alt="logo"
            />
          </Link>
          <div className="grid lg:flex gap-5 mt-5 lg:mt-0 lg:gap-20 xl:gap-[124px]">
            <div>
              <div className="mb-2 xl:mb-4 text-background text-[14px] uppercase font-bold">
                SERVICES
              </div>
              {footerServiceList?.map((navbar) => {
                return (
                  <div
                    key={navbar?.title}
                    className="mb-2 xl:mb-4 text-background text-[14px] font-medium hover:text-primary capitalize"
                  >
                    <Link href={navbar?.path}>{navbar?.title}</Link>
                  </div>
                );
              })}
            </div>
            <div>
              <div className="mb-2 xl:mb-4 text-background text-[14px] font-bold uppercase">
                about us
              </div>
              {footerAboutList?.map((navbar) => {
                return (
                  <div
                    key={navbar?.title}
                    className="mb-2 xl:mb-4 text-background text-[14px] font-medium hover:text-primary capitalize"
                  >
                    <Link href={navbar?.path}>{navbar?.title}</Link>
                  </div>
                );
              })}
            </div>
            <div>
              <div className="mb-2 xl:mb-4 text-background text-[14px] font-bold uppercase">
                CONTACTS
              </div>
              {socialList?.map((social, index) => {
                return (
                  <Link key={index} href={social?.link} target={"_blank"}>
                    <div className="flex mb-2 xl:mb-4 items-center gap-4 text-background text-[14px] font-medium hover:text-primary capitalize">
                      <Image
                        src={social?.icon}
                        className="min-w-[20px]"
                        width={20}
                        height={20}
                        priority
                        alt="social"
                      />
                      {social?.name}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="grid lg:flex gap-5 justify-between items-end">
          <div className="max-w-[440px] text-[14px] lg:text-[16px] xl:text-[18px] font-medium text-background">
            Expertly navigating technical complexities of blockchain and AI,
            delivering solutions that achieve product-market fit so businesses
            can focus on growth and success.
          </div>
          <div className="text-[10px] font-medium text-background">
            ⁠©⁠ 2024 AIbus. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
