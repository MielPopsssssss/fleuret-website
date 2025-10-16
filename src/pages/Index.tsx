import Hero from "@/components/Hero";
import FeaturesPreview from "@/components/FeaturesPreview";
import Partners from "@/components/Partners";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <FeaturesPreview />
      <Roadmap />
      <Partners />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;
