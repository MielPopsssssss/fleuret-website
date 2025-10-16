import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import FeaturesPreview from "@/components/FeaturesPreview";
import Partners from "@/components/Partners";
import Process from "@/components/Process";
import Testimonial from "@/components/Testimonial";
import Benchmark from "@/components/Benchmark";
import Roadmap from "@/components/Roadmap";
import Urgency from "@/components/Urgency";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Partners />
      <Problem />
      <FeaturesPreview />
      <Process />
      <Testimonial />
      <Benchmark />
      <Roadmap />
      <Urgency />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;
