import { Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logoFleuret from "@/assets/logo-fleuret.svg";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-primary/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logoFleuret} alt="Fleuret.ai" className="h-10 w-auto" />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t('footer.contact')}</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:contact@fleuret-ai.com" className="hover:text-primary transition-colors">
                  contact@fleuret-ai.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>14 Rue Ballu, 75009 Paris</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t('footer.program')}</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>{t('footer.program.hec')}</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/10 text-center text-muted-foreground text-sm">
          <p>{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
