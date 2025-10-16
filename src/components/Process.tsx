import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Entrée IP",
    description: "Fournissez l'adresse IP ou la plage cible à auditer."
  },
  {
    number: "02",
    title: "Reconnaissance",
    description: "L'IA collecte les informations sur la cible et planifie l'attaque."
  },
  {
    number: "03",
    title: "Exploitation",
    description: "Tests d'intrusion automatisés avec outils standards (Nmap, Metasploit, etc.)."
  },
  {
    number: "04",
    title: "Rapport",
    description: "Génération automatique du rapport avec score de risque et recommandations."
  }
];

const Process = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Comment ça <span className="text-gradient">Fonctionne</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Un processus simple, entièrement automatisé du début à la fin.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <Card className="p-6 h-full border-primary/10 hover:border-primary/30 transition-all hover:card-glow group">
                  <div className="space-y-4">
                    <div className="text-5xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
