import { Button } from "@/components/ui/button";
import logoFleuret from "@/assets/logo-fleuret.png";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Grid */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(to_right,hsl(var(--primary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto text-center space-y-6 animate-in fade-in duration-1000">
          {/* Logo */}
          <div className="inline-flex items-center justify-center">
            <img src={logoFleuret} alt="Fleuret AI" className="h-48 md:h-56 lg:h-64" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-gradient glow-effect">Pentests continus serveur et web , propulsés par une IA agentique.</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            De l'IP au rapport audit‑ready, en continu, hébergé en Europe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 pb-16">
            <Link to="/demo">
              <Button 
                size="lg" 
                className="text-lg hover:bg-white hover:text-foreground transition-colors"
              >
                Voir notre POC fonctionel
              </Button>
            </Link>
            <Button 
              size="lg" 
              className="text-lg hover:bg-white hover:text-foreground transition-colors"
            >
              Rejoindre notre waitlist
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary opacity-70" />
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-0" />
    </section>;
};
export default Hero;