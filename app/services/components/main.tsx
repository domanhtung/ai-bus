"use client";
import "swiper/css";
import "swiper/css/effect-fade";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { solutionServiceByKey, solutionServiceKey } from "@/app/constants/service";
import HeroBanner from "./hero-banner";
import SolutionService from "./solution";
import ServeService from "./serve";
import FutureService from "./future";
import WhyChooseUsService from "./why-choose-us";
import ConsultantsService from "./consultant";
import DeliverExcellence from "./deliver-excellence";
import ClientSaid from "./client-said";
import TechStackService from "./tech-stack";
import Blogs from "@/app/home/blog";
import Contact from "@/app/home/contact";

const ServicesMain = () => {
  const searchParams = useSearchParams();
  const [currentSolutions, setCurrentSolutions] = useState(
    solutionServiceByKey?.[solutionServiceKey.ai_solution]
  );

  const searchId = searchParams.get("service");

  useEffect(() => {
    if (typeof document !== "undefined") {
      AOS.init();
    }
  }, []);

  useEffect(() => {
    const currentResult =
      solutionServiceByKey?.[searchId || solutionServiceKey.ai_solution];
    setCurrentSolutions(currentResult);
  }, [searchId]);

  return (
    <div>
      <HeroBanner
        title={currentSolutions?.title}
        subTitle={currentSolutions?.subTitle}
      />
      <SolutionService solutionList={currentSolutions?.contents} />
      <ServeService />
      <FutureService />
      <WhyChooseUsService />
      <ConsultantsService />
      <DeliverExcellence />
      <ClientSaid />
      <TechStackService />
      <Blogs />
      <Contact />
    </div>
  );
};

export default ServicesMain;
