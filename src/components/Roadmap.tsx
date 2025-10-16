import { Card } from "@/components/ui/card";
import { CheckCircle2, Circle } from "lucide-react";

const milestones = [
  {
    date: "Q4 2025",
    title: "Model Alloy",
    description: "Combinaison dynamique de plusieurs LLMs pour optimiser les performances selon le type de vulnérabilité.",
    completed: false
  },
  {
    date: "Q1 2026",
    title: "Entraînement Continu",
    description: "Boucle d'apprentissage automatique sur vos propres découvertes pour améliorer constamment la détection.",
    completed: false
  },
  {
    date: "Q1 2026",
    title: "Agents Spécialisés Avancés",
    description: "Détection des failles métier complexes et recherche de zero-day avec agents hautement spécialisés.",
    completed: false
  },
  {
    date: "Continu",
    title: "Transparence Totale",
    description: "Publication trimestrielle de nos benchmarks et performances pour garantir la confiance et la traçabilité.",
    completed: false
  }
];

const Roadmap = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Notre <span className="text-gradient">Roadmap</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Innovation continue et amélioration constante de nos capacités de détection.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-primary/20" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.date}
                  className="relative pl-12 md:pl-20"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fade-in 0.5s ease-out forwards'
                  }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-4 top-0">
                    {milestone.completed ? (
                      <CheckCircle2 className="w-8 h-8 text-primary glow-effect" />
                    ) : (
                      <Circle className="w-8 h-8 text-muted-foreground" />
                    )}
                  </div>

                  <Card className={`p-6 ${milestone.completed ? 'border-primary/30 card-glow' : 'border-primary/10'} transition-all hover:border-primary/30`}>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-mono text-primary">{milestone.date}</span>
                        {milestone.completed && (
                          <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary font-medium">
                            Terminé
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold">{milestone.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
