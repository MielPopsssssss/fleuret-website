import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Partners from "@/components/Partners";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Process />
      <Partners />
      <Roadmap />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;
