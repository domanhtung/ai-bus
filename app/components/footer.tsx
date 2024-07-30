import Image from "next/image";
import { navbarList, socialList } from "../constants/home";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-white rounded-t-lg">
      <div className="grid gap-14 max-w-[1512px] mx-auto px-8 pt-14 pb-8">
        <div className="flex justify-between items-start">
          <Image
            src={"/images/logo_light.svg"}
            width={240}
            height={64}
            priority
            alt="logo"
          />
          <div className="flex gap-[124px]">
            <div>
              {navbarList?.map((navbar) => {
                return (
                  <div
                    key={navbar?.title}
                    className="mb-4 text-background text-[14px] font-medium uppercase hover:text-primary"
                  >
                    <Link href={navbar?.path}>{navbar?.title}</Link>
                  </div>
                );
              })}
            </div>
            <div>
              <div className="mb-4 text-background text-[14px] font-medium uppercase">
                CONTACTS
              </div>
              {socialList?.map((social) => {
                return (
                  <Link href={social?.link}>
                    <div className="flex mb-4 items-center gap-4 text-background text-[14px] font-medium uppercase hover:text-primary">
                      <Image
                        src={social?.icon}
                        className="min-w-[20px]"
                        width={20}
                        height={20}
                        priority
                        alt="social"
                      />
                      {social?.link}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-end">
          <div className="max-w-[440px] text-[18px] font-medium text-background">
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
