import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Benchmark from "@/components/Benchmark";
import Urgency from "@/components/Urgency";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Partners />
      <Team />
      <Benchmark />
      <Urgency />
      <Footer />
    </div>
  );
};

export default Index;
