import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Founder from "@/components/Founder";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Landing() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Seo />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Founder />
        <Services />
        <Pricing />
        <Gallery />
        <Testimonials />
        <Contact />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
