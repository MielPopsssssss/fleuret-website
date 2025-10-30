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
                  <div className="text-6xl md:text-7xl font-bold text-gradient mb-2">72%</div>
                  <div className="text-xl text-muted-foreground">Benchmark XBOW</div>
                  <div className="text-sm text-muted-foreground mt-1">vs ~30% GPT-4o | ~40% Gemini 2.5 Flash</div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Le benchmark XBOW représente le standard le plus exigeant en pentest automatisé avec plus de 500 scénarios CTF et challenges pratiques. 
                  Notre architecture multi-agents atteint <span className="text-primary font-semibold">72% de réussite</span>, 
                  triplant les performances des LLMs utilisés directement.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 mt-4">
                  <Trophy className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Entraîné sur <span className="text-primary font-semibold">500+ challenges réels</span></span>
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
