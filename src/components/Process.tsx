import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";

const Process = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      number: "01",
      title: t('process.deploy.title'),
      description: t('process.deploy.desc')
    },
    {
      number: "02",
      title: t('process.attack.title'),
      description: t('process.attack.desc')
    },
    {
      number: "03",
      title: t('process.exploits.title'),
      description: t('process.exploits.desc')
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            {t('process.main.title')} <span className="text-gradient">{t('process.main.works')}</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('process.main.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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