"use client";
import "swiper/css";
import "swiper/css/effect-fade";
import HeroBanner from "./components/hero-banner";
import SolutionService from "./components/solution";
import FutureService from "./components/future";
import ServeService from "./components/serve";
import WhyChooseUsService from "./components/why-choose-us";
import ConsultantsService from "./components/consultant";
import DeliverExcellence from "./components/deliver-excellence";
import ClientSaid from "./components/client-said";
import TechStackService from "./components/tech-stack";
import Blogs from "../home/blog";
import Contact from "../home/contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { Suspense, useEffect, useState } from "react";
import { solutionServiceByKey, solutionServiceKey } from "../constants/service";
import { useSearchParams } from "next/navigation";

interface Props {
  currentSolutions: any;
}

const ServiceComponent = ({ currentSolutions }: Props) => {
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

const Services = () => {
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
    <main>
      <Suspense fallback={null}>
        <ServiceComponent currentSolutions={currentSolutions} />
      </Suspense>
    </main>
  );
};

export default Services;
