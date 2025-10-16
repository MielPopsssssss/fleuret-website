import { Card } from "@/components/ui/card";
import { Sword, Database, Lock, Trophy, AlertTriangle, CheckCircle } from "lucide-react";

const Sovereignty = () => {
  return (
    <section className="py-24 relative bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-card/50 backdrop-blur-sm mb-4">
            <Sword className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">🇫🇷 Souveraineté Française & Européenne</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Le Fleuret : <span className="text-gradient">Précision, Intelligence & Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Comme le fleuret incarne la tradition française de l'escrime par sa précision et son intelligence tactique, <strong className="text-foreground">Fleuret AI</strong> représente l'excellence de la cybersécurité offensive européenne. Dans le cyber et l'IA offensive, la maîtrise des données, des infrastructures et de l'évolution technologique détermine le leadership de demain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 border-primary/20 card-glow hover:border-primary/30 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold">Risques des LLM Non-Souverains</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-destructive mt-1">•</span>
                  <span>Fuites de secrets et données personnelles non maîtrisées (RGPD)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive mt-1">•</span>
                  <span>Exposition aux lois étrangères (Cloud Act, Patriot Act)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive mt-1">•</span>
                  <span>Impossibilité de garantir la purge d'informations sensibles</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive mt-1">•</span>
                  <span>Enrichissement des écosystèmes hors-UE avec vos découvertes</span>
                </li>
              </ul>
            </div>
          </Card>

          <Card className="p-8 border-primary/20 card-glow hover:border-primary/30 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Notre Approche Souveraine</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>🇫🇷 LLM Mistral fine-tuné sur infrastructure française certifiée</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>🇪🇺 Hébergement cloud souverain européen (Scaleway, OVH)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Conformité RGPD, NIS2, DORA garantie et auditable</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Innovations et découvertes restent dans l'écosystème européen</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Database,
              title: "🇫🇷 Maîtrise des Données",
              description: "Contrôle total sur les données d'entraînement et leur gouvernance, sans exposition aux lois extraterritoriales américaines (Cloud Act, Patriot Act)."
            },
            {
              icon: Lock,
              title: "🇪🇺 Infrastructure Souveraine",
              description: "Hébergement certifié EU, audits transparents, garantie de non-accès par des puissances tierces. Solution 100% européenne."
            },
            {
              icon: Trophy,
              title: "Excellence Française 2030",
              description: "Ambition de dominer le classement européen des IA offensives avec excellence technique française et conformité exemplaire."
            }
          ].map((item, index) => (
            <Card 
              key={item.title}
              className="p-6 border-primary/10 hover:border-primary/30 transition-all"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fade-in 0.5s ease-out forwards'
              }}
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 border-primary/30 bg-card/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto space-y-6">
            <h3 className="text-2xl font-bold text-center mb-6">
              Vers le Classement de l'IA Offensive : Horizon 2030
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
              <div className="space-y-4">
                <p className="leading-relaxed">
                  <span className="text-primary font-semibold">Le marché se structure :</span> L'IA qui trouve le plus vite, au mieux, avec le moins de faux positifs, dominera le secteur. L'accès aux meilleures données et la maîtrise de l'infrastructure seront déterminants.
                </p>
                <p className="leading-relaxed">
                  <span className="text-primary font-semibold">L'Europe a une carte unique :</span> Fusionner excellence technique (IA/ML, cybersécurité) et gouvernance data pour imposer un leader souverain.
                </p>
              </div>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  <span className="text-primary font-semibold">Notre objectif :</span> Être numéro 1 en donnant confiance par la souveraineté, la transparence et la conformité, tout en surpassant la concurrence sur la performance technique.
                </p>
                <p className="leading-relaxed">
                  <span className="text-primary font-semibold">L'avantage compétitif :</span> Posséder, entraîner et améliorer des LLM "made in EU" avec gouvernance ouverte et sécurisée pour attirer grands comptes et institutionnels.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Sovereignty;
