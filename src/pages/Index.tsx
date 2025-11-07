import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Benchmark from "@/components/Benchmark";
import Urgency from "@/components/Urgency";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <Partners />
        <Team />
        <Benchmark />
        <Urgency />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
