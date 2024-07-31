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
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactModal from "./components/modal/contact-modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      AOS.init();
    }
  }, []);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

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
      <Contact openModal={openModal} />
      <ContactModal isOpen={showModal} onClose={closeModal} />
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
