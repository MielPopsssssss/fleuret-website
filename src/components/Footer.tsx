import { Shield, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-primary/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold">fleuret.ai</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Pentesting automatisé par IA pour la conformité NIS2 et la souveraineté numérique française.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:contact@fleuret-ai.com" className="hover:text-primary transition-colors">
                  contact@fleuret-ai.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Programme</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>HEC Launchpad - Janvier 2025</p>
              <p>Souveraineté numérique</p>
              <p>Conformité NIS2</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/10 text-center text-muted-foreground text-sm">
          <p>&copy; 2025 fleuret.ai. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
