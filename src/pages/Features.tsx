import { Shield, Zap, Target, Brain, Award, Lock, ArrowRight, CheckCircle2 } from "lucide-react";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="ghost" className="mb-8">← Retour</Button>
          </Link>
          
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Du Problème à la <span className="text-gradient">Solution</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              L'histoire de comment nous avons réinventé le pentesting
            </p>
          </div>
        </div>
      </section>

      {/* Story Section 1: Le Problème */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h2 className="text-3xl font-bold">Le Défi</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4 p-6 rounded-lg bg-card/50 border border-border">
                <h3 className="text-xl font-semibold text-destructive">Le Pentesting Traditionnel</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2" />
                    <span className="text-muted-foreground">Plusieurs semaines d'attente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2" />
                    <span className="text-muted-foreground">Tests limités dans le temps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2" />
                    <span className="text-muted-foreground">Coûts prohibitifs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2" />
                    <span className="text-muted-foreground">Compétences rares et demandées</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4 p-6 rounded-lg bg-card/50 border border-primary/30 card-glow">
                <h3 className="text-xl font-semibold text-primary">Notre Vision</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Tests continus et automatisés</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Résultats en minutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Accessible à toutes les organisations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Intelligence artificielle souveraine</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section 2: Notre Approche */}
      <section className="py-16 relative bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h2 className="text-3xl font-bold">L'Innovation</h2>
            </div>
            
            <div className="space-y-8">
              {/* Feature 1 */}
              <div className="flex gap-6 items-start group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Brain className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-2xl font-semibold">IA Agentique Autonome</h3>
                  <p className="text-muted-foreground text-lg">
                    Notre système multi-agents orchestre automatiquement reconnaissance, exploitation et validation. 
                    Comme une équipe de pentesters expérimentés, chaque agent a sa spécialité et collabore pour identifier les failles.
                  </p>
                </div>
              </div>

              <div className="flex justify-center py-4">
                <ArrowRight className="w-6 h-6 text-primary/50" />
              </div>

              {/* Feature 2 */}
              <div className="flex gap-6 items-start group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-2xl font-semibold">Exploitation Réelle</h3>
                  <p className="text-muted-foreground text-lg">
                    82% de taux de réussite au benchmark XBOW. Notre IA n'identifie pas seulement les vulnérabilités, 
                    elle les exploite réellement, atteignant le niveau d'un pentester junior avec 2-3 ans d'expérience.
                  </p>
                </div>
              </div>

              <div className="flex justify-center py-4">
                <ArrowRight className="w-6 h-6 text-primary/50" />
              </div>

              {/* Feature 3 */}
              <div className="flex gap-6 items-start group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-2xl font-semibold">Rapidité Sans Compromis</h3>
                  <p className="text-muted-foreground text-lg">
                    Détection et exploitation en quelques minutes, pas en semaines. 
                    Notre plateforme teste en continu, vous alertant immédiatement des nouvelles vulnérabilités.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section 3: Les Garanties */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h2 className="text-3xl font-bold">La Confiance</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg border border-border bg-card/50 space-y-4 hover:border-primary/30 transition-all">
                <Shield className="w-12 h-12 text-primary" />
                <h3 className="text-xl font-semibold">Conformité NIS2 & DORA</h3>
                <p className="text-muted-foreground">
                  Automatisation complète des exigences réglementaires en matière de tests d'intrusion.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border bg-card/50 space-y-4 hover:border-primary/30 transition-all">
                <Lock className="w-12 h-12 text-primary" />
                <h3 className="text-xl font-semibold">Souveraineté Garantie</h3>
                <p className="text-muted-foreground">
                  Infrastructure 100% européenne. Vos données restent en Europe, aucune dépendance aux LLM américains ou chinois.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border bg-card/50 space-y-4 hover:border-primary/30 transition-all">
                <Award className="w-12 h-12 text-primary" />
                <h3 className="text-xl font-semibold">Preuves Automatiques</h3>
                <p className="text-muted-foreground">
                  Chaque exploitation génère des PoC vérifiables et des rapports techniques détaillés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 p-12 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
            <h2 className="text-4xl font-bold">
              Prêt à Sécuriser Votre Infrastructure ?
            </h2>
            <p className="text-xl text-muted-foreground">
              Rejoignez les organisations qui ont choisi l'excellence en cybersécurité offensive
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/">
                <Button size="lg" className="text-lg">
                  Voir la Démo <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeaturesPage;
