import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logoFleuret from "@/assets/logo-fleuret.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img 
            src={logoFleuret} 
            alt="Fleuret AI" 
            className="h-16 w-auto opacity-90"
          />
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
          Pentest automatisé par IA<br />
          <span className="text-muted-foreground">en moins d'une semaine</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Obtenez votre pentest conforme ISO27001, SOC2 ou NIS2—entièrement automatisé et livré en moins de 3 jours.
        </p>

        {/* CTA Button */}
        <div className="pt-4">
          <Button 
            asChild 
            size="lg"
            className="text-lg px-8 py-6 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all"
          >
            <Link to="/demo">Demander une Démo</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
