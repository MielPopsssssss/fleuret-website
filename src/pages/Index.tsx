import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Benchmark from "@/components/Benchmark";
import Urgency from "@/components/Urgency";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-50/30 via-40% to-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.08),transparent_60%),radial-gradient(ellipse_at_bottom_left,rgba(168,85,247,0.08),transparent_60%)] pointer-events-none" />
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
