import Banner from "./home/banner";
import Solution from "./home/solution";
import About from "./home/about";
import NumberSection from "./home/number-section";
import TechStacks from "./home/tech-stacks";
import WhyChooseUs from "./home/choose";
import CaseStudy from "./home/case-study";

export default function Home() {
  return (
    <main>
      <Banner />
      <Solution />
      <About />
      <NumberSection />
      <TechStacks />
      <WhyChooseUs />
      <CaseStudy />
    </main>
  );
}
