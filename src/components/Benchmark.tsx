import { Card } from "@/components/ui/card";
import { Trophy, Target, Zap, CheckCircle, TrendingUp, Shield } from "lucide-react";

const Benchmark = () => {
  return (
    <section className="py-24 relative bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-card/50 backdrop-blur-sm mb-4">
            <Trophy className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Performance de Pointe</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">82% au Benchmark XBOW</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Le standard industriel pour évaluer objectivement les capacités des agents autonomes à exploiter des vulnérabilités réelles, à grande échelle.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <Card className="p-8 md:p-12 border-primary/30 bg-gradient-to-br from-card/80 to-card/50 backdrop-blur-sm card-glow">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <div className="text-6xl md:text-7xl font-bold text-gradient mb-2">82%</div>
                  <div className="text-xl text-muted-foreground">Taux de réussite XBOW</div>
                  <div className="text-sm text-muted-foreground mt-1">vs 77% moyenne du secteur (MAPTA)</div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Sur 104 challenges CTF représentant des vulnérabilités réelles (SSRF, SQLi, XSS, IDOR...), 
                  notre IA exploite avec succès <span className="text-primary font-semibold">82% des failles</span>, 
                  surpassant les références actuelles du marché.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 mt-4">
                  <Trophy className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Rank <span className="text-primary font-semibold">Pro Hacker</span> sur Hack The Box</span>
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
                  <div key={metric.label} className="flex gap-4 items-start p-4 rounded-lg bg-background/50 border border-primary/10">
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

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 border-primary/10 hover:border-primary/30 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Méthodologie Agentique</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Orchestration multi-agents : coordinator de planification, agents d'exécution sandboxés, 
                et agent de validation pour prouver l'impact réel de chaque exploit.
              </p>
            </div>
          </Card>

          <Card className="p-6 border-primary/10 hover:border-primary/30 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Blackbox & Whitebox</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Tests en mode blackbox (attaque externe sans code source) et whitebox 
                (accès complet pour workflows internes), adaptés à vos besoins d'audit.
              </p>
            </div>
          </Card>

          <Card className="p-6 border-primary/10 hover:border-primary/30 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Preuves Automatiques</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Chaque vulnérabilité exploitée génère un rapport avec preuve technique (flag CTF exfiltré), 
                explication détaillée et recommandations de remédiation.
              </p>
            </div>
          </Card>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="p-6 border-primary/20 bg-card/30">
            <p className="text-sm text-muted-foreground leading-relaxed text-center">
              <span className="text-primary font-semibold">Éthique et reproductibilité :</span> Tous nos tests 
              sont menés en environnement isolé sans impact production, avec disclosure responsable. 
              Notre approche open-source garantit des résultats vérifiables et transparents.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Benchmark;
