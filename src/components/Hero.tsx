import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logoFleuret from "@/assets/logo-fleuret.svg";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Loader2 } from "lucide-react";
import { z } from "zod";

const emailSchema = z.string().email().max(255);

const Hero = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = emailSchema.safeParse(email);
    if (!validation.success) {
      toast({
        title: t('waitlist.error.invalid'),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke('add-to-brevo', {
        body: { email: validation.data },
      });

      if (error) throw error;

      toast({
        title: t('waitlist.success.title'),
        description: t('waitlist.success.description'),
      });
      setEmail("");
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: t('waitlist.error.generic'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden pt-8 md:pt-12" itemScope itemType="https://schema.org/WebPageElement">
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

          <h1 className="text-3xl md:text-7xl font-bold tracking-tight" itemProp="headline">
            <span className="text-gradient glow-effect">{t('hero.title')}</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" itemProp="description">
            {t('hero.subtitle')}
          </p>

          {/* Email signup form with demo button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-start pt-6 max-w-3xl mx-auto">
            {/* Demo button */}
            <Link to="/demo" aria-label="Voir la démonstration de notre POC fonctionnel">
              <Button 
                size="lg" 
                className="text-lg rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 whitespace-nowrap h-[52px]"
              >
                {t('hero.cta.demo')}
              </Button>
            </Link>

            {/* Email form */}
            <form onSubmit={handleSubmit} className="flex-1 w-full sm:w-auto">
              <div className="relative flex items-center bg-secondary/50 rounded-full border border-border/50 p-1.5 backdrop-blur-sm transition-all duration-300 focus-within:border-primary/50 focus-within:shadow-[0_0_20px_rgba(59,130,246,0.3)] focus-within:bg-secondary/70">
                <Input
                  type="email"
                  placeholder={t('waitlist.placeholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent border-0 text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 px-4 text-base min-w-[180px]"
                  disabled={isSubmitting}
                  required
                />
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 h-auto font-medium whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      {t('hero.cta.waitlist')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-2 text-center sm:text-left sm:pl-4">
                {t('waitlist.subtext')}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;