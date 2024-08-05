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
import { ToastContainer } from "react-toastify";

const Services = () => {
  return (
    <main>
      <HeroBanner />
      <SolutionService />
      <ServeService />
      <FutureService />
      <WhyChooseUsService />
      <ConsultantsService />
      <DeliverExcellence />
      <ClientSaid />
      <TechStackService />
      <Blogs />
      <Contact />
    </main>
  );
};

export default Services;
