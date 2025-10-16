import { Card } from "@/components/ui/card";
import { CheckCircle2, Circle } from "lucide-react";

const milestones = [
  {
    date: "Sept-Oct-Nov 2025",
    title: "Inception, Recherche & Architecture",
    description: "Définition du concept, constitution de l'équipe, étude de marché, conception système, fine-tuning Mistral, premiers tests sur Hack The Box.",
    completed: true
  },
  {
    date: "Déc-Jan-Fév 2025-2026",
    title: "PoC Fonctionnel & HEC Launchpad",
    description: "Démonstration bout-en-bout : IP → reconnaissance → exploitation → rapport. L'IA atteint le niveau d'un pentester junior, validé par 82% de réussite au benchmark XBOW. Présentation aux investisseurs, début de la levée de fonds.",
    completed: true
  },
  {
    date: "Q1-Q2 2026",
    title: "V1 Production",
    description: "Durcissement, conformité NIS2 complète, premiers clients pilotes.",
    completed: false
  },
  {
    date: "Q3-Q4 2026",
    title: "Scale & Leadership Européen",
    description: "Multi-tenancy, couverture techno élargie, positionnement Top 3 du classement IA offensive EU.",
    completed: false
  },
  {
    date: "2030",
    title: "Leader Souverain Mondial",
    description: "Domination du marché européen, exportation vers pays alliés, référence mondiale en IA offensive souveraine.",
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
            3 mois d'innovation intensive : notre IA a déjà le niveau d'un pentester junior.
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
