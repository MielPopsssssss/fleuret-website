import { Card } from "@/components/ui/card";
import { Target, Brain, Shield, FileCheck, Repeat, Gauge } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Pipeline Autonome",
    description: "De l'IP d'entrée au rapport livrable, sans intervention humaine."
  },
  {
    icon: Brain,
    title: "IA Mistral Souveraine",
    description: "LLM fine-tuné sur infrastructure française certifiée, conformité RGPD garantie et auditable."
  },
  {
    icon: Shield,
    title: "Conformité NIS2 & DORA",
    description: "Ciblage prioritaire des exigences réglementaires européennes, anticipation des standards à venir."
  },
  {
    icon: FileCheck,
    title: "Rapports Standards",
    description: "Format professionnel avec synthèse exécutive et preuves techniques exploitables."
  },
  {
    icon: Repeat,
    title: "Audit Continu",
    description: "Scans récurrents pour surveillance permanente et amélioration continue du modèle."
  },
  {
    icon: Gauge,
    title: "Performance de Pointe",
    description: "OWASP Top 10, CVEs critiques, avec le meilleur ratio vitesse/précision du marché."
  }
];

const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Une Solution <span className="text-gradient">Complète</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Reconnaissance, scanning, énumération, exploitation, post-exploitation et reporting, 
            entièrement orchestrés par notre IA souveraine. Maîtrise totale des données, conformité européenne, leadership technologique.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="p-6 card-glow hover:scale-105 transition-all duration-300 group border-primary/10 hover:border-primary/30"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fade-in 0.5s ease-out forwards'
              }}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
