import { Card } from "@/components/ui/card";
import { AlertTriangle, Clock, DollarSign } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-24 relative bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-4">
              <AlertTriangle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Le Problème Actuel</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Votre Équipe de Sécurité <span className="text-gradient">Est Débordée</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Vos déploiements s'enchaînent à grande vitesse, mais vos pentests prennent{" "}
              <span className="text-primary font-semibold">2 à 4 semaines</span>, coûtant temps et argent.
            </p>
          </div>

          <Card className="p-8 md:p-12 border-primary/30 bg-gradient-to-br from-card/80 to-card/50 backdrop-blur-sm">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">2-4 Semaines</h3>
                <p className="text-muted-foreground">Délai moyen pour un pentest manuel</p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <AlertTriangle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">30%</h3>
                <p className="text-muted-foreground">Des failles critiques peuvent passer inaperçues</p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Coûteux</h3>
                <p className="text-muted-foreground">Budget et ressources humaines limités</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-primary/10 text-center">
              <p className="text-lg text-muted-foreground">
                Pendant ce temps, vos systèmes restent <span className="text-primary font-semibold">exposés aux cyberattaques</span>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Problem;
