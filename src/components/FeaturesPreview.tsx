import { Shield, Zap, Target, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const featuresPreview = [
  {
    icon: Clock,
    title: "Résultats en Heures",
    description: "Obtenez vos résultats de pentest en quelques heures au lieu de plusieurs semaines."
  },
  {
    icon: Shield,
    title: "Couverture Complète",
    description: "Aucune faille manquée grâce à nos agents IA spécialisés qui collaborent."
  },
  {
    icon: Zap,
    title: "Sécurité Continue 24/7",
    description: "Surveillance et tests automatisés en continu pour une protection permanente."
  },
  {
    icon: Target,
    title: "72% de Réussite",
    description: "Performances validées sur des benchmarks exigeants avec exploitation réelle."
  }
];

const FeaturesPreview = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            L'IA Qui Pense Comme un Hacker, <span className="text-gradient">Travaille Comme une Machine</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Autonomous Pentest IA déploie des agents spécialisés qui collaborent pour découvrir, tester et exploiter les vulnérabilités réelles — automatiquement et en continu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {featuresPreview.map((feature, index) => (
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

        <div className="text-center">
          <Link to="/features">
            <Button size="lg" variant="outline" className="group">
              En savoir plus
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesPreview;
