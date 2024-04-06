import FAQ from "@/components/sections/faq";
import Features from "@/components/sections/feature";
import HeroSection from "@/components/sections/hero";
// import Steps from "@/components/sections/steps/steps";

// export const runtime = "edge";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      {/*<Steps />*/}
      <FAQ />
    </>
  );
}
