import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Benchmark from "@/components/Benchmark";
import ComparisonTable from "@/components/ComparisonTable";
import Urgency from "@/components/Urgency";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Partners />
        <Team />
        <Benchmark />
        <ComparisonTable />
        <Urgency />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
