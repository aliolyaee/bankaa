import { AiSolutionFinder } from "@/components/ai-solution-finder";
import { CoreServicesSection } from "@/components/sections/core-services-section";
import { HeroSection } from "@/components/sections/hero-section";
import { IndustryFocusSection } from "@/components/sections/industry-focus-section";
import { NationalProjectsSection } from "@/components/sections/national-projects-section";
import { PartnersSection } from "@/components/sections/partners-section";
import { ProblemSolutionSection } from "@/components/sections/problem-solution-section";
import { StatsSection } from "@/components/sections/stats-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ThreePillarsSection } from "@/components/sections/three-pillars-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <ProblemSolutionSection />
      <CoreServicesSection />
      <IndustryFocusSection />
      <StatsSection />
      <ThreePillarsSection />
      <AiSolutionFinder />
      <NationalProjectsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
    </>
  );
}
