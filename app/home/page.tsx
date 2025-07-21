import { HeroSection } from "./components/hero/index";
import { AboutSection } from "./components/about/index";
import VisionSection from './components/vision';
import WebsiteFooter from "./components/website-footer";
import CallToAction from "./components/call-to-action";
import WhyChooseUs from "./components/why-choose-us";
import OurServices from "./components/our-services";

export default function HomePage() {
  return (
    <main className="w-full min-h-screen">
      <HeroSection />
      <AboutSection />
      <WhyChooseUs />
      <OurServices />
      <VisionSection />
      <CallToAction />
      <WebsiteFooter />
    </main>
  );
}