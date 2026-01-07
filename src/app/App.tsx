import { useEffect } from "react";
import { RootLayout } from "./layout/RootLayout";
import { AppProviders } from "./providers/AppProviders";
import { site } from "../config/site";
import { applySeo } from "../shared/seo";
import { Navbar } from "../components/Navbar";
import { FAQSection } from "../sections/FAQ";
import { FeaturesSection } from "../sections/Features";
import { FooterSection } from "../sections/Footer";
import { HeroSection } from "../sections/Hero";
import { PatternsSection } from "../sections/Patterns";
import { SocialProofSection } from "../sections/SocialProof";
import { HowItWorksSection } from "../sections/HowItWorks";
import { TechSection } from "../sections/Tech";
import { TestimonialsSection } from "../sections/Testimonials";
import { CTASection } from "../sections/CTA";

export default function App() {
  useEffect(() => {
    applySeo(
      site.seo ?? {
        title: site.siteName,
        description: site.description,
        ogImagePath: "/og.svg",
      },
    );
  }, []);

  return (
    <AppProviders>
      <RootLayout>
        <header className="sticky top-0 z-50 border-b border-slate-950/10 bg-white/75 backdrop-blur dark:border-white/10 dark:bg-slate-950/60">
          <Navbar />
        </header>
        <main id="content">
          <HeroSection />
          <SocialProofSection />
          <FeaturesSection />
          <PatternsSection />
          <HowItWorksSection />
          <TechSection />
          <TestimonialsSection />
          <FAQSection />
          <CTASection />
        </main>
        <FooterSection />
      </RootLayout>
    </AppProviders>
  );
}
