import {
  HeroSection,
  TrustBar,
  HowItWorks,
  CategoriesSection,
  FeaturesSection,
  AIFeaturesSection,
  ForWorkersSection,
  ForClientsSection,
  TestimonialsSection,
  StatsSection,
  CTASection,
} from '@components/sections/landing';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <HowItWorks />
      <CategoriesSection />
      <FeaturesSection />
      <AIFeaturesSection />
      <ForWorkersSection />
      <ForClientsSection />
      <TestimonialsSection />
      <StatsSection />
      <CTASection />
    </>
  );
}
