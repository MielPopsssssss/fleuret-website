import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Partners from "@/components/Partners";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Partners />
      <Team />
      <Process />
      <Footer />
    </div>
  );
};

export default Index;
