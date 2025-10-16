import { Card } from "@/components/ui/card";
import { Shield, AlertTriangle, Database, Server, Trophy } from "lucide-react";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SovereigntyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="ghost" className="mb-8">← Retour</Button>
          </Link>

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Souveraineté <span className="text-gradient">Technologique</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              L'indépendance technologique n'est pas une option, c'est une nécessité stratégique.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            <Card className="p-8 border-destructive/30">
              <div className="flex items-start gap-4 mb-6">
                <AlertTriangle className="w-10 h-10 text-destructive flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Les Risques des LLM Non-Souverains</h2>
                  <p className="text-muted-foreground">
                    Dépendre de modèles américains ou chinois pour votre cybersécurité expose vos données critiques à des juridictions étrangères.
                  </p>
                </div>
              </div>
              <ul className="space-y-3 ml-14">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span className="text-muted-foreground">Vos données de pentest transitent par des serveurs hors UE</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span className="text-muted-foreground">Accès potentiel aux vulnérabilités découvertes par des acteurs tiers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span className="text-muted-foreground">Non-conformité RGPD, NIS2 et DORA</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span className="text-muted-foreground">Risque de coupure d'accès en cas de tensions géopolitiques</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-primary/30 card-glow">
              <div className="flex items-start gap-4 mb-6">
                <Shield className="w-10 h-10 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Notre Approche Souveraine</h2>
                  <p className="text-muted-foreground">
                    Une stack technologique 100% maîtrisée et hébergée en Europe.
                  </p>
                </div>
              </div>
              <ul className="space-y-3 ml-14">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">Fine-tuning de Mistral (LLM français leader) sur nos données de pentest</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">Infrastructure hébergée exclusivement dans l'UE</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">Aucune donnée client ne sort du territoire européen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">Conformité totale NIS2, DORA, RGPD dès la conception</span>
                </li>
              </ul>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center hover:border-primary/30 transition-all">
                <Database className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Contrôle des Données</h3>
                <p className="text-sm text-muted-foreground">
                  Maîtrise totale de vos données sensibles et des vulnérabilités découvertes
                </p>
              </Card>

              <Card className="p-6 text-center hover:border-primary/30 transition-all">
                <Server className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Infrastructure Souveraine</h3>
                <p className="text-sm text-muted-foreground">
                  Stack technique 100% européenne, de l'IA à l'hébergement
                </p>
              </Card>

              <Card className="p-6 text-center hover:border-primary/30 transition-all">
                <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Leadership Européen 2030</h3>
                <p className="text-sm text-muted-foreground">
                  Ambition de devenir la référence mondiale en IA offensive souveraine
                </p>
              </Card>
            </div>

            <Card className="p-8 bg-primary/5 border-primary/20">
              <h3 className="text-2xl font-semibold mb-4 text-center">Vision 2030 : Leader Souverain Mondial</h3>
              <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-6">
                Notre ambition est de faire de l'Europe le leader incontesté de l'IA offensive. En capitalisant sur l'excellence 
                de l'écosystème cybersécurité français et européen, nous visons le Top 3 mondial d'ici 2030.
              </p>
              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <div className="text-center p-4 rounded-lg bg-background/50">
                  <div className="text-3xl font-bold text-primary mb-1">Top 3</div>
                  <div className="text-sm text-muted-foreground">Classement mondial IA offensive</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-background/50">
                  <div className="text-3xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Souveraineté européenne</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SovereigntyPage;
