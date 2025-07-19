import { HeroSection } from "./components/hero/index";
import { AboutSection } from "./components/about/index";
import VisionSection from './components/vision';

export default function HomePage() {
  return (
    <main className="w-full min-h-screen">
      <HeroSection />
      <AboutSection />
      <VisionSection />
    </main>
  );
}