"use client";
import "swiper/css";
import "swiper/css/effect-fade";
import BannerHeroCaseStudy from "./components/banner";
import ProjectChallengeCaseStudy from "./components/project-challenge";
import ScopeCaseStudy from "./components/scope";
import MoreCaseStudy from "./components/more-case-study";
import Blogs from "../home/blog";
import Contact from "../home/contact";
import OurProcessCaseStudy from "./components/our-process";
import WhatWeDidCaseStudy from "./components/what-we-did";
import TheResultCaseStudy from "./components/results";
import MasteriviewSaidCaseStudy from "./components/masteriview-said";
import KickstartCaseStudy from "./components/kickstart";

const CaseStudy = () => {
  return (
    <main>
      <BannerHeroCaseStudy />
      <ScopeCaseStudy />
      <ProjectChallengeCaseStudy />
      <OurProcessCaseStudy />
      <WhatWeDidCaseStudy />
      <TheResultCaseStudy />
      <MasteriviewSaidCaseStudy />
      <KickstartCaseStudy />
      <MoreCaseStudy />
      <Blogs />
      <Contact />
    </main>
  );
};

export default CaseStudy;
