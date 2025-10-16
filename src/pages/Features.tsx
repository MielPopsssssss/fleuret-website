import { Shield, Zap, Target, Brain, Award, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Brain,
    title: "IA Agentique Autonome",
    description: "Notre système multi-agents orchestre automatiquement reconnaissance, exploitation et validation sans intervention humaine."
  },
  {
    icon: Target,
    title: "Exploitation Réelle",
    description: "82% de taux de réussite au benchmark XBOW. Notre IA atteint le niveau d'un pentester junior avec 2-3 ans d'expérience."
  },
  {
    icon: Zap,
    title: "Rapidité Sans Compromis",
    description: "Tests continus et automatisés. Détection et exploitation en quelques minutes, pas en semaines."
  },
  {
    icon: Shield,
    title: "Conformité NIS2 & DORA",
    description: "Automatisation complète des exigences de tests d'intrusion et de sécurité offensive."
  },
  {
    icon: Lock,
    title: "Souveraineté Garantie",
    description: "Infrastructure 100% européenne, données maîtrisées, aucune dépendance aux LLM US/CN."
  },
  {
    icon: Award,
    title: "Preuves Automatiques",
    description: "Chaque exploitation génère automatiquement des PoC vérifiables et des rapports techniques détaillés."
  }
];

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="ghost" className="mb-8">← Retour</Button>
          </Link>
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Une Solution <span className="text-gradient">Complète</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              La première IA offensive souveraine européenne capable d'automatiser l'intégralité du processus de pentesting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className="p-6 hover:border-primary/30 transition-all card-glow group"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fade-in 0.5s ease-out forwards'
                }}
              >
                <feature.icon className="w-12 h-12 text-primary mb-4 glow-effect group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
