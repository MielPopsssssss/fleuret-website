import { Button } from "@/components/ui/button";
import logoFleuret from "@/assets/logo-fleuret.svg";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  return <section className="relative min-h-screen flex items-start justify-center overflow-hidden pt-8 md:pt-12">
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto text-center space-y-6 animate-in fade-in duration-1000">
          {/* Logo */}
          <div className="inline-flex items-center justify-center">
            <img src={logoFleuret} alt="Fleuret AI" className="h-48 md:h-56 lg:h-64" />
          </div>

          <h1 className="text-3xl md:text-7xl font-bold tracking-tight">
            <span className="text-gradient glow-effect">{t('hero.title')}</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link to="/demo">
              <Button 
                size="lg" 
                className="text-lg hover:bg-white hover:text-foreground transition-colors"
              >
                {t('hero.cta.demo')}
              </Button>
            </Link>
            <Link to="/waitlist">
              <Button 
                size="lg" 
                className="text-lg hover:bg-white hover:text-foreground transition-colors"
              >
                {t('hero.cta.waitlist')}
              </Button>
            </Link>
          </div>
        </div>
      </div>


    </section>;
};
export default Hero;