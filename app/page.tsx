"use client";
import "swiper/css";
import "swiper/css/effect-fade";
import Banner from "./home/banner";
import Solution from "./home/solution";
import About from "./home/about";
import NumberSection from "./home/number-section";
import TechStacks from "./home/tech-stacks";
import WhyChooseUs from "./home/choose";
import CaseStudy from "./home/case-study";
import Partners from "./home/partners";
import Testimonial from "./home/testimonial";
import Blogs from "./home/blog";
import Contact from "./home/contact";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  useEffect(() => {
    if (typeof document !== "undefined") {
      AOS.init();
    }
  }, []);

  return (
    <main>
      <Banner />
      <Solution />
      <About />
      <NumberSection />
      <TechStacks />
      <WhyChooseUs />
      <CaseStudy />
      <Partners />
      <Testimonial />
      <Blogs />
      <Contact />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </main>
  );
}
