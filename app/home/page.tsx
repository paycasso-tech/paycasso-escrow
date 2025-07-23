"use client"
import { HeroSection } from "./components/hero/index";
import { AboutSection } from "./components/about/index";
import VisionSection from './components/vision';
import WebsiteFooter from "./components/website-footer";
import CallToAction from "./components/call-to-action";
import WhyChooseUs from "./components/why-choose-us";
import OurServices from "./components/our-services";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";

export default function HomePage() {
  return (
    <>
    <Navbar/>
    <main className="w-full min-h-screen relative">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 ">
        <video
          className="w-full h-auto object-cover opacity-70"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onError={(e) => console.error('Video loading error:', e)}
        >
          <source src="/bgVideo.mp4" type="video/mp4" />
          <source src="/bgVideo.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <WhyChooseUs />
        <OurServices />
        <VisionSection />
        <CallToAction />
        <WebsiteFooter />
      </div>
    </main>
    </>
  );
}