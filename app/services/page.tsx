import { Suspense } from "react";
import ServicesMain from "./components/main";

const Services = () => {
  return (
    <main>
      <Suspense>
        <ServicesMain />
      </Suspense>
    </main>
  );
};

export default Services;
