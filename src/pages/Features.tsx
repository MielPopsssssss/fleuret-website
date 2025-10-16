import { useState } from "react";
import { Shield, Zap, Target, Brain, Award, Lock, Trophy } from "lucide-react";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/ContactDialog";

const FeaturesPage = () => {
  const [contactDialogOpen, setContactDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/">
            <Button variant="ghost" className="mb-12">← Retour</Button>
          </Link>
          
          <div className="text-center max-w-5xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              L'IA Offensive qui Pense Comme un Hacker
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Automatisez vos pentests avec une IA souveraine capable d'exploiter réellement les vulnérabilités, pas seulement de les détecter.
            </p>
            <div className="flex gap-4 justify-center pt-8">
              <Link to="/">
                <Button size="lg" className="text-lg px-8">Voir la Démo</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Des Résultats Mesurables.<br />Vérifiables et Reproductibles.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center space-y-4">
              <div className="text-6xl md:text-7xl font-bold text-gradient">82%</div>
              <p className="text-xl text-muted-foreground">Taux de réussite au benchmark XBOW</p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-6xl md:text-7xl font-bold text-gradient">100%</div>
              <p className="text-xl text-muted-foreground">Infrastructure souveraine européenne</p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-6xl md:text-7xl font-bold text-gradient">50x</div>
              <p className="text-xl text-muted-foreground">Plus rapide que le pentesting manuel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Sections */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-32">
            
            {/* Feature 1 */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <Brain className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">IA Agentique</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Des Agents IA qui Pensent Comme des Hackers
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Des centaines d'agents IA spécialisés travaillent en parallèle pour découvrir, valider et exploiter les vulnérabilités sans intervention humaine. Chaque agent possède une expertise unique et collabore pour trouver ce que d'autres outils manquent.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center">
                <Brain className="w-32 h-32 text-primary/40" />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative h-[400px] rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center order-2 md:order-1">
                <Zap className="w-32 h-32 text-primary/40" />
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Rapidité</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Pentestez en Heures, Pas en Semaines
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Pas de planification, pas de délais. Déployez votre code et regardez notre IA se mettre au travail immédiatement. Des résultats en quelques minutes, une couverture complète en quelques heures.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <Target className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Exploitation Réelle</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Ne Détecte Pas. Exploite.
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Notre IA n'identifie pas seulement les vulnérabilités - elle les exploite réellement. Avec un niveau équivalent à un pentester junior, chaque faille est vérifiée et documentée avec des PoC automatiques.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 mt-4">
                  <Trophy className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Rank <span className="text-primary font-semibold">Pro Hacker</span> sur Hack The Box</span>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center">
                <Target className="w-32 h-32 text-primary/40" />
              </div>
            </div>

            {/* Feature 4 */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative h-[400px] rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center order-2 md:order-1">
                <Shield className="w-32 h-32 text-primary/40" />
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Conformité</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Conforme NIS2 & DORA par Design
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Automatisation complète des exigences réglementaires. Notre plateforme documente chaque test, génère des rapports d'audit détaillés et maintient une traçabilité totale pour vos besoins de conformité.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sovereignty Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Lock className="w-20 h-20 text-primary mx-auto" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Souveraineté Numérique Garantie
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Infrastructure 100% hébergée en Europe. Vos données sensibles ne quittent jamais le territoire européen. Aucune dépendance aux modèles américains ou chinois. Votre sécurité, sous votre contrôle.
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="space-y-2">
                <Award className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-lg font-semibold">RGPD Compliant</h3>
                <p className="text-muted-foreground">Conformité totale aux réglementations européennes</p>
              </div>
              <div className="space-y-2">
                <Lock className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-lg font-semibold">Données Maîtrisées</h3>
                <p className="text-muted-foreground">Hébergement et traitement en Europe uniquement</p>
              </div>
              <div className="space-y-2">
                <Shield className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-lg font-semibold">IA Souveraine</h3>
                <p className="text-muted-foreground">Modèles propriétaires développés en Europe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Prêt à Automatiser Votre Sécurité Offensive ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Rejoignez les organisations qui font confiance à l'IA pour protéger leurs infrastructures critiques.
            </p>
            <div className="flex gap-4 justify-center pt-8">
              <Button 
                size="lg" 
                className="text-lg px-8"
                onClick={() => setContactDialogOpen(true)}
              >
                Demander une Démo
              </Button>
            </div>

            <ContactDialog open={contactDialogOpen} onOpenChange={setContactDialogOpen} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeaturesPage;
