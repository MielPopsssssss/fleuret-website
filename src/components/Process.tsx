import { Shield, Zap, FileCheck, Download } from "lucide-react";

const steps = [
  {
    icon: Shield,
    title: "Configuration guidée rapide",
    description: "Pas besoin de connaître tous les détails techniques, remplissez le formulaire guidé et réservez un appel"
  },
  {
    icon: Zap,
    title: "Notre IA attaque vos actifs",
    description: "Nous testons votre infrastructure pour détecter les vulnérabilités automatiquement"
  },
  {
    icon: FileCheck,
    title: "Remédiation assistée des vulnérabilités critiques",
    description: "Recevez une notification instantanée pour chaque vulnérabilité découverte"
  },
  {
    icon: Download,
    title: "Téléchargez votre rapport de conformité",
    description: "Choisissez entre résumé exécutif ou rapport détaillé. Partagez-le ou exportez-le en PDF"
  }
];

const Process = () => {
  return (
    <section className="py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-24">
          Comment obtenir votre pentest<br />
          <span className="text-muted-foreground">en moins d'une semaine</span>
        </h2>

        <div className="space-y-32">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-muted">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold">{step.title}</h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="aspect-square bg-muted/30 rounded-3xl border border-border" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
