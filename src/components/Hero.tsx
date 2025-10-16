import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Lock } from "lucide-react";
import heroCyber from "@/assets/hero-cyber.jpg";
import { ContactDialog } from "@/components/ContactDialog";

const Hero = () => {
  const [contactDialogOpen, setContactDialogOpen] = useState(false);

  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: `url(${heroCyber})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
        <div className="absolute inset-0 bg-background/90" />
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(to_right,hsl(var(--primary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-in fade-in duration-1000">
          

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="block mb-2">Pentesting Automatisé</span>
            <span className="text-gradient glow-effect">Piloté par IA</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            De l'IP au rapport final sans intervention humaine. 
            <span className="text-primary font-semibold"> Audit continu</span>, 
            <span className="text-primary font-semibold"> conformité NIS2 & DORA</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="text-lg group relative overflow-hidden"
              onClick={() => setContactDialogOpen(true)}
            >
              <span className="relative z-10">Demander une démo</span>
              <Zap className="ml-2 w-5 h-5 relative z-10 transition-transform group-hover:rotate-12" />
              <div className="absolute inset-0 bg-primary-glow opacity-0 group-hover:opacity-20 transition-opacity" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg border-primary/30 hover:border-primary">
              En savoir plus
              <Lock className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <ContactDialog open={contactDialogOpen} onOpenChange={setContactDialogOpen} />

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            {[{
            value: "82%",
            label: "XBOW Benchmark"
          }, {
            value: "100%",
            label: "Automatisé"
          }, {
            value: "24/7",
            label: "Audit continu"
          }].map(stat => <div key={stat.label} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary glow-effect">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-0" />
    </section>;
};
export default Hero;