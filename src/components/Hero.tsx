import { Button } from "@/components/ui/button";
import logoFleuret from "@/assets/logo-fleuret.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-950 via-purple-950 to-slate-950" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(168,85,247,0.15),transparent_50%)]" />

      {/* Animated Grid */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(to_right,hsl(var(--primary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-in fade-in duration-1000">
          {/* Logo */}
          <div className="inline-flex items-center justify-center">
            <img src={logoFleuret} alt="Fleuret AI" className="h-48 md:h-56 lg:h-64" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-gradient glow-effect">Pentests continus d'applications web, propulsés par une IA agentique.</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            De l'IP au rapport audit‑ready, en continu, hébergé en Europe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/demo">
              <Button 
                size="lg" 
                className="text-lg group relative overflow-hidden"
              >
                <span className="relative z-10">Démarrer un Scan Gratuit</span>
                <div className="absolute inset-0 bg-primary-glow opacity-0 group-hover:opacity-20 transition-opacity" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-0" />
    </section>;
};
export default Hero;