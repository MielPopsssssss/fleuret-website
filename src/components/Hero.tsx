import { Button } from "@/components/ui/button";
import logoFleuret from "@/assets/logo-fleuret.svg";
import heroBackground from "@/assets/hero-fencing-cyber.png";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  return <section className="relative min-h-screen flex items-start justify-center overflow-hidden pt-4 md:pt-8" itemScope itemType="https://schema.org/WebPageElement">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto text-center space-y-6 animate-in fade-in duration-1000">
          {/* Logo */}
          <div className="inline-flex items-center justify-center">
            <img 
              src={logoFleuret} 
              alt="Fleuret AI - Plateforme de pentesting automatisé par intelligence artificielle" 
              className="h-48 md:h-56 lg:h-64"
              width="256"
              height="256"
            />
          </div>

          <h1 className="text-3xl md:text-7xl font-bold tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]" itemProp="headline">
            <span className="text-gradient glow-effect">{t('hero.title')}</span>
          </h1>

          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]" itemProp="description">
            {t('hero.subtitle')}
          </p>

          <nav className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4" aria-label="Actions principales">
            <Link to="/demo" aria-label="Voir la démonstration de notre POC fonctionnel">
              <Button 
                size="lg" 
                className="text-lg bg-primary/90 backdrop-blur-sm hover:bg-primary hover:scale-105 transition-all shadow-lg"
              >
                {t('hero.cta.demo')}
              </Button>
            </Link>
            <Link to="/waitlist" aria-label="Rejoindre la liste d'attente Fleuret AI">
              <Button 
                size="lg" 
                className="text-lg bg-primary/90 backdrop-blur-sm hover:bg-primary hover:scale-105 transition-all shadow-lg"
              >
                {t('hero.cta.waitlist')}
              </Button>
            </Link>
          </nav>
        </div>
      </div>


    </section>;
};
export default Hero;