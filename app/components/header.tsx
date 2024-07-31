"use client";
import Image from "next/image";
import Link from "next/link";
import { navbarList } from "../constants/home";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { ButtonPrimary } from "./custom/button";

interface Props {
  pathname: string;
  navbar: {
    title: string;
    path: string;
  };
}

const NavName = ({ pathname, navbar }: Props) => {
  const isActive = useMemo(() => {
    return (
      (pathname !== "/" &&
        navbar?.path !== "/" &&
        pathname?.includes(navbar?.path)) ||
      (pathname === "/" && navbar?.path === "/")
    );
  }, [pathname, navbar?.path]);

  return (
    <Link href={navbar?.path}>
      <div className="px-4 py-3">
        <div
          className={clsx(
            "relative text-[14px] font-medium uppercase cursor-pointer hover:text-primary duration-200",
            isActive ? "text-primary" : "text-white"
          )}
        >
          {navbar?.title}
          <div
            className={clsx(
              "absolute flex left-0 -bottom-1 justify-between items-center duration-200",
              isActive ? "w-full" : "w-0"
            )}
          >
            <div
              className={clsx("w-[90%] h-[1px]", isActive && "bg-primary")}
            />
            <div className={clsx("w-[5%] h-[1px]", isActive && "bg-primary")} />
          </div>
        </div>
      </div>
    </Link>
  );
};

const Header = () => {
  const pathname = usePathname();
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  return (
    <div className="h-[76px] overflow-hidden">
      <div className="fixed top-0 left-0 w-full h-[76px] border-b border-white bg-background border-opacity-20 z-50">
        <div className="flex h-full max-w-[1512px] mx-auto px-5 xl:px-8 items-center justify-between">
          <Image
            src={"/images/logo.svg"}
            className="w-[120px] h-[40px] lg:w-[132px] lg:h-[44px]"
            width={132}
            height={44}
            priority
            alt="logo"
          />
          <div className="hidden lg:flex gap-6 items-center">
            <div className="flex items-center">
              {navbarList?.map((navbar) => {
                return (
                  <NavName
                    key={navbar?.title}
                    pathname={pathname}
                    navbar={navbar}
                  />
                );
              })}
            </div>
            <ButtonPrimary title="GET IN TOUCH" />
          </div>
          <div
            className="grid lg:hidden gap-1 p-2 border border-primary rounded-md cursor-pointer"
            onClick={() => setShowNavbar(!showNavbar)}
          >
            <div className="w-[20px] h-[3px] bg-primary rounded-sm" />
            <div className="w-[20px] h-[3px] bg-primary rounded-sm" />
            <div className="w-[20px] h-[3px] bg-primary rounded-sm" />
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "fixed block lg:hidden w-full h-full top-0 left-0 bg-background z-40 duration-200",
          showNavbar ? "left-0" : "left-full"
        )}
      >
        <div className="grid pt-20 gap-1 px-5">
          {navbarList?.map((navbar) => {
            return (
              <NavName
                key={navbar?.title}
                pathname={pathname}
                navbar={navbar}
              />
            );
          })}
          <ButtonPrimary title="GET IN TOUCH" />
        </div>
      </div>
    </div>
  );
};

export default Header;
