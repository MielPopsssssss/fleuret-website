import { Shield, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6" />
              <span className="text-xl font-bold">fleuret.ai</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Pentesting automatisé par IA pour la conformité NIS2
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <div className="space-y-3 text-muted-foreground">
              <a 
                href="mailto:contact@fleuret-ai.com" 
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                contact@fleuret-ai.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Programme</h3>
            <div className="space-y-2 text-muted-foreground text-sm">
              <p>HEC Launchpad - Janvier 2025</p>
              <p>Souveraineté numérique</p>
              <p>Conformité NIS2</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>&copy; 2025 fleuret.ai. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
