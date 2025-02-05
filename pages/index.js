import Analytics from "@/components/uis/Analytics";
import Hero from "@/components/uis/Hero";
import VisualFeatures from "@/components/uis/VisualFeatures";
import Features from "@/components/uis/Features";
import CTA from "@/components/uis/CTA";
import Testimonial from "@/components/uis/Testimonial";
import Pricing from "@/components/uis/Pricing";
import FAQs from "@/components/uis/FAQs";
import Bio from "@/components/uis/Bio";

export default function Home() {
  return (
    <>
      <Hero />
      <Bio/>
      <Analytics />
      <VisualFeatures />
      <Features />
      <CTA />
      <Testimonial />
      <Pricing />
      <FAQs />
    </>
  );
}
