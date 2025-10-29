import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Benchmark from "@/components/Benchmark";
import Urgency from "@/components/Urgency";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-slate-50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.1),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(168,85,247,0.1),transparent_50%)] pointer-events-none" />
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
