import Image from "next/image";

const AboutUsCareers = () => {
  return (
    <section className="py-6 lg:py-24 max-w-[1512px] px-4 lg:px-8 mx-auto overflow-hidden">
      <h2 className="lg:pl-[17%] text-[26px] leading-[36px] lg:text-[48px] lg:leading-[56px] font-bold text-primary hover:scale-105 duration-200">
        For over 10 years
        <span className="text-white opacity-[0.86]">
          , we&apos;ve been developers just like you, creating innovative software
          solutions for companies worldwide.
        </span>
      </h2>
      <Image
        src={"/images/careers/about.jpg"}
        className="w-full h-auto my-11 lg:my-[72px] rounded-xl"
        width={1448}
        height={480}
        priority
        alt="about"
      />
      <p className="max-w-[957px] text-[24px] leading-[32px] lg:text-[36px] lg:leading-[40px] font-semibold text-white opacity-[0.48]">
        Our success is driven by a team of skilled professionals who are
        passionate about creating impactful software. If you&apos;re ready to make a
        difference, we have a place for you.
      </p>
    </section>
  );
};

export default AboutUsCareers;
