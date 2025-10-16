import { Shield, Zap, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const featuresPreview = [
  {
    icon: Target,
    title: "IA Agentique",
    description: "82% de réussite au benchmark XBOW - niveau pentester junior 2-3 ans d'XP."
  },
  {
    icon: Zap,
    title: "Rapidité",
    description: "De l'IP au rapport en minutes. Tests continus automatisés."
  },
  {
    icon: Shield,
    title: "Conformité",
    description: "NIS2 & DORA ready. Souveraineté garantie 100% EU."
  }
];

const FeaturesPreview = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Une Solution <span className="text-gradient">Complète</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            La première IA offensive souveraine européenne.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
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
