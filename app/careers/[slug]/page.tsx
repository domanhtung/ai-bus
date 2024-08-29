import { jobsCareers } from "@/app/constants/career";
import HeroCareerDetail from "./components/hero-section";
import CareerContentDetail from "./components/content-detail";
import ServeCareers from "./components/serve";
import ApplyNow from "./components/apply-now";

const CareerDetail = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const jobCareer = jobsCareers?.find((job) => job.key === slug);

  return (
    <main>
      <HeroCareerDetail jobCareer={jobCareer} />
      <CareerContentDetail jobCareer={jobCareer} />
      <ServeCareers />
      <ApplyNow />
    </main>
  );
};

export default CareerDetail;
