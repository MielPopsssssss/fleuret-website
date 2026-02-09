import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Target, Brain, Shield, FileCheck, Repeat, Gauge } from "lucide-react";

const Features = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Target,
      title: t('features.autonomous.title'),
      description: t('features.autonomous.desc')
    },
    {
      icon: Brain,
      title: t('features.mistral.title'),
      description: t('features.mistral.desc')
    },
    {
      icon: Shield,
      title: t('features.compliance.title'),
      description: t('features.compliance.desc')
    },
    {
      icon: FileCheck,
      title: t('features.reports.title'),
      description: t('features.reports.desc')
    },
    {
      icon: Repeat,
      title: t('features.audit.title'),
      description: t('features.audit.desc')
    },
    {
      icon: Gauge,
      title: t('features.performance.title'),
      description: t('features.performance.desc')
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-urbanist">
            {t('features.main.title')} <span className="text-gradient">{t('features.main.complete')}</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('features.main.subtitle')}
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