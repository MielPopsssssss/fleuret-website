import { Card } from "@/components/ui/card";
import { Trophy, Target, Zap, CheckCircle, TrendingUp, Shield } from "lucide-react";

const Benchmark = () => {
  return (
    <section className="pt-24 pb-0 relative">
      <div className="container mx-auto px-4">

        <div className="max-w-5xl mx-auto mb-16">
          <Card className="p-8 md:p-12 border-primary/30 bg-white card-glow">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <div className="text-5xl md:text-6xl font-bold text-gradient mb-2">Recommandations Actionnables</div>
                  <div className="text-xl text-muted-foreground">Pour chaque vulnérabilité détectée</div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Au-delà de la simple détection, notre IA génère des <span className="text-primary font-semibold">recommandations précises et actionnables</span> pour corriger chaque vulnérabilité identifiée. 
                  Chaque rapport inclut des étapes de remédiation détaillées, des exemples de code sécurisé et une priorisation basée sur le niveau de risque réel.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 mt-4">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Rapports <span className="text-primary font-semibold">complets et exploitables</span></span>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: Target,
                    label: "Exploitation réelle",
                    value: "Pas seulement détection théorique"
                  },
                  {
                    icon: Zap,
                    label: "Rapidité",
                    value: "Temps optimisé par challenge"
                  },
                  {
                    icon: CheckCircle,
                    label: "Validation PoC",
                    value: "Faux positifs filtrés automatiquement"
                  },
                  {
                    icon: TrendingUp,
                    label: "Efficacité ressources",
                    value: "Coût tokens/calcul maîtrisé"
                  }
                ].map((metric) => (
                  <div key={metric.label} className="flex gap-4 items-start p-4 rounded-lg bg-secondary/30 border border-primary/10">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <metric.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{metric.label}</div>
                      <div className="text-sm text-muted-foreground">{metric.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Benchmark;
