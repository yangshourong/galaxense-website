import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { NewsPreviewSection } from "@/components/sections/news-preview";
import { CTASection } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <NewsPreviewSection />
      <CTASection />
    </>
  );
}
