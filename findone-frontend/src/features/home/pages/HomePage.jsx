import HeroSection from '@features/home/components/HeroSection';
import TrustBar from '@features/home/components/TrustBar';
import HowItWorks from '@features/home/components/HowItWorks';
import CategoriesSection from '@features/home/components/CategoriesSection';
import FeaturesSection from '@features/home/components/FeaturesSection';
import AIFeaturesSection from '@features/home/components/AIFeaturesSection';
import ForWorkersSection from '@features/home/components/ForWorkersSection';
import ForClientsSection from '@features/home/components/ForClientsSection';
import TestimonialsSection from '@features/home/components/TestimonialsSection';
import StatsSection from '@features/home/components/StatsSection';
import CTASection from '@features/home/components/CTASection';

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
